import * as vscode from 'vscode';
export function getLoginWebview(context: vscode.ExtensionContext) {
    let count = 0;
    if(context.globalState.get('tableID') ===1){
        
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