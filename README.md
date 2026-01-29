## <p align="center"> <b> GWfox 🦊 </b> </p>
<p align="center">This theme is compatible with <b> Firefox 145+ </b> on macOS and Windows</p>
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/204bffdb-d37f-4a3e-98f6-c21e84b3b46d">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/0a83cfb1-23ac-4458-8113-536b240d549b">
<img width="1315" alt="01">
</picture>

## Installation
1. **[Download the theme](https://github.com/akkva/gwfox/archive/refs/heads/main.zip)** and move the `chrome` folder into your Firefox **profile directory**.
2. Navigate to `about:config`, search for the following preferences, and set them to **`true`**:
    * `toolkit.legacyUserProfileCustomizations.stylesheets`
    * `svg.context-properties.content.enabled`
    * `widget.windows.mica` (*Windows; requires **System theme — auto** to work*)
3. Set the following preferences to **`false`**:
    * `sidebar.animation.enabled`
    * `widget.macos.native-context-menus` (*macOS*)
4. Set `widget.windows.mica.toplevel-backdrop` to **`2`** (*Windows*).
5. **Restart Firefox.**

## Customization
To enable additional features, add these **Boolean** preferences in `about:config` and set them to **`true`**:
* **`gwfox.plus`**: Enables a bundled layout featuring macOS-style window controls, compact mode, a sidebar-integrated address bar, and an **auto-hide Bookmarks Toolbar at the bottom** (shows on hover).
    * **`gwfox.plus_sc`**: Use native window controls.
    * **`gwfox.plus_tb`**: Auto-hide Bookmarks Toolbar at the **top** instead.
* **`gwfox.atbc`**: Enable compatibility with the **Adaptive Tab Bar Colour** extension.
* **`gwfox.noborder`**: Remove window borders.
* **`gwfox.icons`**: Enable menu icons.

## Customizing Accent Color
1. In `about:config`, add a new **Boolean** preference named **`gwfox.ac`**.
2. Locate the `--bg0` variable in `userChrome.css` and `userContent.css`, and change its value to your preferred color.
