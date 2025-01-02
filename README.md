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

- 隐藏侧栏：在 `about:config` 页面中添加布尔值 `uc.tweak.popout_sidebar` 为 `true` 启用

## 样式截图

<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/320fbe7b-2858-4061-9f02-96c28f08c995">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/46f765c3-ae09-4f47-b45f-6f25055e7eb4">
<img width="1130" alt="01">
</picture>
<br><br>
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/32e05b50-a36a-47d8-baec-9bb7c26bb2ad">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/8c5b1aaa-8b91-4293-a4bf-2bddf5afbdc1">
<img width="1130" alt="02">
</picture>
<br><br>
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/e4bc04d7-06f5-460c-aa16-c2ef3876e39b">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/0da426ee-ae06-42c5-8371-138ee59b7900">
<img width="1130" alt="03">
</picture>
