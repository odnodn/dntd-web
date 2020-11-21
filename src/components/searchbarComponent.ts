import m from "mithril"
import { searchModel } from ".."
import { Caret, ViewMode } from "../types"
import { caretController, textController, searchController, urlController } from "../controllers"
import { JournalModel } from "../models"


export function searchbarComponent() {
    const caret: Caret = { pos: null, el: null }

    function view() {
        const journal = urlController.getActiveJournal()
        if (journal === undefined || journal.loaded === false) return
        return m("#search", [
            m("#searchQuery", searchNodeSettings(), m.trust(searchModel.barQuery.rendered)),
            m("button", clearSearchNodeSettings(), "x"),
            (journal.viewMode !== ViewMode.GRAPH) ? m("button", gotoGraphSettings(journal), "graph") : [],
            (journal.viewMode !== ViewMode.COMPOSE) ? m("button", gotoComposeSettings(journal), "compose") : [],
        ])
    }

    function searchNodeSettings() {
        return {
            placeholder: "Search for text or tags",
            contenteditable: "true",
            class: `entry breakwrap`,
            oninput: (event: any) => onInput(event),
            onupdate: () => onUpdate(),
            onkeydown: (event: any) => onKeydown(event)
        }
    }

    function clearSearchNodeSettings() {
        return {
            id: "clearSearch",
            class: "del",
            onclick: () => searchController.updateSearchbar("")
        }
    }

    function onInput(event: any) {
        let pos = caretController.getCaretPosition(event.target)
        caret.pos = (pos) ? pos[1] : null
        caret.el = event.target
        searchController.updateSearchbar(textController.escape(event.target.innerText))
    }

    function onUpdate() {
        caretController.setCaretPosition(caret.el, caret.pos)
        caret.pos = null
        caret.el = null
    }

    function onKeydown(event: any) {
        if (event.keyCode == 13 && !event.shiftKey) {
            event.preventDefault()
            event.target.blur()
        }
    }

    function gotoComposeSettings(journal: JournalModel) {
        return {
            id: "goToCompose",
            class: "del",
            onclick: () => journal.viewMode = ViewMode.COMPOSE
        }
    }

    function gotoGraphSettings(journal: JournalModel) {
        return {
            id: "goToGraph",
            class: "del",
            onclick: () => journal.viewMode = ViewMode.GRAPH
        }
    }

    return { view: view }
}
