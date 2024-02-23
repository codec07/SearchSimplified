const vscode = require('vscode');

/**
 *  @param {vscode.ExtensionContext} context
 */

function activate(context) {
	let quickSearchSS = vscode.commands.registerCommand('searchsimplified.quickSearch', function () {
		vscode.window.showInputBox({ prompt: 'Enter a Search Query: ' }).then((query) => {
			if (query) {
				let urlGoogle = 'https://www.google.com/search?q=' + query;
				let urlYoutube = 'https://www.youtube.com/results?search_query=' + query;

				vscode.env.openExternal(vscode.Uri.parse(urlGoogle));
				vscode.env.openExternal(vscode.Uri.parse(urlYoutube));
			}
			else {
				vscode.window.showInformationMessage("No Search Query to Quick Search!");
			}
		})
	});

	context.subscriptions.push(quickSearchSS);

	let regularSearchSS = vscode.commands.registerCommand('searchsimplified.regularSearch', function () {
		vscode.window.showInputBox({ prompt: "Enter a Search Query (start with, '$' for google search, '!' for youtube search, '@' for wikipedia search, '$' for stack overflow search)" }).then((query) => {
			if (query) {
				if (query.startsWith('$')) {
					let ssquery = query.substring(1);
					let url = 'https://www.google.com/search?q=' + ssquery;
					vscode.env.openExternal(vscode.Uri.parse(url));
				}

				else if (query.startsWith('!')) {
					let ssquery = query.substring(1);
					let url = 'https://www.youtube.com/results?search_query=' + ssquery;
					vscode.env.openExternal(vscode.Uri.parse(url));
				}

				else if (query.startsWith('@')) {
					let ssquery = query.substring(1);
					let url = 'https://en.wikipedia.org/wiki/' + ssquery;
					vscode.env.openExternal(vscode.Uri.parse(url));
				}

				else if (query.startsWith('#')) {
					let ssquery = query.substring(1);
					let url = 'https://stackoverflow.com/search?q=' + ssquery;
					vscode.env.openExternal(vscode.Uri.parse(url));
				}
			}
			else {
				vscode.window.showInformationMessage("No Query to Search!");
			}
		})
	});

	context.subscriptions.push(regularSearchSS);

	let quickLinkSS = vscode.commands.registerCommand('searchsimplified.quickLink', function () {
		vscode.window.showInputBox({ prompt: 'Enter a Link: ' }).then((query) => {
			if (query) {
				vscode.env.openExternal(vscode.Uri.parse(query));
			}
			else {
				vscode.window.showInformationMessage("No Search Link to QuickLink !");
			}
		})
	});

	context.subscriptions.push(quickLinkSS);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
