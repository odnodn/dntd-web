!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(2),o=n(4),a=n(30);t.serviceWorker=new o.ServiceWorker,t.testMode=i.getTestMode(),t.syncer=new o.Syncer(t.testMode),t.search=new o.Search,t.journal=new o.Journal,null!==document.getElementById("dntd")&&r.default.mount(document.getElementById("dntd"),(function(){return{view:function(){return[r.default(a.spinner),r.default(a.googleAPI),r.default("#errorsWrap",r.default(a.errors)),t.journal.isActive?[r.default("#searchWrap",[r.default(a.searchbar),r.default(a.toggles)]),r.default(a.refines),r.default("#entriesWrap",{class:t.journal.hideTagRefines?"fullWidth":""},[r.default(a.entries),r.default(a.compose)])]:[]]}}}))},function(e,t){e.exports=m},function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(17)),s(n(18)),s(n(19)),s(n(20)),s(n(21)),s(n(22))},function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(6)),s(n(7)),s(n(8)),s(n(9))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(16);t.Tag=s.Tag;var r=n(23);t.Entry=r.Entry;var i=n(24);t.Sheet=i.Sheet;var o=n(25);t.Syncer=o.Syncer;var a=n(26);t.Search=a.Search;var u=n(27);t.Journal=u.Journal;var d=n(28);t.Spreadsheet=d.Spreadsheet;var c=n(29);t.ServiceWorker=c.ServiceWorker},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(10)),r(n(11)),r(n(12)),t.syncRate=500,t.sleep=function(e){return s(this,void 0,void 0,(function*(){return new Promise(t=>setTimeout(t,e))}))};class i extends Error{constructor(e,t){super(e),this.needsReAuth=t}}t.SyncerError=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.AND=1]="AND",e[e.OR=2]="OR"}(t.SearchType||(t.SearchType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.OFF="0",e.WORKING="1",e.FAIL_GET_SPREADSHEET_SHEETS="2",e.FAIL_GET_RANGE="3",e.FAIL_UPDATE_RANGE="4",e.FAIL_DELETE_ROW="5",e.RETURN_ROWS="6"}(t.TestMode||(t.TestMode={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.AUTH_UPDATE=0]="AUTH_UPDATE",e[e.DELETE_ROW=1]="DELETE_ROW",e[e.UPDATE_ROW=2]="UPDATE_ROW",e[e.GET_ROWS=3]="GET_ROWS",e[e.GET_SHEETS=4]="GET_SHEETS",e[e.TEST_MODE_UPDATE=5]="TEST_MODE_UPDATE",e[e.UNPAUSE=6]="UNPAUSE"}(t.SyncerTaskType||(t.SyncerTaskType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ROWS=0]="ROWS",e[e.SHEETS=1]="SHEETS",e[e.QUEUE_STATE=2]="QUEUE_STATE",e[e.ERROR=3]="ERROR",e[e.REAUTH=4]="REAUTH"}(t.SyncerResponseType||(t.SyncerResponseType={}))},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(5);t.SyncerTasks=class{constructor(){this.extendSheetLength=100}getSheets(e,t){return s(this,void 0,void 0,(function*(){let n="https://sheets.googleapis.com/v4/spreadsheets/"+t.spreadsheetId,s={method:"GET",cache:"no-cache",headers:{Authorization:"Bearer "+e}},i=yield fetch(n,s);if(i.ok){return(yield i.json()).sheets||[]}{let e=yield i.json();throw new r.SyncerError("Failed to get spreadsheet details.\n"+JSON.stringify(e),401===i.status)}}))}getRows(e,t){return s(this,void 0,void 0,(function*(){let n=t.sheetTitle+"!A:A",s=`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}/values/${n}`,i={method:"GET",cache:"no-cache",headers:{Authorization:"Bearer "+e}},o=yield fetch(s,i);if(o.ok){let e=yield o.json();return e.values?e.values.map(e=>e[0]):[]}{let e=yield o.json();throw new r.SyncerError("Failed to get sheet rows.\n"+JSON.stringify(e),401===o.status)}}))}updateRow(e,t){return s(this,void 0,void 0,(function*(){let n=`${t.sheetTitle}!A${t.idx+1}:A${t.idx+1}`,s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}/values/${n}`),i={Authorization:"Bearer "+e},o={valueInputOption:"RAW"};Object.keys(o).forEach(e=>s.searchParams.append(e,o[e]));let a={method:"PUT",cache:"no-cache",headers:i,body:JSON.stringify({range:n,majorDimension:"ROWS",values:[[t.content]]})},u=yield fetch(s.toString(),a),d=yield u.json();if(!u.ok){if(d.error.message.includes("exceeds grid limits")){if(yield this.extendSheet(e,t.spreadsheetId,t.sheetId),(yield fetch(s.toString(),a)).ok)return;{let e=yield u.json();throw new r.SyncerError("Failed to update row:\n"+JSON.stringify(e),401===u.status)}}throw new r.SyncerError("Failed to update row:\n"+JSON.stringify(d),401===u.status)}}))}deleteRow(e,t){return s(this,void 0,void 0,(function*(){let n={sheetId:t.sheetId,startRowIndex:t.idx,endRowIndex:t.idx+1,startColumnIndex:0},s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}:batchUpdate`),i={method:"POST",cache:"no-cache",headers:{Authorization:"Bearer "+e},body:JSON.stringify({requests:[{deleteRange:{range:n,shiftDimension:"ROWS"}}]})},o=yield fetch(s.toString(),i);if(!o.ok){let e=yield o.json();throw new r.SyncerError("Failed to delete row.\n"+JSON.stringify(e),401===o.status)}}))}extendSheet(e,t,n){return s(this,void 0,void 0,(function*(){let s=new URL(`https://sheets.googleapis.com/v4/spreadsheets/${t}:batchUpdate`),i={method:"POST",mode:"cors",cache:"no-cache",headers:{Authorization:"Bearer "+e},body:JSON.stringify({requests:[{appendDimension:{sheetId:n,dimension:"ROWS",length:this.extendSheetLength}}]})},o=yield fetch(s.toString(),i);if(!o.ok){let e=yield o.json();throw new r.SyncerError("Failed to extend sheet.\n"+JSON.stringify(e),401===o.status)}}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(3);t.instanceOfSyncerError=function(e){return"needsReAuth"in e},t.instanceOfRowsResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.ROWS},t.instanceOfSheetsResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.SHEETS},t.instanceOfQueueStateResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.QUEUE_STATE},t.instanceOfErrorResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.ERROR},t.instanceOfReauthResponse=function(e){return"type"in e&&e.type===s.SyncerResponseType.REAUTH},t.instanceOfGetSheetsTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.GET_SHEETS},t.instanceOfAuthUpdateTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.AUTH_UPDATE},t.instanceOfGetRowsTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.GET_ROWS},t.instanceOfUpdateRowTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.UPDATE_ROW},t.instanceOfDeleteRowTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.DELETE_ROW},t.instanceOfTestModeUpdateTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.TEST_MODE_UPDATE},t.instanceOfUnpauseTask=function(e){return"type"in e&&e.type===s.SyncerTaskType.UNPAUSE}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(3);function r(e){postMessage(e)}t.postSheets=function(e,t){r({spreadsheetId:e.spreadsheetId,sheets:t,type:s.SyncerResponseType.SHEETS})},t.postRows=function(e,t){r({spreadsheetId:e.spreadsheetId,sheetId:e.sheetId,rows:t,type:s.SyncerResponseType.ROWS})},t.postQueueState=function(e,t){r({length:e,paused:t,type:s.SyncerResponseType.QUEUE_STATE})},t.postError=function(e){r({error:e,type:s.SyncerResponseType.ERROR})},t.postReAuthRequest=function(){postMessage({type:s.SyncerResponseType.REAUTH})}},function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(14)),s(n(15))},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});t.MockGapi=class{constructor(){this.auth2=new r}load(e,t){t()}};class r{getAuthInstance(){return new a}init(e){return s(this,void 0,void 0,(function*(){}))}}class i{get(){return new o}}class o{getAuthResponse(){return{expires_in:9999,access_token:"faketoken"}}reloadAuthResponse(){return s(this,void 0,void 0,(function*(){return{expires_in:9999,access_token:"faketoken"}}))}}t.MockGoogleUser=o;class a{constructor(){this.isSignedIn=new u,this.currentUser=new i}signOut(){}signIn(){}}class u{constructor(){this.listen=e=>{},this.get=()=>!0}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);t.SyncerTasksMock=class{constructor(e){this.testMode=e,this.extendSheetLength=100}getSheets(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===r.TestMode.FAIL_GET_SPREADSHEET_SHEETS)throw new Error("mock fail");return[{properties:{sheetId:0,title:"Sheet1",index:0,sheetType:"GRID",gridProperties:{rowCount:100,columnCount:26}}},{properties:{sheetId:1,title:"Sheet2",index:0,sheetType:"GRID",gridProperties:{rowCount:100,columnCount:26}}}]}))}getRows(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===r.TestMode.FAIL_GET_RANGE)throw new Error("mock fail");return this.testMode===r.TestMode.RETURN_ROWS?["aaa","bbb","ccc","@tag","@key:value"]:[]}))}updateRow(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===r.TestMode.FAIL_UPDATE_RANGE)throw new Error("mock fail")}))}deleteRow(e,t){return s(this,void 0,void 0,(function*(){if(this.testMode===r.TestMode.FAIL_DELETE_ROW)throw new Error("mock fail")}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(2);t.Tag=class{constructor(e,t,n,s,r){this.frq=1,this.raw=e,this.flag=t,this.key=n,this.separator=void 0!==s?s:null,this.val=void 0!==r?r:null,this.clean=this.cleanTagString(this.raw),this.cleanKey=this.cleanTagString(this.key),this.cleanVal=null!==this.val?this.cleanTagString(this.val):null}renderKey(){return"<span onclick=\"tagOnClick(event, '"+this.flag+this.cleanKey+(this.separator?this.separator:"")+'\')" class="'+(this.separator?"tagKey":null===this.val?"simpleTag":"roundTagVal")+'">'+this.flag+this.key+"</span>"}renderVal(e){var t;return"<span onclick=\"tagOnClick(event, '"+this.flag+this.cleanKey+this.separator+(null===(t=this.cleanVal)||void 0===t?void 0:t.replace(/'/,"\\'"))+'\')" class="'+(e?"roundTagVal":"tagVal")+'">'+(e?"":this.separator)+(this.val||"")+"</span>"}render(e){return this.separator?e?this.renderVal(e):this.renderKey()+this.renderVal(e):this.renderKey()}cleanTagString(e){return e=(e=(e=s.escapeHtml(e)).endsWith("'s")?e.substring(0,e.length-2):e).toLowerCase()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(3);t.getTestMode=function(){let e=new URL(window.location.href).searchParams.get("test");return null!==e&&(t=e,Object.values(s.TestMode).includes(t))?e:s.TestMode.OFF;var t}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0);class o extends Error{constructor(e,t){super(e),this.friendlyMessage=t,i.journal.errors.push(t),console.warn(e),r.default.redraw()}}t.FriendlyError=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.escapeHtml=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCaretPosition=function(e){var t=window.getSelection(),n=[0,0];if(t.anchorNode==e)n=[t.anchorNode.innerText.length,t.extentNode.innerText.length];else{var s=[t.anchorNode,t.extentNode];if(!e.contains(t.anchorNode)||!e.contains(t.extentNode))return;var r,i=[0,0];!function e(t,n){var s=n(t);for(t=t.firstChild;!1!==s&&t;t=t.nextSibling)s=e(t,n)}(e,(function(e){for(r=0;r<2;r++)if(e==s[r]&&(i[r]=1,i[0==r?1:0]))return;if(e.textContent&&!e.firstChild)for(r=0;r<2;r++)i[r]||(n[r]+=e.textContent.length)})),n[0]+=t.anchorOffset,n[1]+=t.extentOffset}return n[0]<=n[1]?n:[n[1],n[0]]},t.setCaretPosition=function e(t,n){if(null!==t&&null!==n){for(var s of t.childNodes)if(3==s.nodeType){if(s.length>=n){let e=document.createRange(),t=window.getSelection();return e.setStart(s,n),e.collapse(!0),t.removeAllRanges(),t.addRange(e),-1}n-=s.length}else if(-1==(n=e(s,n)))return-1;return n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tagPattern=/(\@)([\w-']+)+(:)?([\w-'\*]+)?/g,t.spreadsheetIdPattern=/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setStoredSpreadsheetId=function(e){localStorage.setItem("spreadsheetId",e)},t.getStoredSpreadsheetId=function(){return localStorage.getItem("spreadsheetId")||void 0},t.setStoredSpreadsheetUrls=function(e){localStorage.setItem("spreadsheetUrls",e)},t.getStoredSpreadsheetUrls=function(){return localStorage.getItem("spreadsheetUrls")||void 0},t.setStoredHideEntriesKeys=function(e){localStorage.setItem("hideEntriesKeys",e?"1":"0")},t.getStoredHideEntriesKeys=function(){return"1"===localStorage.getItem("hideEntriesKeys")},t.setStoredHideTagRefines=function(e){localStorage.setItem("hideTagRefines",e?"1":"0")},t.getStoredHideTagRefines=function(){return"1"===localStorage.getItem("hideTagRefines")},t.getStoredSpreadsheetSheetId=function(e){let t=localStorage.getItem(e+"-sheetId")||void 0;return void 0!==t?parseInt(t):void 0},t.setStoredSpreadsheetSheetId=function(e,t){localStorage.setItem(e+"-sheetId",t.toString())},t.delStoredSpreadsheetSheetId=function(e){localStorage.removeItem(e+"-sheetId")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(16),r=n(2);t.Entry=class{constructor(e,t){this.tags=new Map,this.hovered=!1,this.focused=!1,this.clean="",this.tokens=[],this.rendered="",this.savedClean="",this.tagMatches=[],this.readableRendered="",this.rawText="",this.savedText="",this.raw=e||"",this.saved=void 0!==t?t:this.raw}get saved(){return this.savedText}set saved(e){this.savedText=e,this.savedClean=e.toLowerCase(),this.tags=this.getTags(this.tagMatches)}get raw(){return this.rawText}set raw(e){this.rawText=e,this.clean=this.raw.toLowerCase();let t=r.escapeHtml(this.rawText);this.tokens=this.getTokens(this.clean),this.tagMatches=this.getTagMatches(t),this.rendered=this.render(t,this.tagMatches),this.readableRendered=this.render(t,this.tagMatches,!0)}render(e,t,n){for(let{tag:s,match:r}of t){let t=e.split("");t.splice(r.index,r[0].length,s.render(n)),e=t.join("")}return e}getTags(e){let t=new Map;for(let{tag:n}of e)t.has(n.clean)?t.get(n.clean).frq+=1:t.set(n.clean,n);return t}getTagMatches(e){let t=[],n=e.matchAll(r.tagPattern);for(let e of n){let n=new s.Tag(e[0],e[1],e[2],e[3],e[4]);t.push({tag:n,match:e})}return t.sort((e,t)=>e.match.index>t.match.index?-1:1),t}getTokens(e){return e.split(" ").filter(e=>void 0!==e&&""!==e.trim()&&"-"!==e)}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(4),i=n(0);t.Sheet=class{constructor(e,t,n){this.entries=[],this.id=e,this.title=t,this.spreadsheet=n,n.sheets.set(this.id,this),i.syncer.getRows(this.spreadsheet.id,this.id,this.title)}load(e){return s(this,void 0,void 0,(function*(){e.map(e=>this.entries.push(new r.Entry(e))),i.journal.switch()}))}get tags(){let e=new Map;for(let t of Array.from(this.entries.values()).reverse())for(let[n,s]of t.tags)e.has(n)?e.get(n).frq+=s.frq:e.set(n,new r.Tag(s.raw,s.flag,s.key,s.separator,s.val));return e}}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0),o=n(2),a=n(3),u=n(5);t.Syncer=class{constructor(e){this.paused=!1,this.user=null,this.worker=new Worker("./js/syncWebWorker.js"),this.updateTestMode(e),this.worker.onmessage=e=>this.onMessage(e)}updateTestMode(e){this.pushSyncerTask({testMode:e,type:a.SyncerTaskType.TEST_MODE_UPDATE})}updateAuth(e){this.pushSyncerTask({token:e,type:a.SyncerTaskType.AUTH_UPDATE})}getSheets(e){this.pushSyncerTask({spreadsheetId:e,type:a.SyncerTaskType.GET_SHEETS})}getRows(e,t,n){this.pushSyncerTask({spreadsheetId:e,sheetId:t,sheetTitle:n,type:a.SyncerTaskType.GET_ROWS})}deleteRow(e,t,n){this.pushSyncerTask({idx:e,spreadsheetId:t,sheetId:n,type:a.SyncerTaskType.DELETE_ROW})}updateRow(e,t,n,s,r){this.pushSyncerTask({idx:e,spreadsheetId:t,sheetId:n,sheetTitle:s,content:r,type:a.SyncerTaskType.UPDATE_ROW})}unpause(){this.pushSyncerTask({type:a.SyncerTaskType.UNPAUSE})}pushSyncerTask(e){this.worker.postMessage(e)}onMessage(e){let t=e.data;u.instanceOfQueueStateResponse(t)?(t.paused&&!i.syncer.paused?(i.syncer.paused=!0,r.default.redraw()):!t.paused&&i.syncer.paused&&(i.syncer.paused=!1,r.default.redraw()),i.journal.loading!==t.length>0&&(i.journal.loading=t.length>0,r.default.redraw())):u.instanceOfSheetsResponse(t)?i.journal.spreadsheets.has(t.spreadsheetId)&&i.journal.spreadsheets.get(t.spreadsheetId).load(t.sheets):u.instanceOfRowsResponse(t)?i.journal.spreadsheets.has(t.spreadsheetId)&&i.journal.spreadsheets.get(t.spreadsheetId).sheets.has(t.sheetId)&&i.journal.spreadsheets.get(t.spreadsheetId).sheets.get(t.sheetId).load(t.rows):u.instanceOfErrorResponse(t)?(i.syncer.paused=!0,new o.FriendlyError(t.error.message,"Unable to sync")):u.instanceOfReauthResponse(t)&&null!==i.syncer.user&&i.syncer.user.reloadAuthResponse().then(e=>{i.syncer.updateAuth(e.access_token)}).catch(e=>{new o.FriendlyError(e,"You're signed out and need to sign back in.")})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(0),r=n(4),i=n(3);t.Search=class{constructor(){this.barQuery=new r.Entry(""),this.searchType=i.SearchType.NONE,this.refinesQuery={keys:new Set,vals:new Map}}get query(){return new r.Entry([this.barQuery.raw,...Array.from(this.refinesQuery.keys.values()).map(e=>e+":"),...Array.from(this.refinesQuery.vals.keys())].join(" "))}reset(){this.barQuery=new r.Entry(""),this.refinesQuery={keys:new Set,vals:new Map}}entries(){let e=null;return 0===this.query.tokens.length?this.searchType=i.SearchType.NONE:(this.searchType=i.SearchType.AND,e=this.search(),0===e.length&&(this.searchType=i.SearchType.OR,e=this.search())),e}search(){let e=this.query,t=[],n=s.journal.spreadsheet.sheet.entries;for(let[s,r]of n.entries())switch(this.searchType){case i.SearchType.AND:e.tokens.every(e=>this.match(e,r))&&t.push({idx:s,entry:r});break;case i.SearchType.OR:e.tokens.some(e=>this.match(e,r))&&t.push({idx:s,entry:r})}return t}match(e,t){return e.startsWith("-@")&&!e.endsWith(":")?void 0===t.tags.get(e.substring(1)):e.startsWith("-")?!t.savedClean.includes(e.substring(1)):e.startsWith("@")&&!e.endsWith(":")?void 0!==t.tags.get(e):t.savedClean.includes(e)}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),o=n(4),a=n(0),u=n(2);t.Journal=class{constructor(){this.errors=[],this.loading=!1,this.isSignedIn=!1,this.entryInFocus=!1,this.hideTagRefines=!1,this.hideEntriesKeys=!1,this.spreadsheet=null,this.showAddSpreadsheetTextbox=!1,this.spreadsheets=new Map}load(e){return s(this,void 0,void 0,(function*(){this.hideTagRefines=u.getStoredHideTagRefines(),this.hideEntriesKeys=u.getStoredHideEntriesKeys();let t=this.getSpreadsheetIdsFromUrls(e);yield this.loadNewSpreadsheets(t),yield this.removeOldSpreadsheets(t),this.switch()}))}unload(){this.removeOldSpreadsheets([]),this.errors=[],this.loading=!1,this.isSignedIn=!1,this.entryInFocus=!1,this.hideTagRefines=!1,this.hideEntriesKeys=!1,this.spreadsheet=null,this.showAddSpreadsheetTextbox=!1,this.spreadsheets=new Map}get isActive(){return null!==this.spreadsheet&&null!==this.spreadsheet.sheet&&this.isSignedIn}switch(e,t){var n,s,r;void 0!==e&&void 0!==t&&(null===(n=this.spreadsheet)||void 0===n?void 0:n.id)===e&&(null===(r=null===(s=this.spreadsheet)||void 0===s?void 0:s.sheet)||void 0===r?void 0:r.id)===t||(void 0===e&&void 0===t&&(e=u.getStoredSpreadsheetId(),t=u.getStoredSpreadsheetSheetId(e)),a.search.reset(),this.spreadsheet=void 0!==e&&this.spreadsheets.has(e)?this.spreadsheets.get(e):Array.from(this.spreadsheets.values())[0]||null,null!==this.spreadsheet&&(u.setStoredSpreadsheetId(this.spreadsheet.id),this.spreadsheet.sheet=void 0!==t&&this.spreadsheet.sheets.has(t)?this.spreadsheet.sheets.get(t):Array.from(this.spreadsheet.sheets.values())[0]||null,null!==this.spreadsheet.sheet&&u.setStoredSpreadsheetSheetId(this.spreadsheet.id,this.spreadsheet.sheet.id)),i.default.redraw())}loadNewSpreadsheets(e){return s(this,void 0,void 0,(function*(){for(let t of e.filter(e=>!this.spreadsheets.get(e)).sort(e=>e===u.getStoredSpreadsheetId()?-1:1))new o.Spreadsheet(t)}))}removeOldSpreadsheets(e){return s(this,void 0,void 0,(function*(){for(let[t]of Array.from(this.spreadsheets).filter(([t])=>!e.includes(t)))if(u.delStoredSpreadsheetSheetId(t),this.spreadsheet===this.spreadsheets.get(t)&&(this.spreadsheet=null),this.spreadsheets.has(t)){for(let[e]of this.spreadsheets.get(t).sheets)this.spreadsheets.get(t).sheets.delete(e);this.spreadsheets.delete(t)}}))}getSpreadsheetIdsFromUrls(e){if(!e)return[];let t=[],n=e.matchAll(u.spreadsheetIdPattern);for(let e of n)e&&t.push(e[1]);return t}deleteEntry(e){return s(this,void 0,void 0,(function*(){a.syncer.deleteRow(e,this.spreadsheet.id,this.spreadsheet.sheet.id),this.spreadsheet.sheet.entries.splice(e,1)[0]}))}saveEntry(e){return s(this,void 0,void 0,(function*(){let t=this.spreadsheet.sheet.entries[e];t.raw!==t.saved&&(a.syncer.updateRow(e,this.spreadsheet.id,this.spreadsheet.sheet.id,this.spreadsheet.sheet.title,t.raw),t.saved=t.raw)}))}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(4),i=n(0),o=n(2);t.Spreadsheet=class{constructor(e){this.id=e,this.sheet=null,this.sheets=new Map,i.journal.spreadsheets.set(e,this),i.syncer.getSheets(e)}load(e){return s(this,void 0,void 0,(function*(){for(let t of e.sort(e=>{var t;return(null===(t=e.properties)||void 0===t?void 0:t.sheetId)===o.getStoredSpreadsheetSheetId(this.id)?-1:1}))void 0!==t.properties&&void 0!==t.properties.title&&void 0!==t.properties.sheetId&&new r.Sheet(t.properties.sheetId,t.properties.title,this)}))}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);t.ServiceWorker=class{constructor(){if(!("serviceWorker"in navigator))throw new r.FriendlyError("serviceWorker not supported","Your browser is not supported.");window.addEventListener("load",()=>s(this,void 0,void 0,(function*(){yield navigator.serviceWorker.register("../serviceWorker.js")})))}}},function(e,t,n){"use strict";function s(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),s(n(31)),s(n(32)),s(n(33)),s(n(34)),s(n(35)),s(n(36)),s(n(37)),s(n(38))},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0);t.refines=function(){var e=new Set;function t(){const e=function(){let e=new Map;for(let t of i.journal.spreadsheet.sheet.tags.values()){let n=null!==t.val?`${t.flag}${t.cleanKey}`:"!Simple Tags";e.has(n)||e.set(n,[]),e.get(n).push(t)}return new Map([...e.entries()].sort())}();return Array.from(e,([e,t])=>r.default(".tagRefineWrap",[n(e,t),t.map(t=>[s(e,t)])]))}function n(t,n){return r.default("span",function(t){return{class:"roundTagKey",onclick:n=>function(t,n){if(t.metaKey||t.ctrlKey){if("!Simple Tags"===n)return;i.search.refinesQuery.keys.has(n)?i.search.refinesQuery.keys.delete(n):i.search.refinesQuery.keys.add(n)}else e.has(n)?e.delete(n):e.add(n)}(n,t)}}(t),["!Simple Tags"===t?[]:r.default("input",{type:"checkbox",checked:i.search.refinesQuery.keys.has(t)}),e.has(t)?r.default("span","▾ "):r.default("span","▿ "),r.default("span",t),r.default("span",` (${n.length})`)])}function s(e,t){return r.default("div",{class:"tagRefineValWrap"},[r.default("span",o(e,t),[r.default("input",{type:"checkbox",checked:i.search.refinesQuery.vals.has(t.clean)}),null!==t.val?r.default("span",`${t.separator}${t.val}`):r.default("span",`${t.flag}${t.key}`),r.default("span",` (${t.frq})`)])])}function o(t,n){return{class:`${null===n.val?"simpleTag":"roundTagVal"} ${e.has(t)||i.search.refinesQuery.vals.has(n.clean)?"":"hide"}`,onclick:()=>function(e){i.search.refinesQuery.vals.has(e.clean)?i.search.refinesQuery.vals.delete(e.clean):i.search.refinesQuery.vals.set(e.clean,e)}(n)}}return{view:function(){return i.journal.hideTagRefines?[]:r.default("#tagsWrap",r.default("#tags",[r.default(".tempguidancePre","Tags"),t()]))}}}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0);t.errors=function(){function e(e){return{class:"dismissErrorButton",onclick:()=>i.journal.errors.splice(e,1)}}return{view:function(){return 0===i.journal.errors.length?[]:r.default("#errors",i.journal.errors.map((t,n)=>[r.default(".error",[r.default("span",t),r.default("button",e(n),"dismiss")])]))}}}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0);t.spinner=function(){function e(){if(i.journal.loading&&!i.syncer.paused)return r.default(".spinner",[r.default("div"),r.default("div"),r.default("div"),r.default("div")])}function t(){if(i.syncer.paused)return r.default("button",{id:"unpauseSync",onclick:()=>i.syncer.unpause()},"Unpause Syncing")}return{view:function(){return r.default("#spinner",[e(),t()])}}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),o=n(0),a=n(4),u=n(2);t.compose=function(){var e={el:null,pos:null};const t=new a.Entry(""),n=new a.Entry(""),r=new a.Entry(""),d={placeholder:"Static Entry Prefix"},c={placeholder:"Entry Content"},l={placeholder:"Static Entry Suffix"};function h(t,r){let d={contenteditable:"true",class:"entry breakwrap column",onkeydown:e=>s(this,void 0,void 0,(function*(){return yield function(e){return s(this,void 0,void 0,(function*(){if(13==e.keyCode&&!e.shiftKey){e.preventDefault();let t=[document.getElementById("prefix"),document.getElementById("content"),document.getElementById("suffix")].map(e=>e.innerText).join("");n.raw="";let s=new a.Entry(t,""),r=o.journal.spreadsheet.sheet.entries.length;o.journal.spreadsheet.sheet.entries.push(s),i.default.redraw(),yield o.journal.saveEntry(r),i.default.redraw()}}))}(e)})),oninput:n=>function(t,n){let s=u.getCaretPosition(t.target);e=s?{pos:s[1],el:t.target}:{pos:null,el:null},n.raw=t.target.innerText}(n,t),onupdate:()=>(u.setCaretPosition(e.el,e.pos),void(e={el:null,pos:null}))};return Object.assign(d,r)}return{view:function(){return i.default("#compose",[i.default("#prefix",h(t,d),i.default.trust(t.rendered)),i.default("#content",h(n,c),i.default.trust(n.rendered)),i.default("#suffix",h(r,l),i.default.trust(r.rendered))])}}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),o=n(0),a=n(2);t.entries=function(){var e={pos:null,el:null};function t(){let e=o.search.entries();return null!==e?e.map(({idx:e,entry:t})=>n(e,t)):Array.from(o.journal.spreadsheet.sheet.entries.entries()).map(([e,t])=>n(e,t))}function n(e,t){return i.default(".entryWrap",{id:"entry-"+e},[u(t,e),r(e)])}function r(e){return i.default("button",{class:"del",onclick:()=>s(this,void 0,void 0,(function*(){yield o.journal.deleteEntry(e),i.default.redraw()}))},"del")}function u(t,n){return i.default("div",function(t,n){return{id:`entry-${n}-content`,contenteditable:"true",class:"entry breakwrap column",onkeydown:e=>function(e){13!=e.keyCode||e.shiftKey||(e.preventDefault(),e.target.blur())}(e),oninput:n=>function(t,n){let s=a.getCaretPosition(t.target);e={pos:s?s[1]:null,el:t.target},n.raw=t.target.innerText}(n,t),onupdate:()=>(a.setCaretPosition(e.el,e.pos),void(e={pos:null,el:null})),onblur:()=>function(e,t){return s(this,void 0,void 0,(function*(){e.focused=!1,yield o.journal.saveEntry(t),i.default.redraw()}))}(t,n),onmouseover:()=>function(e){e.hovered=!0}(t),onmouseout:()=>function(e){e.hovered=!1}(t),onfocus:()=>function(e){e.focused=!0}(t)}}(t,n),i.default.trust(t.hovered||t.focused||!o.journal.hideEntriesKeys?t.rendered:t.readableRendered))}return{view:function(){return i.default("#entries",[i.default(".tempguidancePre","Entries"),t()])}}}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0),o=n(2);t.toggles=function(){return{view:function(){return[r.default("#hideEntriesKeysToggle",[r.default("label",{for:"hideEntriesCheckbox"},"Tag keys:"),r.default("input#hideEntriesCheckbox",{type:"checkbox",checked:!o.getStoredHideEntriesKeys(),disabled:i.journal.entryInFocus,onclick:()=>{i.journal.hideEntriesKeys=!i.journal.hideEntriesKeys,o.setStoredHideEntriesKeys(i.journal.hideEntriesKeys)}})]),r.default("#hideTagRefinesToggle",[r.default("label",{for:"hideTagRefinesCheckbox"},"Tag refines:"),r.default("input#hideTagRefinesCheckbox",{type:"checkbox",checked:!i.journal.hideTagRefines,onclick:()=>{i.journal.hideTagRefines=!i.journal.hideTagRefines,o.setStoredHideTagRefines(i.journal.hideTagRefines)}})])]}}}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),i=n(0),o=n(2);t.searchbar=function(){var e={el:null,pos:null};return{view:function(){return r.default("#search",[r.default("#searchQuery",{placeholder:"Search for text or tags",contenteditable:"true",class:"entry breakwrap",oninput:t=>function(t){let n=o.getCaretPosition(t.target);e=n?{pos:n[1],el:t.target}:{pos:null,el:null},i.search.barQuery.raw=o.escapeHtml(t.target.innerText)}(t),onupdate:()=>(o.setCaretPosition(e.el,e.pos),void(e={el:null,pos:null})),onkeydown:e=>function(e){13!=e.keyCode||e.shiftKey||(e.preventDefault(),e.target.blur())}(e)},r.default.trust(i.search.barQuery.rendered)),r.default("button",{id:"clearSearch",class:"del",onclick:()=>i.search.barQuery.raw=""},"x")])}}}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{u(s.next(e))}catch(e){i(e)}}function a(e){try{u(s.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((s=s.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),o=n(13),a=n(3),u=n(0),d=n(2),c=["https://www.googleapis.com/auth/spreadsheets"].join(" ");t.googleAPI=function(){var e;function t(){e.auth2.init({scope:c,client_id:"893904323330-moo1k9s19qp40kr747pftdo29ejdef0o.apps.googleusercontent.com"}).then(()=>{e.auth2.getAuthInstance().isSignedIn.listen(n),n(e.auth2.getAuthInstance().isSignedIn.get())})}function n(t){return s(this,void 0,void 0,(function*(){if(u.journal.isSignedIn=t,i.default.redraw(),u.journal.isSignedIn){let t=e.auth2.getAuthInstance().currentUser.get();u.syncer.user=t;let n=t.getAuthResponse();u.syncer.updateAuth(n.access_token),yield function(){return s(this,void 0,void 0,(function*(){let e=d.getStoredSpreadsheetUrls();yield u.journal.load(e)}))}()}else u.journal.unload()}))}function r(){return i.default("button",{id:"addSpreadsheet",onclick:()=>s(this,void 0,void 0,(function*(){if(u.journal.showAddSpreadsheetTextbox=!u.journal.showAddSpreadsheetTextbox,!u.journal.showAddSpreadsheetTextbox){let e=d.getStoredSpreadsheetUrls();yield u.journal.load(e)}}))},u.journal.showAddSpreadsheetTextbox?" ✓ ":"+/-")}return{view:function(){return i.default("#googleApi",[u.journal.showAddSpreadsheetTextbox?[i.default("textarea",{id:"spreadsheetURLs",placeholder:"Enter list of Google Sheets Spreadsheet URLs here",value:d.getStoredSpreadsheetUrls(),oninput:e=>d.setStoredSpreadsheetUrls(e.target.value)}),i.default("br")]:[],u.journal.isSignedIn?r():[],null!==u.journal.spreadsheet?i.default("select",{onchange:e=>{let t=e.target.value;u.journal.switch(t,d.getStoredSpreadsheetSheetId(t))},id:"spreadsheetSelect"},[Array.from(u.journal.spreadsheets).map(([e])=>[i.default("option",{value:e,selected:u.journal.spreadsheet.id===e},e.substr(e.length-6))])]):[],u.journal.isActive?i.default("select",{onchange:e=>{u.journal.switch(u.journal.spreadsheet.id,parseInt(e.target.value)),i.default.redraw()},id:"sheetSelect"},[Array.from(u.journal.spreadsheet.sheets).map(([e,t])=>[i.default("option",{value:e,selected:u.journal.isActive&&u.journal.spreadsheet.sheet.id===e},t.title)])]):[],u.journal.isSignedIn?i.default("button",{onclick:()=>{u.testMode===a.TestMode.RETURN_ROWS&&u.journal.unload(),e.auth2.getAuthInstance().signOut()},class:"authButton"},"Sign Out"):i.default("button",{onclick:()=>e.auth2.getAuthInstance().signIn(),class:"authButton"},"Sign In"),i.default("script",{async:!0,defer:!0,src:"https://apis.google.com/js/api.js",onload:()=>{(e=u.testMode===a.TestMode.OFF?gapi:new o.MockGapi).load("auth2",t)}})])}}}}]);
//# sourceMappingURL=dntd.js.map