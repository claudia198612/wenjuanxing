module.exports = {
   // 箭头函数只有一个参数的时候可以忽略括号-"always" 表示始终使用括号
    arrowParens: "avoid",
    // 括号内部不要出现空格
    bracketSpacing: true, 
    // 行结束符使用Unix格式
    endOfLine: "lf", 
    // 将 JSX 标签的 ">" 放在最后一行的末尾，而不是另起一行
    jsxBracketSameLine: false, 
    // 一行的最大宽度
    printWidth: 100, 
    // 是否换行
    proseWrap: "preserve", 
    // 缩进的空格数
    tabWidth: 2, 
    // 是否使用制表符进行缩进
    useTabs: false, 
    // 是否在语句末尾使用分号
    semi: false, 
    // 是否使用单引号
    singleQuote: true,
    // 在 JSX 中是否使用单引号
    jsxSingleQuote: false, 
    // 多行时是否添加尾逗号，"es5" 表示在 ES5 中有效的地方添加尾逗号
    trailingComma: "es5", 
    parser:'typescript', 

  };
  