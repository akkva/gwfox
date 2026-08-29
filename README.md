<div align="center">
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/17e70652-64ad-419c-b28b-2c8b029a202d">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/11bb3990-d6d6-4657-8a95-84f76f0f30b4">
<img alt="Preview">
</picture>
</div>

## Installation

1. Move the theme files into your profile's `chrome` folder.
2. Configure `about:config` with these preferences:

| Preference | Value | Platform / Notes |
| :--- | :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | true | Required |
| `svg.context-properties.content.enabled` | true | Required |
| `browser.newtabpage.activity-stream.nova.enabled` | false | Required |
| `browser.nova.enabled` | false | Required |
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
| `gwfox.urlbar` | Move address bar to sidebar | Not for hover-expand mode |
| `gwfox.toolbar` | Auto-hide bookmarks toolbar | |
| `gwfox.urlbar.ac` | Auto-collapse address bar | For horizontal tabs |
| `gwfox.blur` | Add acrylic effect to floating panel | |
| `gwfox.ac` | Enable accent color | Edit `--bg0` in CSS to customize |
| `gwfox.atbc` | Adaptive Tab Bar Colour compatibility | |
| `gwfox.newtab` | Enable New Tab transparency | Requires `allow_transparent_browser` |
| `gwfox.noborder` | Remove window borders | |
| `gwfox.bms` | Enable main window transparency | Linux only |
| `gwfox.icons` | Add menu icons | |
| `gwfox.mwc` | Enable macOS-style window controls  | Windows/Linux |
| `gwfox.msc` | Enable macOS-style tab close button | |
| `gwfox.fsi` | Enable FluentUI System Icons | [Source](https://github.com/microsoft/fluentui-system-icons) |

> [!NOTE]
> When `gwfox.urlbar` is enabled, the collapsed sidebar expands in an Arc-like hover mode, which you can trigger from the left.

---

### Numerical Settings

| Preference | Description | Values |
| :--- | :--- | :--- |
| `gwfox.sidebar` | Set sidebar width | `1`, `2`, or `3` |
