import * as vscode from 'vscode';

import {getWebviewContent} from './view/webview/webview';
import {Dependency, TreeView} from './view/treeview/treeview';
import {getLoginWebview} from './view/login/login';
import { resolve } from 'path';

export function activate(context: vscode.ExtensionContext) {	
	console.log('Congratulations, your extension "tdengine-vs-code-extension" is now active!');
	context.workspaceState.update('answer','No');
	context.workspaceState.update('tableID','00001');
	context.workspaceState.update('userID',-1);
	
	const nodeDependenciesProvider = new TreeView(context,"rootPath");	
	vscode.window.registerTreeDataProvider('databaseView', nodeDependenciesProvider);
	

	let disposable2 = vscode.commands.registerCommand('tdengine-vs-code-extension.helloCommand', async () => {
		const  answer = await vscode.window.showInformationMessage('Log in?',"Yes","No");
		if(answer === 'Yes' ){
			context.workspaceState.update('answer',answer);
			// const baseid = await
			vscode.commands.executeCommand('tdengine-vs-code-extension.loginStart');
			nodeDependenciesProvider.refresh();	
		}		
	});
	context.subscriptions.push(disposable2);

	let disposable3 = vscode.commands.registerCommand('tdengine-vs-code-extension.showWebview',(node: Dependency) =>{
		const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
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
        panel.webview.html = getWebviewContent(cat,iteration,info);
      };

      // Set initial content
      updateWebview();

      // And schedule updates to the content every second
      setInterval(updateWebview, 1000);
	});
	context.subscriptions.push(disposable3);

	let disposable4 = vscode.commands.registerCommand('tdengine-vs-code-extension.loginStart', () => {
		const panel = vscode.window.createWebviewPanel(
			'catCoding',
			'Cat Coding',
			vscode.ViewColumn.One,
			{
			  enableScripts: true
			}
		  );
	
		  panel.webview.html = getLoginWebview(context);
		 
	
		  // Handle messages from the webview
		  panel.webview.onDidReceiveMessage(
			async (message) => {
			  switch (message.command) {
				case 'alert':				  
				  await new Promise(resolve =>setTimeout(resolve,1000));
				  vscode.window.showErrorMessage(message.textttt);
				  if(message.textttt ==='Try submit 1 times'){
					panel.dispose();
				  }
				  return;
			  }
			},
			undefined,
			context.subscriptions
		  );
	  });
	  context.subscriptions.push(disposable4);
	}
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
export function deactivate() {}
