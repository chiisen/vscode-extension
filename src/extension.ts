// 'vscode' 模組包含了 VS Code 的擴展 API
// 匯入該模組並在下面的程式碼中使用別名 vscode 來引用它
import * as vscode from "vscode";

// 當你的擴展被激活時會調用這個方法
// 當命令第一次被執行時，你的擴展會被激活
export function activate(context: vscode.ExtensionContext) {
  // VSCode Extension 的名稱
  const vscodeExtensionName = "vscode-extension-hello-world";

  // 使用控制台輸出診斷信息 (console.log) 和錯誤 (console.error)
  // 這行程式碼只會在你的擴展被激活時執行一次
  console.log(
    `👍恭喜, 你的 VSCode Extension: "${vscodeExtensionName}" 現在激活了❗`
  ); // 寫到【偵錯主控台】

  // 命令已在 package.json 文件中定義
  // 現在使用 registerCommand 提供命令的實現
  // commandId 參數必須與 package.json 中的命令字段匹配
  let disposable1 = vscode.commands.registerCommand("extension.help", () => {
    // 你放在這裡的程式碼會在每次命令執行時運行
    // 向使用者顯示一個訊息框
    vscode.window.showInformationMessage(
      `👍 你好，這是 VSCode Extension: "${vscodeExtensionName}" ❗`
    ); // 顯示在右下角的通知訊息

    console.log(`👍 開啟 VSCode Extension: "${vscodeExtensionName}" ❗`); // 寫到【偵錯主控台】
  });

  context.subscriptions.push(disposable1);

  let disposable2 = vscode.commands.registerCommand(
    "extension.createComponent",
    async () => {
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
          value: "src",
          prompt: `請輸入套件名稱:`,
          ignoreFocusOut: true,
          valueSelection: [-1, -1],
        })) || ``;
      vscode.window.showInformationMessage("✡️剛剛輸入的套件名稱: " + dir);
    }
  );

  context.subscriptions.push(disposable2);
}

// 當你的擴展被停用時會調用這個方法
export function deactivate() {}
