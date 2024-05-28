<img width="1095" alt="01" src="https://github.com/akkva/gwfox/assets/150437642/95f5c60a-e552-407d-822e-397b4fa21d10">

# gwfox

- 本主题适用macOS，火狐V126+

- 默认样式工具栏按钮数量仅支持左4右4

- 书签工具栏隐藏在底部

- 支持三种样式切换(详见下方视频)

## 使用方法

- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内

- 在 `about:config` 页面中搜索以下布尔值切换为 `true`

  - `toolkit.legacyUserProfileCustomizations.stylesheets`

  - `svg.context-properties.content.enabled`

  - `widget.macos.titlebar-blend-mode.behind-window`
 
- 可选项

  - 新标签页搜索：`browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar` 、

  - 右键菜单主题样式：`widget.macos.native-context-menus` 切换为 `false`
 
  - 新标签页壁纸：`browser.newtabpage.activity-stream.newtabWallpapers.enabled` 切换为 `true`

- 安装扩展[Userchrome Toggle](https://addons.mozilla.org/firefox/addon/userchrome-toggle)(默认设置)固定到工具栏

- 重启火狐

## 样式调整
  
- 紧凑模式：添加布尔值 `uc.tweak.thin_navbar` 为 `true` 启用

  - 支持扩展[Adaptive Tab Bar Colour](https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour)导航工具栏变色
 
    - 设置项 `一般` 仅需勾选 `动态更新...`, `自订` 全部关闭, `进阶` 调整 `首页背景色(暗色)`

[01.webm](https://github.com/akkva/gwfox/assets/150437642/cccaca80-6fcb-4ea2-b1a7-4dfbe5618474)
