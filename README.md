# dms_service_mob
```
文档地址：http://dmsmob.zhoujie16.cn
```

#### 介绍

dms移动app，

```
开发注意:
1. 使用 MPage 组件，加ref属性，内部再包裹一层 view，方便以后拓展功能。
	<MPage ref="MPage">
		<view>
			页面布局
		</view>
	</MPage>
	
2. 导航栏优先在 page.json 中 app-plus 字段中配置，page.json 参数不能满足需求时使用 plus api 配置。见 demo navbar1 和 navbar2。如仍不满足需求使用自定义导航。

3. 单选 和 多选 的选项参数 itemList 结构: [{ text: '选项1', value: '1' }]。
   text 和 value 值类型必须 是 字符串
   
4. 插槽的使用
	具名插槽和作用域插槽 全部使用 v-slot 指令。
	不要使用  slot 和 slot-scope （vue官方已废弃）
	
	// 例如这样
	<template v-slot:header="slotProps">
		{{ slotProps.msg }}
	</template>
	
	// 下面的写法不要使用
	<template slot="header"></template>
	<template slot="default" slot-scope="slotProps">
    {{ slotProps.msg }}
  </template>
  
5. m-button 按钮绑定事件 使用 @click.native 方式
```



#### 安装教程

- 使用 HBudlidX 打开项目
- 安装插件：工具 >> 插件安装
  - prettier
  - scss/sass编译
- 安装依赖  yarn install  或 npm install 
- 安装微信开发者工具  https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
  - 设置 >> 安全设置 >> 服务端口 >> 开启
- 安装手机模拟器
  - Mac 安装 Xcode
  - Windows 安装 网易mumu: http://mumu.163.com
- 使用 HBudlidX 运行： 
  - 打开手机模拟器端口（Mac无需操作）：7555
  - 菜单 >> 运行 >> 运行到手机模拟器
  - 菜单 >> 运行 >> 运行到小程序模拟器



##### 编辑器配置

在 HBuilderX 设置中打开 启用.editorconfig支持 开关

##### 复制 prettier  配置（保持代码风格统一）

复制以下配置代码，粘贴到 插件配置中

工具 >> 插件配置 >> formator-prettier >> prettier.config.js

```javascript
module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: false,
	semi: true,
	singleQuote: true,
	proseWrap: "preserve",
	arrowParens: "avoid",
	bracketSpacing: true,
	disableLanguages: [],
	endOfLine: "auto",
	eslintIntegration: false,
	htmlWhitespaceSensitivity: "ignore",
	ignorePath: ".prettierignore",
	jsxBracketSameLine: false,
	jsxSingleQuote: false, 
	parser: "babylon",
	requireConfig: false,
	stylelintIntegration: false,
	trailingComma: "none",
	tslintIntegration: false,
	parsers: {
		".jsx": "flow",
		".scss": "scss",
		".ts": "typescript",
		".less": "css",
		".vue": "vue",
		".nvue": "vue",
		".ux": "vue",
		".yml": "yaml",
	}
}
```

