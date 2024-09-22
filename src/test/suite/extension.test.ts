import * as assert from 'assert';

// 你可以從 'vscode' 模組中匯入並使用所有 API
// 以及匯入你的擴展來測試它
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('擴展測試套件', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('範例測試', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});
