<img width="1000" alt="p1" src="https://github.com/akkva/gwfox/assets/150437642/930d47f1-0700-4a02-809b-46890cdeec60">

<div align="center">
  
本主题适用mac&win，火狐V121+

</div>

## 使用方法
- 把下载的 `chrome` 文件夹放入火狐 `配置文件夹` 内
  - [userChromeJS](https://github.com/MrOtherGuy/fx-autoconfig)文件夹里的内容合并到对应的目录 `profile` →  `配置目录`  `program` →  `程序目录`
  - mac: `/Applications/Firefox.app/Contents/Resources`

- 在 `about:config` 页面中搜索 `toolkit.legacyUserProfileCustomizations.stylesheets`
  - `svg.context-properties.content.enabled` 并设为 `true`

- 重启火狐

## 注意事项
- 默认样式工具栏按钮数量仅支持左3右4

## 样式调整
- 书签工具栏从底部弹出：在 `about:config` 页面添加 `uc.tweak.popout_bookmarks_toolbar` 并设为 `true`

- 弹出菜单/面板背景模糊(macOS)：在 `about:config` 页面添加 `uc.tweak.blur` 并设为 `true` 

<img width="1000" alt="p2" src="https://github.com/akkva/gwfox/assets/150437642/7f37382d-2f2a-4f73-a78d-037e8ceb58cc"><br>

- 工具栏从顶部弹出：在 `about:config` 页面添加 `uc.tweak.popout_toolbar` 并设为 `true`

<img width="1000" alt="p3" src="https://github.com/akkva/gwfox/assets/150437642/99725dd3-58bc-4532-adf5-f92274ce78b7">

<img width="1000" alt="p4" src="https://github.com/akkva/gwfox/assets/150437642/c7622361-3a1a-4864-a9f9-1302161df5fe"><br>

- 垂直标签页：在 `about:config` 页面添加 `uc.tweak.vertical_tabs` 并设为 `true`
  - 安装Sidebery扩展，在设置-帮助里选择 `sidebery-data.json` 导入

<img width="1000" alt="p5" src="https://github.com/akkva/gwfox/assets/150437642/2b547598-fa77-49ce-bfa2-97e03997ac19">

## 致谢
- [ShyFox](https://github.com/Naezr/ShyFox)
- [edge-frfox](https://github.com/bmFtZQ/Edge-FrFox)
- [firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks)
- [zapsCoolPhotonTheme](https://github.com/zapSNH/zapsCoolPhotonTheme)
- [White-Sur-Firefox-Theme-MacOS](https://github.com/easonwong-de/White-Sur-Firefox-Theme-MacOS)
