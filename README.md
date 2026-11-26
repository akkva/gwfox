<div align="center">
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/c4eb82bb-2f3e-42bd-98e4-0a84713b58a2">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/8765eebd-d810-4964-9f6b-4e45e76afc10">
<img alt="Preview">
</picture>
</div>

## Installation

1. Move the theme files into your profile's `chrome` folder.
2. Set the following preferences in `about:config`:

| Preference | Value | Platform / Notes |
| :--- | :--- | :--- |
| `toolkit.legacyUserProfileCustomizations.stylesheets` | true | Required |
| `svg.context-properties.content.enabled` | true | Required |
| `browser.newtabpage.activity-stream.nova.enabled` | true | Required |
| `browser.nova.enabled` | true | Required |
| `widget.windows.mica` | true | Windows |
| `widget.windows.mica.toplevel-backdrop` | 2 | Windows |
| `widget.gtk.rounded-bottom-corners.enabled` | true | Linux |
| `widget.macos.native-context-menus` | false | macOS |

> [!IMPORTANT]
> Required for East Asian (CJK) input: Enable "Address Bar: show results during IME composition" under `Settings` > `Firefox Labs`.

3. Restart Firefox.

---

## Customization

Create these preferences in `about:config` to modify the UI:

### Boolean Toggles

| Preference | Description | Notes |
| :--- | :--- | :--- |
| `gwfox.urlbar` | Move the address bar to the sidebar | Not available in hover-expand mode |
| `gwfox.toolbar` | Auto-hide the bookmarks toolbar | |
| `gwfox.urlbar.ac` | Auto-collapse the address bar | Horizontal tabs only |
| `gwfox.blur` | Add an acrylic effect to floating panels | |
| `gwfox.ac` | Apply the accent color to the menu | Customize via `--bg0` in CSS |
| `gwfox.atbc` | Enable [ATBC](https://addons.mozilla.org/firefox/addon/adaptive-tab-bar-colour/) compatibility | |
| `gwfox.newtab` | Make the New Tab transparent | Requires `allow_transparent_browser` |
| `gwfox.noborder` | Remove the main window border | |
| `gwfox.bms` | Enable transparency for the main window | Linux only |
| `gwfox.icons` | Add icons to the menu | |
| `gwfox.mwc` | Enable macOS-style window controls | Windows/Linux |
| `gwfox.msc` | Enable a macOS-style tab close button | |
| `gwfox.twc` | Enable theme-styled window controls | Windows/Linux |
| `gwfox.twc.ac` | Auto-collapse window controls | |
| `gwfox.fxa` | Use the avatar as the app menu icon | Requires sign-in |
| `gwfox.fsi` | Enable [Fluent System Icons](https://github.com/microsoft/fluentui-system-icons) | |
| `gwfox.achromatic` | Disable the main window gradient | Default theme only |

> [!NOTE]
> When `gwfox.urlbar` is enabled, the sidebar stays hidden while collapsed and expands into a full floating sidebar when hovering over the left edge, similar to Arc.

### Numerical Settings

| Preference | Description | Values |
| :--- | :--- | :--- |
| `gwfox.sidebar` | Set the sidebar width | `1` (narrow), `3` (wide), or any other value (default) |
| `gwfox.container` | Set the container tab indicator | `1` (line), `2` (15% fill), `3` (50% fill), `4` (75% fill), `5` (full fill), or any other value (dot, default) |
