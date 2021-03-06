import { BaseTask } from "./BaseTask"
import { ExtendSheetTask } from "./ExtendSheetTask"
import { SyncerError, GapiErrorResponse } from "../../../errors"
import { UpdateRowPayload, SyncerPayload, TestMode, SyncerPayloadType } from "../../../types"

export function createUpdateRowTask<P extends UpdateRowPayload>(payload: P, testMode: TestMode): BaseTask<P> | undefined {
    return (testMode === TestMode.OFF)
        ? new UpdateRowTask(payload)
        : new MockUpdateRowTask(payload, testMode)
}

export class UpdateRowTask<P extends UpdateRowPayload> extends BaseTask<P> {
    constructor(payload: P) {
        super(payload)
    }

    public async work(token: string): Promise<P> {
        let range = `${this.payload.sheetTitle}!A${this.payload.idx + 1}:A${this.payload.idx + 1}`
        let url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${this.payload.spreadsheetId}/values/${range}`)
        let headers = { Authorization: `Bearer ${token}` }
        let params: Record<string, string> = { valueInputOption: "RAW" }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        let body = JSON.stringify({ range: range, majorDimension: "ROWS", values: [[this.payload.content]] })
        let opts: RequestInit = { method: "PUT", cache: "no-cache", headers: headers, body: body }
        let response = await fetch(url.toString(), opts)
        let data = await response.json()
        if (!response.ok) {
            if (data.error.message.includes("exceeds grid limits")) {
                let extendSheetTask: SyncerPayload = {
                    type: SyncerPayloadType.EXTEND_SHEET,
                    spreadsheetId: this.payload.spreadsheetId,
                    sheetId: this.payload.sheetId,
                    rejects: false,
                }
                await new ExtendSheetTask(extendSheetTask).work(token)
                let secondResponse = await fetch(url.toString(), opts)
                if (!secondResponse.ok) {
                    let error: GapiErrorResponse = await response.json()
                    throw new SyncerError(JSON.stringify(error), "Failed to update entry", response.status === 401)
                } else {
                    return this.payload
                }
            }
            throw new SyncerError(JSON.stringify(data), "Failed to update entry", response.status === 401)
        }
        return this.payload
    }
}

export class MockUpdateRowTask<P extends UpdateRowPayload> extends BaseTask<P> {
    constructor(payload: P, testMode: TestMode) {
        super(payload, testMode)
    }

    public async work(): Promise<P> {
        if (this.testMode === TestMode.FAIL_UPDATE_RANGE) {
            let error = new Error("mock fail")
            throw new SyncerError(JSON.stringify(error), "Failed to update entry", false)
        }
        return this.payload
    }
}
