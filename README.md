# vscode-extension-hello-world

VSCode Extension 測試程式

---

# 安裝 yo 範本產生器

```bash=
npm install -g yo generator-code
```

yo 範本產生器:
```bash=
yo code
```

![yo code](./docs/images/yo_code_01.png)

![yo code](./docs/images/yo_code_02.png)

# 編譯 .vsix
安裝 vsce(編譯.vsix檔案):
```bash=
npm i vsce -g
```

編譯成.vsix安裝檔案:
```bash=
vsce package
```
`README.md` 記得要修改唷，不然編譯不過

# 解決 vsce 編譯錯誤
![編譯錯誤](./docs/images/yo_code_03.png)
😁解決方法: "skipLibCheck": true => tsconfig.json
* 記得先執行 ==npm ci==

# 上傳 .vsix
https://aka.ms/SignupAzureDevOps
![AzureDevOps](./docs/images/yo_code_04.png)

![Personal Access Tokens](./docs/images/yo_code_05.png)
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

![create-publisher](./docs/images/yo_code_06.png)

Details 裡面有 publisher id: vscode-extension-hello-world-1221

