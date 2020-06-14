!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}([,,,function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(6)),s(n(7)),s(n(8)),s(n(9))},,function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function c(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((s=s.apply(e,t||[])).next())}))};function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(10)),o(n(11)),o(n(12)),t.syncRate=500,t.sleep=function(e){return s(this,void 0,void 0,(function*(){return new Promise(t=>setTimeout(t,e))}))};class r extends Error{constructor(e,t){super(e),this.needsReAuth=t}}t.SyncerError=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.AND=1]="AND",e[e.OR=2]="OR"}(t.SearchType||(t.SearchType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.OFF="0",e.WORKING="1",e.FAIL_GET_SPREADSHEET_SHEETS="2",e.FAIL_GET_RANGE="3",e.FAIL_UPDATE_RANGE="4",e.FAIL_DELETE_ROW="5",e.RETURN_ROWS="6"}(t.TestMode||(t.TestMode={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.AUTH_UPDATE=0]="AUTH_UPDATE",e[e.DELETE_ROW=1]="DELETE_ROW",e[e.UPDATE_ROW=2]="UPDATE_ROW",e[e.GET_ROWS=3]="GET_ROWS",e[e.GET_SHEETS=4]="GET_SHEETS",e[e.TEST_MODE_UPDATE=5]="TEST_MODE_UPDATE",e[e.UNPAUSE=6]="UNPAUSE"}(t.SyncerTaskType||(t.SyncerTaskType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ROWS=0]="ROWS",e[e.SHEETS=1]="SHEETS",e[e.QUEUE_STATE=2]="QUEUE_STATE",e[e.ERROR=3]="ERROR",e[e.REAUTH=4]="REAUTH"}(t.SyncerResponseType||(t.SyncerResponseType={}))},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function c(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(5);t.SyncerTasks=class{constructor(){this.extendSheetLength=100}getSheets(e,t){return s(this,void 0,void 0,(function*(){let n="https://sheets.googleapis.com/v4/spreadsheets/"+t.spreadsheetId,s={method:"GET",cache:"no-cache",headers:{Authorization:"Bearer "+e}},r=yield fetch(n,s);if(r.ok){return(yield r.json()).sheets||[]}{let e=yield r.json();throw new o.SyncerError("Failed to get spreadsheet details.\n"+JSON.stringify(e),401===r.status)}}))}getRows(e,t){return s(this,void 0,void 0,(function*(){let n=t.sheetTitle+"!A:A",s=`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}/values/${n}`,r={method:"GET",cache:"no-cache",headers:{Authorization:"Bearer "+e}},i=yield fetch(s,r);if(i.ok){let e=yield i.json();return e.values?e.values.map(e=>e[0]):[]}{let e=yield i.json();throw new o.SyncerError("Failed to get sheet rows.\n"+JSON.stringify(e),401===i.status)}}))}updateRow(e,t){return s(this,void 0,void 0,(function*(){let n=`${t.sheetTitle}!A${t.idx+1}:A${t.idx+1}`,s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}/values/${n}`),r={Authorization:"Bearer "+e},i={valueInputOption:"RAW"};Object.keys(i).forEach(e=>s.searchParams.append(e,i[e]));let c={method:"PUT",cache:"no-cache",headers:r,body:JSON.stringify({range:n,majorDimension:"ROWS",values:[[t.content]]})},u=yield fetch(s.toString(),c),a=yield u.json();if(!u.ok){if(a.error.message.includes("exceeds grid limits")){if(yield this.extendSheet(e,t.spreadsheetId,t.sheetId),(yield fetch(s.toString(),c)).ok)return;{let e=yield u.json();throw new o.SyncerError("Failed to update row:\n"+JSON.stringify(e),401===u.status)}}throw new o.SyncerError("Failed to update row:\n"+JSON.stringify(a),401===u.status)}}))}deleteRow(e,t){return s(this,void 0,void 0,(function*(){let n={sheetId:t.sheetId,startRowIndex:t.idx,endRowIndex:t.idx+1,startColumnIndex:0},s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}:batchUpdate`),r={method:"POST",cache:"no-cache",headers:{Authorization:"Bearer "+e},body:JSON.stringify({requests:[{deleteRange:{range:n,shiftDimension:"ROWS"}}]})},i=yield fetch(s.toString(),r);if(!i.ok){let e=yield i.json();throw new o.SyncerError("Failed to delete row.\n"+JSON.stringify(e),401===i.status)}}))}extendSheet(e,t,n){return s(this,void 0,void 0,(function*(){let s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t}:batchUpdate`),r={method:"POST",mode:"cors",cache:"no-cache",headers:{Authorization:"Bearer "+e},body:JSON.stringify({requests:[{appendDimension:{sheetId:n,dimension:"ROWS",length:this.extendSheetLength}}]})},i=yield fetch(s.toString(),r);if(!i.ok){let e=yield i.json();throw new o.SyncerError("Failed to extend sheet.\n"+JSON.stringify(e),401===i.status)}}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(3);t.instanceOfSyncerError=function(e){return"needsReAuth"in e},t.instanceOfRowsResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.ROWS},t.instanceOfSheetsResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.SHEETS},t.instanceOfQueueStateResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.QUEUE_STATE},t.instanceOfErrorResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.ERROR},t.instanceOfReauthResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.REAUTH},t.instanceOfGetSheetsTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.GET_SHEETS},t.instanceOfAuthUpdateTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.AUTH_UPDATE},t.instanceOfGetRowsTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.GET_ROWS},t.instanceOfUpdateRowTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.UPDATE_ROW},t.instanceOfDeleteRowTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.DELETE_ROW},t.instanceOfTestModeUpdateTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.TEST_MODE_UPDATE},t.instanceOfUnpauseTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.UNPAUSE}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(3);function o(e){postMessage(e)}t.postSheets=function(e,t){o({spreadsheetId:e.spreadsheetId,sheets:t,type:s.SyncerResponseType.SHEETS})},t.postRows=function(e,t){o({spreadsheetId:e.spreadsheetId,sheetId:e.sheetId,rows:t,type:s.SyncerResponseType.ROWS})},t.postQueueState=function(e,t){o({length:e,paused:t,type:s.SyncerResponseType.QUEUE_STATE})},t.postError=function(e){o({error:e,type:s.SyncerResponseType.ERROR})},t.postReAuthRequest=function(){postMessage({type:s.SyncerResponseType.REAUTH})}},function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(14)),s(n(15))},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function c(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});t.MockGapi=class{constructor(){this.auth2=new o}load(e,t){t()}};class o{getAuthInstance(){return new c}init(e){return s(this,void 0,void 0,(function*(){}))}}class r{get(){return new i}}class i{getAuthResponse(){return{expires_in:9999,access_token:"faketoken"}}reloadAuthResponse(){return s(this,void 0,void 0,(function*(){return{expires_in:9999,access_token:"faketoken"}}))}}t.MockGoogleUser=i;class c{constructor(){this.isSignedIn=new u,this.currentUser=new r}signOut(){}signIn(){}}class u{constructor(){this.listen=e=>{},this.get=()=>!0}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function c(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);t.SyncerTasksMock=class{constructor(e){this.testMode=e,this.extendSheetLength=100}getSheets(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===o.TestMode.FAIL_GET_SPREADSHEET_SHEETS)throw new Error("mock fail");return[{properties:{sheetId:0,title:"Sheet1",index:0,sheetType:"GRID",gridProperties:{rowCount:100,columnCount:26}}},{properties:{sheetId:1,title:"Sheet2",index:0,sheetType:"GRID",gridProperties:{rowCount:100,columnCount:26}}}]}))}getRows(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===o.TestMode.FAIL_GET_RANGE)throw new Error("mock fail");return this.testMode===o.TestMode.RETURN_ROWS?["aaa","bbb","ccc","@tag","@key:value"]:[]}))}updateRow(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===o.TestMode.FAIL_UPDATE_RANGE)throw new Error("mock fail")}))}deleteRow(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===o.TestMode.FAIL_DELETE_ROW)throw new Error("mock fail")}))}}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function c(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(13),r=n(3),i=n(5),c=[];let u=!1,a=null,d=null;!function(){s(this,void 0,void 0,(function*(){for(;;)for(yield i.sleep(i.syncRate),i.postQueueState(c.length,u);c.length>0&&a&&!u&&d;){let e=c[0];try{i.instanceOfGetRowsTask(e)?i.postRows(e,yield d.getRows(a,e)):i.instanceOfGetSheetsTask(e)?i.postSheets(e,yield d.getSheets(a,e)):i.instanceOfUpdateRowTask(e)?yield d.updateRow(a,e):i.instanceOfDeleteRowTask(e)&&(yield d.deleteRow(a,e)),c.shift()}catch(e){if(i.instanceOfSyncerError(e)&&e.needsReAuth){i.postReAuthRequest(),a=null;break}u=!0,i.postError(e);break}}}))}(),onmessage=e=>{let t=e.data;i.instanceOfTestModeUpdateTask(t)?d=t.testMode===r.TestMode.OFF?new i.SyncerTasks:new o.SyncerTasksMock(t.testMode):i.instanceOfAuthUpdateTask(t)?a=t.token:i.instanceOfUnpauseTask(t)?u=!1:c.push(t)}}]);
//# sourceMappingURL=syncWebWorker.js.map