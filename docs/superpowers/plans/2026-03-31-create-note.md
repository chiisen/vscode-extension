# 建立筆記檔案功能實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新增 `extension.createNote` 命令，快速建立帶日期標題的 Markdown 筆記檔案。

**Architecture:** 將筆記建立邏輯抽離至獨立模組 `noteCreator.ts`，主入口 `extension.ts` 只負責命令註冊與調用。使用 VSCode FileSystem API 處理檔案操作。

**Tech Stack:** TypeScript, VSCode Extension API (`vscode.workspace.fs`, `vscode.window`), Node.js `path` module

---

## 檔案結構

| 檔案 | 職責 |
|------|------|
| `src/noteCreator.ts` | 筆記建立核心邏輯：輸入處理、檔名生成、內容模板、檔案建立 |
| `src/extension.ts` | 命令註冊、調用 noteCreator |
| `package.json` | 命令定義、設定項、選單、快捷鍵 |

---

### Task 1: 更新 package.json 添加命令與設定

**Files:**
- Modify: `package.json`

- [ ] **Step 1: 添加命令定義**

在 `contributes.commands` 陣列中添加：

```json
{
  "command": "extension.createNote",
  "title": "📝 建立筆記",
  "category": "Notes"
}
```

- [ ] **Step 2: 添加 activationEvent**

在 `activationEvents` 陣列中添加：

```json
"onCommand:extension.createNote"
```

- [ ] **Step 3: 添加選單項**

在 `contributes.menus.editor/context` 和 `contributes.menus.explorer/context` 陣列中各添加：

```json
{
  "command": "extension.createNote",
  "group": "navigation"
}
```

- [ ] **Step 4: 添加快捷鍵**

在 `contributes.keybindings` 陣列中添加：

```json
{
  "command": "extension.createNote",
  "key": "ctrl+alt+m"
}
```

- [ ] **Step 5: 添加設定項**

在 `contributes` 中添加 `configuration`：

```json
"configuration": {
  "title": "VSCode Extension Notes",
  "properties": {
    "vscodeExtension.notePath": {
      "type": "string",
      "default": "~/notes",
      "description": "筆記存放位置"
    }
  }
}
```

- [ ] **Step 6: 验证 package.json 格式**

Run: `npm run compile`
Expected: 无 JSON 语法错误，编译成功

- [ ] **Step 7: Commit**

```bash
git add package.json
git commit -m "feat(config): 新增 createNote 命令定義與設定項"
```

---

### Task 2: 建立 noteCreator.ts 模組

**Files:**
- Create: `src/noteCreator.ts`

- [ ] **Step 1: 建立檔案並匯入必要模組**

```typescript
import * as vscode from 'vscode';
import * as path from 'path';
import { homedir } from 'os';
```

- [ ] **Step 2: 定義日期格式化函數**

```typescript
function getDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
```

- [ ] **Step 3: 定義標題轉檔名函數**

```typescript
function titleToFilename(title: string): string {
  const dateStr = getDateString();
  const sanitizedTitle = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');
  return `${dateStr}-${sanitizedTitle}.md`;
}
```

- [ ] **Step 4: 定義筆記內容模板函數**

```typescript
function generateNoteContent(title: string): string {
  const dateStr = getDateString();
  return `# ${title}

日期：${dateStr}

---

內容...
`;
}
```

- [ ] **Step 5: 定義取得筆記路徑函數**

```typescript
function getNotePath(): string {
  const config = vscode.workspace.getConfiguration('vscodeExtension');
  const notePath = config.get<string>('notePath') || '~/notes';
  return notePath.replace('~', homedir());
}
```

- [ ] **Step 6: 定義主函數 createNote**

