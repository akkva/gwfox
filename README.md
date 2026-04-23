<div align="center">
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/f5b80261-01d8-465d-a716-fa78be895e28">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/b65b6ebd-3a81-4b3d-a866-bdcca568a048">
<img alt="Preview">
</picture><br><br>
<a href="https://github.com/akkva/gwfox/archive/refs/heads/main.zip"><img src="https://img.shields.io/badge/GWfox-3.11-fdbb4d?style=for-the-badge"></a>
<a href="https://www.firefox.com"><img src="https://img.shields.io/badge/Firefox-150-fdbb4d?style=for-the-badge"></a>
</div>

## Installation

1. Move the theme files into `[your-profile]/chrome/`.
2. Configure `about:config` with these preferences:

| Preference | Value | Platform / Notes |
| :--- | :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | true | Required |
| `svg.context-properties.content.enabled` | true | Required |
| `sidebar.animation.enabled` | false | Required |
| `widget.windows.mica` | true | Windows¹ |
| `widget.windows.mica.toplevel-backdrop` | 2 | Windows |
| `widget.gtk.rounded-bottom-corners.enabled` | true | Linux |
| `widget.macos.native-context-menus` | false | macOS |

> ¹ Windows: Requires enabling "System theme — auto" in Firefox Add-ons manager.

3. Restart Firefox to apply changes.

---

## Customization

Create these preferences in `about:config` to modify the UI:

### Boolean Toggle

| Preference | Description | Notes |
| :--- | :--- | :--- |
| `gwfox.plus` | Enable bundled layout | macOS UI + Compact mode |
| `gwfox.plus_sc` | Use native window controls | Sub-option for `gwfox.plus` |
| `gwfox.icons` | Enable menu icons | Add icons to menu items |
| `gwfox.bms` | Enable transparency | Linux only |
| `gwfox.noborder` | Remove window borders | Borderless window mode |
| `gwfox.atbc` | Enable ATBC compatibility | For Adaptive Tab Bar Colour |
| `gwfox.blur` | Enable UI blur effects | Disable if performance issues occur |
| `gwfox.ac` | Enable accent color | Edit `--bg0` in CSS to customize |
| `gwfox.tp` | Enable New Tab transparency | Requires `allow_transparent_browser` |
| `gwfox.db` | Disable menu blur | Turn off blur on panels/menus |

### Numerical Settings

| Preference | Description | Values |
| :--- | :--- | :--- |
| `gwfox.sidebar` | Set sidebar width | `1`, `2`, or `3` |
