// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-extension-hello-world" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-extension-hello-world.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-extension-hello-world!');
	});

	context.subscriptions.push(disposable);

	let disposable1 = vscode.commands.registerCommand('extension.createComponent', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from extension.createComponent!');
	});

	context.subscriptions.push(disposable1);
}



// this method is called when your extension is deactivated
export function deactivate() { }


vscode.commands.registerCommand('extension.createComponent', async () => {
	const componentName = await vscode.window.showInputBox({
		prompt: `請輸入套件名稱:`,
		ignoreFocusOut: true,
		valueSelection: [-1, -1],
	});
	if (!componentName) {
		return;
	}
	const dir =
		(await vscode.window.showInputBox({
			value: 'src',
			prompt: `請輸入套件名稱:`,
			ignoreFocusOut: true,
			valueSelection: [-1, -1],
		})) || ``;
});