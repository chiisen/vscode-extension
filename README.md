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

| 命令 | 快捷鍵 | 說明 |
|------|--------|------|
| `extension.help` | `Ctrl+Alt+N` | 顯示擴充功能說明訊息 |
| `extension.createComponent` | `Ctrl+Alt+O` | 輸入框示範 (placeholder) |
| `extension.createNote` | `Ctrl+Alt+M` | 快速建立 Markdown 筆記 |

### 📝 建立筆記功能

快速建立帶日期標題的 Markdown 筆記檔案。

**使用方式：**
1. 按 `Ctrl+Alt+M` 或右鍵選單選擇「📝 建立筆記」
2. 輸入筆記標題
3. 自動建立檔案並開啟

**檔名格式：** `YYYY-MM-DD-標題.md`（例如：`2026-03-31-my-note.md`）

**檔案內容範例：**
```markdown
# 我的筆記

日期：2026-03-31

---

內容...
```

## 設定項

| 設定 Key | 預設值 | 說明 |
|----------|--------|------|
| `vscodeExtension.notePath` | `~/notes` | 筆記存放位置 |

**設定方式：**
1. 開啟 VSCode 設定 (`Ctrl+,`)
2. 搜尋 `vscodeExtension.notePath`
3. 設定自訂路徑（支援 `~` 代表 home directory）

**設定範例 (settings.json)：**
```json
{
  "vscodeExtension.notePath": "~/Documents/notes"
}
```

## 技術特點

- 延遲載入
- 右鍵選單整合
- 完整的 TypeScript + ESLint + Prettier + 測試環境

## 開發工具

| 工具 | 說明 |
|------|------|
| **TypeScript** | 4.5.5，嚴格模式 |
| **ESLint** | @typescript-eslint/recommended + Prettier 整合 |
| **Prettier** | 代碼格式化工具 |
| **Mocha** | 測試框架 (TDD) |

**常用指令：**
```bash
npm run compile    # 編譯 TypeScript
npm run lint       # ESLint 檢查
npm run format     # Prettier 格式化
npm run test       # 執行測試
```

## 目前狀態

- ✅ `createNote` 命令已實作完成
- ⏳ `createComponent` 命令為 placeholder，待開發

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

