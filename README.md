# gwfox

- 本主题适用Mac/Win*，火狐V133+

- 工具栏按钮数量仅支持左4右4

- 书签工具栏隐藏在底部

## 使用方法

- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内

- 在 `about:config` 页面中搜索以下布尔值切换为 `true`

  - `toolkit.legacyUserProfileCustomizations.stylesheets`

  - `svg.context-properties.content.enabled`
 
  - `browser.tabs.allow_transparent_browser`
 
  - `widget.windows.mica` *
 
  - `browser.urlbar.scotchBonnet.enableOverride` 切换为 `false`

- 安装扩展[Sidebery](https://addons.mozilla.org/firefox/addon/sidebery)固定到工具栏

  - 在设置-帮助里选择 `sidebery-data.json` 导入
    
    - 如果导入后异常，请先在通用-已用数据-删除全部数据后重新导入

- 重启火狐


## 样式调整

- 隐藏侧栏：安装扩展[Userchrome Toggle](https://addons.mozilla.org/firefox/addon/userchrome-toggle)(默认设置)固定到工具栏

  - macOS在此模式下建议把 `widget.macos.native-context-menus` 切换为 `false`

## 样式截图

<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/0be61e2d-9350-4a95-8fe6-03913cba61aa">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/da771032-7911-426d-8f20-62c8249b7f1e">
<img width="1130" alt="01">
</picture>
<br><br>
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/f16b0787-f21f-4f74-8c51-7e3f396acaeb">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/f0586711-7da5-4ed2-8a97-d612d967ddba">
<img width="1130" alt="02">
</picture>
