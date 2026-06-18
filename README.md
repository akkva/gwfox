<div align="center">
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/3cddb35e-ea52-41c7-8e20-f7bb0e3524a3">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/ab43781e-f42d-4a0c-820d-cef274d20a12">
<img alt="Preview">
</picture>
</div>

## Installation

1. Move the theme files into `[your-profile]/chrome/`.
2. Configure `about:config` with these preferences:

| Preference | Value | Platform / Notes |
| :--- | :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | true | Required |
| `svg.context-properties.content.enabled` | true | Required |
| `browser.newtabpage.activity-stream.nova.enabled` | false | Required |
| `widget.windows.mica` | true | Windows¹ |
| `widget.windows.mica.toplevel-backdrop` | 2 | Windows |
| `widget.gtk.rounded-bottom-corners.enabled` | true | Linux |
| `widget.macos.native-context-menus` | false | macOS |

> ¹ Windows: Requires enabling "System theme — auto" in Firefox Add-ons manager.

> [!IMPORTANT]
> **For East Asian (CJK) input:** Must enable **"Address Bar: show results during IME composition"** in `Settings` > `Firefox Labs`.

3. Restart Firefox to apply changes.

---

## Customization

Create these preferences in `about:config` to modify the UI:

### Boolean Toggle

| Preference | Description | Notes |
| :--- | :--- | :--- |
| `gwfox.toolbar` | Auto hide bookmarks toolbar | |
| `gwfox.urlbar` | Move address bar to sidebar | Sidebar expanded (not hover to expand) |
| `gwfox.blur` | Add acrylic effect to the floating panel | |
| `gwfox.ac` | Enable accent color | Edit `--bg0` in CSS to customize |
| `gwfox.atbc` | Adaptive Tab Bar Colour compatibility | |
| `gwfox.newtab` | Enable New Tab transparency | Requires `allow_transparent_browser` |
| `gwfox.noborder` | Remove window borders | |
| `gwfox.bms` | Enable main window transparency | Linux only |
| `gwfox.icons` | Add menu icons | |


### Numerical Settings

| Preference | Description | Values |
| :--- | :--- | :--- |
| `gwfox.sidebar` | Set sidebar width | `1`, `2`, or `3` |