```typescript
export async function createNote(): Promise<void> {
  const title = await vscode.window.showInputBox({
    prompt: '請輸入筆記標題',
    ignoreFocusOut: true,
    placeHolder: '例如：我的筆記'
  });

  if (!title) {
    return;
  }

  const noteDir = getNotePath();
  const filename = titleToFilename(title);
  const fullPath = path.join(noteDir, filename);
  const content = generateNoteContent(title);

  const uri = vscode.Uri.file(fullPath);

  try {
    await vscode.workspace.fs.stat(uri);
    vscode.window.showWarningMessage(`筆記已存在：${filename}`);
    return;
  } catch {
    const dirUri = vscode.Uri.file(noteDir);
    try {
      await vscode.workspace.fs.stat(dirUri);
    } catch {
      await vscode.workspace.fs.createDirectory(dirUri);
    }

    const encoder = new TextEncoder();
    await vscode.workspace.fs.writeFile(uri, encoder.encode(content));

    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc);

    vscode.window.showInformationMessage(`筆記已建立：${filename}`);
  }
}
```

- [ ] **Step 7: 验证模块编译**

Run: `npm run compile`
Expected: 编译成功，无 TypeScript 错误

- [ ] **Step 8: Commit**

```bash
git add src/noteCreator.ts
git commit -m "feat(module): 建立 noteCreator 模組"
```

---

### Task 3: 修改 extension.ts 注册命令

**Files:**
- Modify: `src/extension.ts`

- [ ] **Step 1: 匯入 noteCreator 模組**

在檔案頂部添加：

```typescript
import { createNote } from './noteCreator';
```

- [ ] **Step 2: 註冊 createNote 命令**

在 `activate` 函數中，`context.subscriptions.push(disposable2);` 之後添加：

```typescript
let disposable3 = vscode.commands.registerCommand(
  'extension.createNote',
  createNote
);

context.subscriptions.push(disposable3);
```

- [ ] **Step 3: 验证编译**

Run: `npm run compile`
Expected: 编译成功

- [ ] **Step 4: Commit**

```bash
git add src/extension.ts
git commit -m "feat(command): 註冊 createNote 命令"
```

---

### Task 4: 功能測試

**Files:**
- None (manual testing)

- [ ] **Step 1: 啟動 Extension Development Host**

在 VSCode 中按 `F5` 啟動 Debug

- [ ] **Step 2: 測試命令執行**

在新開啟的 VSCode 窗口中：
1. 按 `Ctrl+Alt+M` 或右鍵選單選擇「📝 建立筆記」
2. 輸入標題「測試筆記」
3. 確認檔案已建立並自動開啟

- [ ] **Step 3: 測試檔名格式**

確認檔名為 `YYYY-MM-DD-測試筆記.md` 格式

- [ ] **Step 4: 測試檔案內容**

確認檔案內容包含標題與日期

- [ ] **Step 5: 測試重複建立**

再次輸入相同標題，確認顯示警告訊息

- [ ] **Step 6: 測試目錄不存在**

刪除 `~/notes` 目錄後重新執行，確認目錄自動建立

- [ ] **Step 7: Commit 測試完成**

```bash
git add .
git commit -m "test: 功能測試完成"
```

---

### Task 5: 更新 CHANGELOG

**Files:**
- Modify: `CHANGELOG.md`

- [ ] **Step 1: 添加變更紀錄**

在 `CHANGELOG.md` 中添加：

```markdown
## [Unreleased]

### Added
- 新增 `extension.createNote` 命令，快速建立帶日期標題的 Markdown 筆記
- 新增 `vscodeExtension.notePath` 設定項，可自訂筆記存放位置
- 新增快捷鍵 `Ctrl+Alt+M` 建立筆記
- 新增右鍵選單「📝 建立筆記」選項
```

- [ ] **Step 2: Commit**

```bash
git add CHANGELOG.md
git commit -m "docs(changelog): 更新 createNote 功能紀錄"
```

---

## 完成檢查清單

- [ ] package.json 已添加命令、設定、選單、快捷鍵
- [ ] noteCreator.ts 已建立並實作所有函數
- [ ] extension.ts 已註冊命令
- [ ] 功能測試全部通過
- [ ] CHANGELOG 已更新
- [ ] 所有 commits 已完成