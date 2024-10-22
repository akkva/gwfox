# gwfox

- 本主题适用macOS，火狐V130+

- 工具栏按钮数量仅支持左4右4

- 书签工具栏隐藏在底部

- 两种样式一键切换(侧栏支持拉伸)

## 使用方法

- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内

- 在 `about:config` 页面中搜索以下布尔值切换为 `true`

  - `toolkit.legacyUserProfileCustomizations.stylesheets`

  - `svg.context-properties.content.enabled`
 
  - `browser.tabs.allow_transparent_browser`
 
- 可选项

  - 新标签页搜索：`browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar` 、

  - 右键菜单主题样式：`widget.macos.native-context-menus` 切换为 `false`
 
  - 定制标签页壁纸：把壁纸命名为 `light.jpg` 和 `dark.jpg` 放入 `resources` 文件夹内
    
    - 添加布尔值 `uc.tweak.newtab_wallpapers` 为 `true` 启用

- 安装扩展[Sidebery](https://addons.mozilla.org/firefox/addon/sidebery)固定到工具栏

  - 在设置-帮助里选择 `sidebery-data.json` 导入

- 重启火狐

## 样式截图

<img width="1096" alt="01" src="https://github.com/user-attachments/assets/68318bc6-3f17-4b29-a29a-33870310ca3a">
<br><br>
<img width="1096" alt="02" src="https://github.com/user-attachments/assets/881772d1-546e-423e-90af-c2b9756f4dcd">
<br><br>
<img width="1096" alt="03" src="https://github.com/user-attachments/assets/9b8a479e-6267-44a9-8059-9d24f3fcefb4">
