# 建立筆記檔案功能設計文件

**日期：** 2026-03-31
**狀態：** Approved
**目的：** 展示 VSCode Extension 檔案操作能力

---

## 功能概述

新增命令 `extension.createNote`，快速建立帶日期標題的 Markdown 筆記檔案。

---

## 命令流程

1. 使用者執行命令（右鍵選單或快捷鍵）
2. 輸入筆記標題
3. 自動產生檔案到預設位置
4. 自動開啟新建立的筆記

---

## 檔案模板

```markdown
# {標題}

日期：{YYYY-MM-DD}

---

內容...
```

---

## 檔名格式

- 格式：`YYYY-MM-DD-標題.md`
- 轉換：標題轉小寫、空格改 dash
- 範例：`2026-03-31-my-note.md`

---

## 設定項

| 設定 Key | 預設值 | 說明 |
|----------|--------|------|
| `vscodeExtension.notePath` | `~/notes` | 筆記存放位置 |

---

## 錯誤處理

| 情境 | 處理方式 |
|------|----------|
| 筆記目錄不存在 | 自動建立 |
| 檔案已存在 | 顯示警告，不覆蓋 |
| 未輸入標題 | 取消操作 |

---

## 技術實作

- **VSCode API：** `vscode.window.showInputBox()`, `vscode.workspace.fs`, `vscode.window.showTextDocument()`
- **檔案系統：** Node.js `fs` module 或 VSCode FileSystem API
- **設定：** `vscode.workspace.getConfiguration()`

---

## 驗收標準

- [ ] 命令可從右鍵選單執行
- [ ] 輸入標題後自動產生 Markdown 檔案
- [ ] 檔名符合 `YYYY-MM-DD-標題.md` 格式
- [ ] 檔案內容包含標題與日期
- [ ] 自動開啟新建立的檔案
- [ ] 目錄不存在時自動建立
- [ ] 檔案已存在時顯示警告