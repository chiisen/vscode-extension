# 上傳 .vsix
https://aka.ms/SignupAzureDevOps
![AzureDevOps](../docs/images/yo_code_04.png)

![Personal Access Tokens](../docs/images/yo_code_05.png)
建立上傳的驗證 token
- 點選【New Token】
```bash=
vsce publish
```

```bash=
ERROR  The 'create-publisher' command is no longer available. You can create a publisher directly in the Marketplace: https://aka.ms/vscode-create-publisher
```
* 記得要填 repository

直接下面網頁 https://aka.ms/vscode-create-publisher 上傳檔案
==發佈成功==

![create-publisher](../docs/images/yo_code_06.png)

Details 裡面有 publisher id: vscode-extension-hello-world-1221