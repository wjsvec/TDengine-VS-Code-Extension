/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWebviewContent = void 0;
const cats = {
    'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};
function getWebviewContent(cat, iteration) {
    var multi = [[1, 2, 3], [23, 24, 25]];
    const tab = showTable();
    var table_arr = '';
    for (var i = 0; i < 5; i++) {
        table_arr += (showTable());
    }
    // console.log(typeof(showTable()));
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
  <title>Cat Coding</title>
  
  
  <t>hey i'm webview,i have opend ${iteration} s<t/>
  <body>
	<h1>我的第一个HTML页面</h1>
	<p>我的第一个段落。</p>
    <table border="1">
    <tr>
        <td>${multi[0][0]}</td>
        <td>${multi[0][1]}</td>
        <td>${multi[0][2]}</td>
    </tr>
    <tr>
        <td>${multi[1][0]}</td>
        <td>${multi[1][1]}</td>
        <td>${multi[1][2]}</td>
    </tr>
</table>

<table border="1">
${table_arr}
</table>
</body>
  
  </body>
  </html>`;
}
exports.getWebviewContent = getWebviewContent;
function showTable() {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
  
  <tr>
      <td>row 1, cell 1</td>
      <td>row 1, cell 2</td>
  </tr>
  

  
  </body>
  </html>`;
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
// const cats = {
// 	'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
// 	'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
//   };
const webview_1 = __webpack_require__(2);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "tdengine-vs-code-extension" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('tdengine-vs-code-extension.helloWorld', () => {
    // 	// The code you place here will be executed every time your command is executed
    // 	// Display a message box to the user
    // 	vscode.window.showInformationMessage('Hello World from TDengine-VS-Code-Extension!');
    // });
    let disposable2 = vscode.commands.registerCommand('tdengine-vs-code-extension.helloCommand', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello Command', "1", "2");
    });
    let disposable3 = vscode.commands.registerCommand('tdengine-vs-code-extension.showWebview', () => {
        const panel = vscode.window.createWebviewPanel('catCoding', // Identifies the type of the webview. Used internally
        'Table Showing', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
        );
        let iteration = 0;
        const updateWebview = () => {
            const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
            panel.title = "webview";
            panel.webview.html = (0, webview_1.getWebviewContent)(cat, iteration);
        };
        // Set initial content
        updateWebview();
        // And schedule updates to the content every second
        setInterval(updateWebview, 1000);
    });
    context.subscriptions.push(disposable2);
}
exports.activate = activate;
// function getWebviewContent(cat: keyof typeof cats) {
// 	return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
// 	  <meta charset="UTF-8">
// 	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	  <title>Cat Coding</title>
//   </head>
//   <body>
// 	  <img src="${cats[cat]}" width="300" />
//   </body>
//   </html>`;
//   }
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map