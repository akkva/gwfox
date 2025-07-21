<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/d7699474-d17b-4560-a9d6-9e1ecaac0ba5">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/90f88774-2886-4a02-aae8-6814f3199adb">
<img width="1495" alt="01">
</picture>
<br><br>

- [简介](#简介)
  - [使用方法](#使用方法)
  - [样式调整](#样式调整)
- [English instructions](#english-instructions)
  - [How to install](#how-to-install)
  - [Further customization](#further-customization)

<br>

# 简介

- 本主题适用Firefox 138+ `Mac` `Win` *

## 使用方法

- [下载主题](https://github.com/akkva/gwfox/archive/refs/heads/main.zip) 把 `chrome` 文件夹放入火狐 `配置文件夹` 内
- 在 `about:config` 页面中搜索以下布尔值切换为 `true`
  - `toolkit.legacyUserProfileCustomizations.stylesheets`
  - `svg.context-properties.content.enabled`
  - `widget.windows.mica` *
  - `widget.windows.mica.toplevel-backdrop` 设为 `2` *
- 以下布尔值切换为 `false`
  - `sidebar.animation.enabled`
  - `widget.macos.native-context-menus` (可选项)
- 重启火狐

## 样式调整

- 书签工具栏隐藏至底部，地址栏置于侧栏，简洁模式，macOS样式窗口控件 * 等
    - 在 `about:config` 页面添加 `gwfox.plus` 布尔值设为 `true` 启用

<details><summary>预览</summary>
<br>
[01.webm](https://github.com/user-attachments/assets/0f24f538-67eb-42e2-a483-b4a8a8e75603)
</details>

<br>

# English instructions

- This theme works on Firefox 138+ on `Mac` & `Windows` *

## How to install

- [Download the theme as a zip file](https://github.com/akkva/gwfox/archive/refs/heads/main.zip)
- Open your profile directory
  - go to `about:support`
  - click the **Open Folder** button next to your **Profile directory**
- Place the `chrome` folder from the download zip in your profile folder
- Change configurations
  - _Option 1: use included user.js (easy)_
    - Place the included user.js file in your profile folder
  - _Option 2: manually set below configurations_
    - In the URL Bar, go to `about:config`
    - Set these to true
        - `toolkit.legacyUserProfileCustomizations.stylesheets`
        - `svg.context-properties.content.enabled`
        - `widget.windows.mica` *
        - `widget.windows.mica.toplevel-backdrop` set to `2` *
    - Set these to false
      - `sidebar.animation.enabled`
      - `widget.macos.native-context-menus` (Optional)
- Restart Firefox!

## Further customization

If you would like to have your Bookmark toolbar hidden at the bottom, address bar in the sidebar, & macOS style window controls change the configutation `gwfox.plus` to `true` in your `about:config`

<details><summary>Preview</summary>
<br>

[01.webm](https://github.com/user-attachments/assets/0f24f538-67eb-42e2-a483-b4a8a8e75603)

</details>
