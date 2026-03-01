## <p align="center"> <b> GWfox 🦊 </b> </p>
<p align="center">This theme is compatible with <b> Firefox 145+ </b> on macOS and Windows</p>
<picture>
<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/0c6044ef-b145-4213-935f-4bd30fa18c35">
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/6013ac87-2756-4128-8405-126795d119b0">
<img width="1234" alt="Preview">
</picture>

## Installation
1. **[Download the theme](https://github.com/akkva/gwfox/archive/refs/heads/main.zip)** and move the `chrome` folder into your Firefox **profile directory**.
2. Navigate to `about:config` and configure the following preferences:
    * **Set to `true`**:
        * `toolkit.legacyUserProfileCustomizations.stylesheets`
        * `svg.context-properties.content.enabled`
        * `widget.windows.mica` (*Windows; requires **System theme — auto** to work*)
    * **Set to `false`**:
        * `sidebar.animation.enabled`
        * `widget.macos.native-context-menus` (*macOS*)
    * **Set to `2`**:
        * `widget.windows.mica.toplevel-backdrop` (*Windows*)
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
1. In `about:config`, add a new **Boolean** preference named **`gwfox.ac`** and set it to **`true`**.
2. Locate the `--bg0` variable in `userChrome.css` and `userContent.css`, and change its value to your preferred color.

<img width="1234" height="787" alt="02" src="https://github.com/user-attachments/assets/2317a828-14dc-4818-8b49-534d54e3493b" />
<img width="1234" height="787" alt="01" src="https://github.com/user-attachments/assets/e5bef8df-ec36-4867-b528-f2ae8b92574a" />

