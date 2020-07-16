// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

'use strict'

window.$ = window.jQuery = require('jquery')
window.Bootstrap = require('bootstrap')

// 닫기 버튼 누르면 앱 종료
document.getElementById("close-btn").addEventListener("click", e => {
    window.close();
});