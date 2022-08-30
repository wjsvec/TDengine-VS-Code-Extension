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
function getWebviewContent(cat, iteration, databaseInfo) {
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
  <p>${databaseInfo}</p>
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


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dependency = exports.TreeView = void 0;
const vscode = __webpack_require__(1);
const path = __webpack_require__(4);
class TreeView {
    constructor(context, workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.context = context;
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (this.context.workspaceState.get('answer') === 'No' || this.context.workspaceState.get('answer') === 'undefined') {
            return Promise.resolve([]);
        }
        if (element) {
            // console.log(element);
            const r1 = new Dependency("i1", "2", vscode.TreeItemCollapsibleState.None, 1);
            const r2 = new Dependency("i3", "4", vscode.TreeItemCollapsibleState.None, 1);
            r1.contextValue = "1";
            r2.contextValue = "1";
            if (!element) {
                return Promise.resolve([]);
            }
            if (element.label === '1') {
                return Promise.resolve([r1]);
            }
            if (element.label === '3') {
                return Promise.resolve([r2]);
            }
            return Promise.resolve([]);
        }
        else {
            let sites;
            const tt = new Dependency("1", "", vscode.TreeItemCollapsibleState.Collapsed);
            const tt2 = new Dependency("3", "", vscode.TreeItemCollapsibleState.Collapsed);
            sites = [tt, tt2];
            // sites = [tt2];
            return Promise.resolve(sites);
        }
    }
}
exports.TreeView = TreeView;
class Dependency extends vscode.TreeItem {
    constructor(label, version, collapsibleState, colorType = 0, command) {
        super(label, collapsibleState);
        this.label = label;
        this.version = version;
        this.collapsibleState = collapsibleState;
        this.colorType = colorType;
        this.command = command;
        this.contextValue = 'dependency';
        // this.tooltip = `${this.label}-${this.version}`;
        this.description = this.version;
        if (colorType === 0) {
            this.iconPath = {
                light: path.join(__filename, '..', '..', 'resources', 'light', 'database.svg'),
                dark: path.join(__filename, '..', '..', 'resources', 'dark', 'database.svg')
            };
        }
    }
}
exports.Dependency = Dependency;
const tree = {
    'a': {
        'aa': {
            'aaa': {
                'aaaa': {
                    'aaaaa': {
                        'aaaaaa': {}
                    }
                }
            }
        },
        'ab': {}
    },
    'b': {
        'ba': {},
        'bb': {}
    }
};


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLoginWebview = void 0;
function getLoginWebview(context) {
    let count = 0;
    if (context.globalState.get('tableID') === 1) {
        return ``;
    }
    //<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
    </head>
    <body>    
    
    
    <h1>我的第一个 JavaScript </h1>

<p id="demo">JavaScript 可以触发事件，就像按钮点击。</p>



<button type="button" onclick="myFunction()">点我</button>

    <h1 id="lines-of-code-counter">0</h1>
    
        
    <script>
    const vscode = acquireVsCodeApi();
    function myFunction()
    {   
        document.getElementById("demo").innerHTML="Hello JavaScript!";
        vscode.postMessage({
            command: 'alert',
            textttt: 'Try submit ' + +' times'
        })
    }
        
        
    </script>
</body>
</html>`;
}
exports.getLoginWebview = getLoginWebview;


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
const vscode = __webpack_require__(1);
const webview_1 = __webpack_require__(2);
const treeview_1 = __webpack_require__(3);
const login_1 = __webpack_require__(5);
function activate(context) {
    console.log('Congratulations, your extension "tdengine-vs-code-extension" is now active!');
    context.workspaceState.update('answer', 'No');
    context.workspaceState.update('tableID', '00001');
    context.workspaceState.update('userID', -1);
    const nodeDependenciesProvider = new treeview_1.TreeView(context, "rootPath");
    vscode.window.registerTreeDataProvider('databaseView', nodeDependenciesProvider);
    let disposable2 = vscode.commands.registerCommand('tdengine-vs-code-extension.helloCommand', async () => {
        const answer = await vscode.window.showInformationMessage('Log in?', "Yes", "No");
        if (answer === 'Yes') {
            context.workspaceState.update('answer', answer);
            // const baseid = await
            vscode.commands.executeCommand('tdengine-vs-code-extension.loginStart');
            nodeDependenciesProvider.refresh();
        }
    });
    context.subscriptions.push(disposable2);
    let disposable3 = vscode.commands.registerCommand('tdengine-vs-code-extension.showWebview', (node) => {
        const panel = vscode.window.createWebviewPanel('catCoding', // Identifies the type of the webview. Used internally
        'Table Showing', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
        );
        vscode.window.showInformationMessage(`Successfully called edit entry on ${node.label}.`);
        let iteration = 0;
        const updateWebview = () => {
            const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
            panel.title = "webview";
            const info = node.label;
            panel.webview.html = (0, webview_1.getWebviewContent)(cat, iteration, info);
        };
        // Set initial content
        updateWebview();
        // And schedule updates to the content every second
        setInterval(updateWebview, 1000);
    });
    context.subscriptions.push(disposable3);
    let disposable4 = vscode.commands.registerCommand('tdengine-vs-code-extension.loginStart', () => {
        const panel = vscode.window.createWebviewPanel('catCoding', 'Cat Coding', vscode.ViewColumn.One, {
            enableScripts: true
        });
        panel.webview.html = (0, login_1.getLoginWebview)(context);
        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(async (message) => {
            switch (message.command) {
                case 'alert':
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    vscode.window.showErrorMessage(message.textttt);
                    if (message.textttt === 'Try submit 1 times') {
                        panel.dispose();
                    }
                    return;
            }
        }, undefined, context.subscriptions);
    });
    context.subscriptions.push(disposable4);
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