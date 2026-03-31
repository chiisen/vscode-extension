import * as vscode from 'vscode';
import * as path from 'path';
import { homedir } from 'os';

function getDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function titleToFilename(title: string): string {
  const dateStr = getDateString();
  const sanitizedTitle = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff-]/g, '');
  return `${dateStr}-${sanitizedTitle}.md`;
}

function generateNoteContent(title: string): string {
  const dateStr = getDateString();
  return `# ${title}

日期：${dateStr}

---

內容...
`;
}

function getNotePath(): string {
  const config = vscode.workspace.getConfiguration('vscodeExtension');
  const notePath = config.get<string>('notePath') || '~/notes';
  return notePath.replace('~', homedir());
}

export async function createNote(): Promise<void> {
  const title = await vscode.window.showInputBox({
    prompt: '請輸入筆記標題',
    ignoreFocusOut: true,
    placeHolder: '例如：我的筆記',
  });

  if (!title?.trim()) {
    return;
  }

  const trimmedTitle = title.trim();

  const noteDir = getNotePath();
  const filename = titleToFilename(trimmedTitle);
  const fullPath = path.join(noteDir, filename);
  const content = generateNoteContent(trimmedTitle);

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

    try {
      await vscode.workspace.fs.writeFile(uri, Buffer.from(content));

      const doc = await vscode.workspace.openTextDocument(uri);
      await vscode.window.showTextDocument(doc);

      vscode.window.showInformationMessage(`筆記已建立：${filename}`);
    } catch (writeError) {
      vscode.window.showErrorMessage(`建立筆記失敗：${writeError}`);
    }
  }
}
