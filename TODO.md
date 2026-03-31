# TODO

## 待完成項目

### 1. 手動測試 (Task 4)
- **狀態:** ⏳ 待執行
- **說明:** 按 F5 在 VSCode 測試 createNote 功能
- **測試步驟:**
  1. 按 `F5` 啟動 Extension Development Host
  2. 按 `Ctrl+Alt+M` 或右鍵選「📝 建立筆記」
  3. 輸入標題「測試筆記」
  4. 確認檔案建立於 `~/notes/YYYY-MM-DD-測試筆記.md`
  5. 測試重複建立（相同標題）應顯示警告
  6. 測試目錄不存在時自動建立

### 2. 單元測試執行
- **狀態:** ⏳ VSCode 測試環境問題
- **說明:** 測試已撰寫但 VSCode test-electron 有權限問題
- **檔案:** `src/test/suite/noteCreator.test.ts`
- **測試數量:** 9 tests

---

## 已完成項目

### 實作任務
- ✅ Task 1: 更新 package.json 添加命令與設定
- ✅ Task 2: 建立 noteCreator.ts 模組
- ✅ Task 3: 修改 extension.ts 注册命令
- ✅ Task 5: 更新 CHANGELOG

### 優化項目
- ✅ 優化1: 代碼質量 - try-catch、whitespace trimming
- ✅ 優化2: 開發工具 - Prettier、ESLint
- ✅ 優化3: 測試覆蓋 - noteCreator.ts 單元測試 (已撰寫)
- ✅ 優化4: 文檔完善 - README 使用說明

---

## 驗收標準 (Spec)

- [ ] 命令可從右鍵選單執行
- [ ] 輸入標題後自動產生 Markdown 檔案
- [ ] 檔名符合 `YYYY-MM-DD-標題.md` 格式
- [ ] 檔案內容包含標題與日期
- [ ] 自動開啟新建立的檔案
- [ ] 目錄不存在時自動建立
- [ ] 檔案已存在時顯示警告