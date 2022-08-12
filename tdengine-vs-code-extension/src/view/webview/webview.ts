
const cats = {
	'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
	'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
  };

export function getWebviewContent(cat: keyof typeof cats,iteration: number,databaseInfo:string) {
    var multi:number[][] = [[1,2,3],[23,24,25]];
    const tab = showTable();
    var table_arr : string = '';
    for (var i =0; i <5;i++){
        table_arr +=(showTable());
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

  function showTable(){
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