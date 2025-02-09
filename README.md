<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/65d5ae2c-7252-4662-8a62-f2440a371e84">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/7d472475-5313-4fd4-b078-cc3488184e0c">
<img width="1270" alt="01">
</picture>

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
