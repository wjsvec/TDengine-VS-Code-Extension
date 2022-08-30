import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { Console } from 'console';

export class TreeView implements vscode.TreeDataProvider<Dependency> {

	private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | void> = new vscode.EventEmitter<Dependency | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<Dependency | undefined | void> = this._onDidChangeTreeData.event;
	private context : vscode.ExtensionContext ;
	constructor(context: vscode.ExtensionContext,private workspaceRoot: string | undefined) {
		this.context = context;
	}
    

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: Dependency): vscode.TreeItem {
		return element;
	}

	getChildren(element?: Dependency): Thenable<Dependency[]> {
		
		if(this.context.workspaceState.get('answer') ==='No'||this.context.workspaceState.get('answer') ==='undefined' ){
			return Promise.resolve([]);
		}
		
        
		

		if (element) {
            // console.log(element);
            const r1 = new Dependency("i1","2",vscode.TreeItemCollapsibleState.None,1);
            const r2 = new Dependency("i3","4",vscode.TreeItemCollapsibleState.None,1);
			r1.contextValue = "1";
			r2.contextValue = "1";

            if(!element){
                return Promise.resolve([]);
            }
            if(element.label === '1'){
                return Promise.resolve([r1]);
            }
            if(element.label === '3'){
                return Promise.resolve([r2]);
            }  
            
			return Promise.resolve([]);
			
		} else {
			
			let sites:Dependency[]; 
			const tt = new Dependency("1","",vscode.TreeItemCollapsibleState.Collapsed);
			const tt2 = new Dependency("3","",vscode.TreeItemCollapsibleState.Collapsed);
			sites = [tt,tt2];
			// sites = [tt2];
			return Promise.resolve(sites);
		}

	}

	/**
	 * Given the path to package.json, read all its dependencies and devDependencies.
	 */
	

	
}

export class Dependency extends vscode.TreeItem {

	constructor(
		public readonly label: string,
		private readonly version: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        private readonly colorType: number=0 ,
		public readonly command?: vscode.Command,
        
	) {
		super(label, collapsibleState);

		// this.tooltip = `${this.label}-${this.version}`;
		this.description = this.version;
        if(colorType === 0){
            this.iconPath = {
                light: path.join(__filename, '..', '..', 'resources', 'light', 'database.svg'),
                dark: path.join(__filename, '..', '..', 'resources', 'dark', 'database.svg')
            };

        }
        
	}

	

	contextValue = 'dependency';
}

const tree = {
	'a': {
		'aa': {
			'aaa': {
				'aaaa': {
					'aaaaa': {
						'aaaaaa': {

						}
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