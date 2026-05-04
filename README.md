<div align="center">
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/6d54cadc-1067-41c1-980d-cd5c39aceb0e">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/7b697c73-6b58-417a-9c04-2c4fb5deb138">
<img alt="Preview">
</picture><br><br>
<a href="https://github.com/akkva/gwfox/archive/refs/heads/main.zip"><img src="https://img.shields.io/badge/GWfox-4.1.1-blue?style=for-the-badge"></a>
<a href="https://www.firefox.com"><img src="https://img.shields.io/badge/Firefox-150-blue?style=for-the-badge"></a>
</div>

## Installation

1. Move the theme files into `[your-profile]/chrome/`.
2. Configure `about:config` with these preferences:

| Preference | Value | Platform / Notes |
| :--- | :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | true | Required |
| `svg.context-properties.content.enabled` | true | Required |
| `widget.windows.mica` | true | Windows¹ |
| `widget.windows.mica.toplevel-backdrop` | 2 | Windows |
| `widget.gtk.rounded-bottom-corners.enabled` | true | Linux |
| `widget.macos.native-context-menus` | false | macOS |
| ~~`sidebar.animation.enabled`~~ | ~~false~~ | ~~Required~~ |

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
| `gwfox.icons` | Enable menu icons | |
| `gwfox.blur` | Enable UI blur effects | Disable if performance issues occur |
| `gwfox.toolbar` | Auto-hide bookmarks toolbar | |
| `gwfox.bms` | Enable transparency | Linux only |
| `gwfox.urlbar` | Move address bar to sidebar | |
| `gwfox.newtab` | Enable New Tab transparency | Requires `allow_transparent_browser` |
| `gwfox.noborder` | Remove window borders | |
| `gwfox.atbc` | Enable ATBC compatibility | For Adaptive Tab Bar Colour |
| `gwfox.db` | Disable menu blur | |
| `gwfox.ac` | Enable accent color | Edit `--bg0` in CSS to customize |
| ~~`gwfox.plus`~~ | ~~Enable bundled layout~~| |
| ~~`gwfox.plus_sc`~~ | ~~Use native window controls~~| |

### Numerical Settings

| Preference | Description | Values |
| :--- | :--- | :--- |
| `gwfox.sidebar` | Set sidebar width | `1`, `2`, or `3` |
