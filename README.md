# vscode-extension-hello-world

VSCode Extension 測試程式

---

## 專案概覽

| 項目 | 說明 |
|------|------|
| **名稱** | vscode-extension-hello-world |
| **語言** | TypeScript 4.5.5 |
| **最小 VSCode 版本** | ^1.65.0 |
| **測試框架** | Mocha (TDD) |

## 專案結構

```
vscode-extension/
├── src/
│   ├── extension.ts           # 主要進入點
│   └── test/
│       ├── runTest.ts         # 測試執行入口
│       └── suite/
│           ├── index.ts       # Mocha 測試設定
│           └── extension.test.ts  # 範例測試
├── docs/                      # 文件 (安裝指南)
├── .vscode/                   # VSCode 工作區設定
│   ├── launch.json           # 除錯設定
│   ├── tasks.json            # 建置任務
│   ├── settings.json         # 工作區設定
│   └── extensions.json       # 推薦擴充功能
├── package.json              # 擴充功能清單
├── tsconfig.json             # TypeScript 設定
├── .eslintrc.json            # ESLint 規則
└── .vscodeignore             # 排除檔案
```

## 核心功能

1. **extension.help** - 顯示說明訊息 (`Ctrl+Alt+N`)
2. **extension.createComponent** - 輸入框示範 (`Ctrl+Alt+O`)，目前為 placeholder

## 技術特點

- 延遲載入
- 右鍵選單整合
- 完整的 TypeScript + ESLint + 測試環境

## 目前狀態

功能骨架完整，但 `createComponent` 命令僅收集輸入，尚未實作實際建立檔案的邏輯。適合作為擴充功能開發的起點。

## 相關文件

# 安裝 yo 範本產生器
[install yo](../docs/install_yo.md)

# 編譯 .vsix
[build vsix](./docs/build_vsix.md)


# 解決 vsce 編譯錯誤
[fix vsce error](./docs/fix_vsce_error.md)

# 上傳 .vsix
[publish vsix](./docs/publish_vsix.md)

# VSCode 安裝 VSCode Extension (*.vsix)
[install vsix](./docs/install_vsix.md)

