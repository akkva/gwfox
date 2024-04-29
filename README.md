# gwfox

- 本主题适用macOS，火狐V126+

- 默认样式工具栏按钮数量仅支持左3右4

## 使用方法

- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内

- 在 `about:config` 页面中搜索以下布尔值切换为 `true`

  - `toolkit.legacyUserProfileCustomizations.stylesheets`

  - `svg.context-properties.content.enabled`

  - `widget.macos.titlebar-blend-mode.behind-window`

- 重启火狐

## 样式调整

- 以下样式在 `about:config` 页面中添加布尔值 `true` 启用

  - 书签工具栏从底部弹出：`uc.tweak.popout_bookmarks_toolbar`

  - 弹出菜单/面板背景模糊：`uc.tweak.blur`

  - 页面圆角：`uc.tweak.rounded_corners`

  - 主窗口半透明：`uc.tweak.mac_translucent`

  - Arc样式：`uc.tweak.arc_style`

- 可选项

  - 右键菜单主题样式： `widget.macos.native-context-menus` 切换为 `false`
  
  - 新标签页搜索不跳转地址栏： `browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar` 切换为 `false`

## 样式截图

![p1](https://github.com/akkva/gwfox/assets/150437642/6345e70c-6714-458e-a342-fd5c1be0b3d6)
