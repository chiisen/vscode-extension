import * as assert from 'assert';
import { getDateString, titleToFilename, generateNoteContent } from '../../noteCreator';

suite('noteCreator 模組測試', () => {
  suite('getDateString()', () => {
    test('應返回 YYYY-MM-DD 格式', () => {
      const result = getDateString();
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      assert.ok(regex.test(result), `Expected YYYY-MM-DD format, got: ${result}`);
    });

    test('應返回今天的日期', () => {
      const result = getDateString();
      const today = new Date();
      const expectedYear = today.getFullYear().toString();
      const expectedMonth = String(today.getMonth() + 1).padStart(2, '0');
      const expectedDay = String(today.getDate()).padStart(2, '0');
      const expected = `${expectedYear}-${expectedMonth}-${expectedDay}`;
      assert.strictEqual(result, expected);
    });
  });

  suite('titleToFilename()', () => {
    test('應生成正確的檔名格式', () => {
      const result = titleToFilename('Test Note');
      const regex = /^\d{4}-\d{2}-\d{2}-test-note\.md$/;
      assert.ok(regex.test(result), `Expected date-test-note.md format, got: ${result}`);
    });

    test('應處理空白字元轉換', () => {
      const result = titleToFilename('My Test Note');
      assert.ok(
        result.includes('-my-test-note.md'),
        `Expected spaces converted to dashes, got: ${result}`
      );
    });

    test('應處理中文標題', () => {
      const result = titleToFilename('測試筆記');
      assert.ok(result.includes('-測試筆記.md'), `Expected Chinese preserved, got: ${result}`);
    });

    test('應移除特殊字元', () => {
      const result = titleToFilename('Test!@#$%Note');
      assert.ok(!result.includes('!'), `Expected special chars removed, got: ${result}`);
    });

    test('應轉為小寫', () => {
      const result = titleToFilename('UPPERCASE');
      assert.ok(result.includes('-uppercase'), `Expected lowercase, got: ${result}`);
    });
  });

  suite('generateNoteContent()', () => {
    test('應包含標題', () => {
      const result = generateNoteContent('My Title');
      assert.ok(result.includes('# My Title'), `Expected title in content, got: ${result}`);
    });

    test('應包含日期', () => {
      const result = generateNoteContent('Test');
      const dateStr = getDateString();
      assert.ok(result.includes(`日期：${dateStr}`), `Expected date in content, got: ${result}`);
    });

    test('應包含分隔線', () => {
      const result = generateNoteContent('Test');
      assert.ok(result.includes('---'), `Expected separator in content, got: ${result}`);
    });

    test('應包含內容提示', () => {
      const result = generateNoteContent('Test');
      assert.ok(result.includes('內容...'), `Expected content placeholder, got: ${result}`);
    });
  });
});
