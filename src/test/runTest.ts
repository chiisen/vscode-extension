import * as path from 'path';

import { runTests } from '@vscode/test-electron';

async function main() {
	try {
		// 包含擴展 Manifest package.json 的資料夾
		// 傳遞給 `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// 測試執行器的路徑
		// 傳遞給 --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		// 下載 VS Code，解壓縮並運行整合測試
		await runTests({ extensionDevelopmentPath, extensionTestsPath });
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
