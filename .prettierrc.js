module.exports = {
  /**
   * 階層の深さをわかりやすくするため
   */
  tabWidth: 4,
  /**
   * 意図しないエラーを防ぐため
   */
  semi: true,
  /**
   * apostropheを使う際にバッティングしてしまうため
   */
  singleQuote: false,
  /**
   * propertyの増減を簡単にするため
   */
  trailingComma: "all",
  /**
   * 引数が2つ以上の時、引数に型をつける時などでは()を書く必要があるため
   */
  arrowParens: "always",

  // ===== respect Prettier's default value =====
  useTabs: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 80,
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
};
