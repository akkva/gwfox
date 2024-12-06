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
 
- 可选项

  - 定制标签页壁纸：把壁纸命名为 `light.jpg` 和 `dark.jpg` 放入 `resources` 文件夹内
    
    - 添加布尔值 `uc.tweak.newtab_wallpapers` 为 `true` 启用

- 安装扩展[Sidebery](https://addons.mozilla.org/firefox/addon/sidebery)固定到工具栏

  - 在设置-帮助里选择 `sidebery-data.json` 导入
    
    - 如果导入后异常，请先在通用-已用数据-删除全部数据后重新导入

- 重启火狐

## 样式截图

<img width="1009" alt="01" src="https://github.com/user-attachments/assets/984114df-d40c-40ed-a355-fe7507983302">
<br><br>
<img width="1009" alt="02" src="https://github.com/user-attachments/assets/350360b4-78c3-4248-a0ef-9f0a5f3f09ed">
<br><br>
<img width="1009" alt="03" src="https://github.com/user-attachments/assets/f2f6ae7e-9606-4b21-b61e-31f83d625d81">
