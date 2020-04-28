module.exports = {
  title: "DMS Mobile 开发文档",
  description: "网站的描述",
  head: [
    ["script", { src: "/js/jquery.min.js" }],
    ["script", { src: "/js/bd.js" }],
  ],
  themeConfig: {
    navbar: true,
    displayAllHeaders: false,
    sidebar: [
      {
        title: "开发指南",
        collapsable: false,
        children: [["/guide/", "开发指南"]],
      },
      {
        title: "基础组件",
        collapsable: false,
        children: [
          ["/markdown/m-page.md", "页面"],
          ["/markdown/m-button.md", "按钮"],
          ["/markdown/m-label.md", "单元格"],
          ["/markdown/m-input.md", "文本框"],
          ["/markdown/m-textarea.md", "文本域"],
          ["/markdown/m-checkbox.md", "单行选择"],
          ["/markdown/m-checkbox-panel.md", "多行选择"],
          ["/markdown/m-picker.md", "时间日期选择"],
          ["/markdown/validator.md", "表单校验"],
          ["/markdown/m-swipe-cell.md", "滑动单元格"],
          ["/markdown/m-dialog.md", "弹窗交互"],
          ["/markdown/swiper-tab.md", "选项卡"],
          ["/markdown/navbar.md", "导航栏"],
        ],
      },
      {
        title: "业务组件",
        collapsable: false,
        children: [
          ["/markdown/m-license.md", "车牌号"],
          ["/markdown/search-filter.md", "查询"],
          ["/markdown/m-vehicle-check-cell.md", "车辆检查项"],
          ["/markdown/dict.md", "数据字典"],
          ["/markdown/doc-reader.md", "文档阅读器"],
        ],
      },
    ],
  },
  lastUpdated: "Last Updated",
  host: "127.0.0.1",
  port: 8001,
};
