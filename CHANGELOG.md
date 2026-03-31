# Change Log

All notable changes to the "vscode-extension-hello-world" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added
- 新增 `extension.createNote` 命令，快速建立帶日期標題的 Markdown 筆記
- 新增 `vscodeExtension.notePath` 設定項，可自訂筆記存放位置
- 新增快捷鍵 `Ctrl+Alt+M` 建立筆記
- 新增右鍵選單「📝 建立筆記」選項
- 新增 Prettier 代碼格式化工具
- 新增 noteCreator 模組單元測試

### Changed
- 更嚴格的 ESLint 配置（@typescript-eslint/recommended + Prettier 整合）
- README 新增功能使用說明與設定範例

### Fixed
- noteCreator 模組支援中文字元
- 添加 whitespace trimming 與錯誤處理
