<img width="1095" alt="01" src="https://github.com/akkva/gwfox/assets/150437642/95f5c60a-e552-407d-822e-397b4fa21d10">

# gwfox

- 本主题适用macOS，火狐V126+

- 工具栏按钮数量仅支持左4右4

- 书签工具栏隐藏在底部

- 两个样式一键切换(详见下方视频)

## 使用方法

- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内

- 在 `about:config` 页面中搜索以下布尔值切换为 `true`

  - `toolkit.legacyUserProfileCustomizations.stylesheets`

  - `svg.context-properties.content.enabled`

  - `widget.macos.titlebar-blend-mode.behind-window`
 
- 可选项

  - 右键菜单主题样式： `widget.macos.native-context-menus` 切换为 `false`
  
  - 新标签页搜索： `browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar` 切换为 `false`

- 安装扩展[Userchrome Toggle](https://addons.mozilla.org/firefox/addon/userchrome-toggle)(默认设置)固定到工具栏

- 重启火狐

[02.webm](https://github.com/akkva/gwfox/assets/150437642/e639b73e-50dc-4801-b1a7-0256d9db5107)
