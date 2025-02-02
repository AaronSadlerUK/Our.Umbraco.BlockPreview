# Our.Umbraco.BlockPreview
[![Platform](https://img.shields.io/badge/Umbraco-10.4+-%233544B1?style=flat&logo=umbraco)](https://umbraco.com/products/umbraco-cms/)
[![NuGet](https://img.shields.io/nuget/v/Our.Umbraco.BlockPreview.svg)](https://www.nuget.org/packages/Our.Umbraco.BlockPreview/)
[![GitHub](https://img.shields.io/github/license/rickbutterfield/Our.Umbraco.BlockPreview)](https://github.com/rickbutterfield/Our.Umbraco.BlockPreview/blob/main/LICENSE)

**Our.Umbraco.BlockPreview** enables easy to use rich HTML backoffice previews for the Umbraco Block List and Block Grid editors.

<img src="https://raw.githubusercontent.com/rickbutterfield/Our.Umbraco.BlockPreview/main/.github/readme-assets/icon.png" alt="Our.Umbraco.BlockPreview icon" height="150" align="right">

## Installation
The Umbraco 10.4+ version of this package is [available via NuGet](https://www.nuget.org/packages/Our.Umbraco.BlockPreview).

To install the package, you can use either .NET CLI:

```
dotnet add package Our.Umbraco.BlockPreview --version 1.0.1
```

or the older NuGet Package Manager:

```
Install-Package Our.Umbraco.BlockPreview -Version 1.0.1
```

## Usage
This package installs a custom Angular preview for both the Block List and Block Grid editors in the backoffice.

When setting up a block to be part of the List or Grid, setting the 'Custom View' property to `block-preview.html` will generate preview HTML based on the respective partial view found in `/Views/Partials/blocklist/Components` or `/Views/Partials/blockgrid/Components`.

How to select the custom views when creating a Block List/Grid:
![Screenshot](https://raw.githubusercontent.com/rickbutterfield/Our.Umbraco.BlockPreview/main/screenshots/screenshot1.png "The Umbraco backoffice showing a panel titled 'Select view', with two HTML files in a list available for selection")

Before and after of how components look within the Block Grid:
![Screenshot2](https://raw.githubusercontent.com/rickbutterfield/Our.Umbraco.BlockPreview/main/screenshots/screenshot2.png "Before and after of how components look within the Block Grid")

### Grid-specific setup
When using the new Block Grid, replace the references below in your Grid template partial views

| Default Umbraco usage | BlockPreview usage |
| --------------------- | ------------------ |
| @await Html.GetBlockGridItemAreasHtmlAsync(Model) | @await Html.GetPreviewBlockGridItemAreasHtmlAsync(Model) |
| @await Html.GetBlockGridItemAreaHtmlAsync(Model) | @await Html.GetPreviewBlockGridItemAreaHtmlAsync(Model) |
| @await Html.GetBlockGridItemsHtmlAsync(Model) | @await Html.GetPreviewBlockGridItemsHtmlAsync(Model) |

All of these extensions can be found in the namespace `Our.Umbraco.BlockPreview.Extensions`. This ensures that the grid editors correctly load in the back office.

## Credits
This package is entirely based on the amazing work done by [Dave Woestenborghs](https://github.com/dawoe) for [24days in Umbraco 2021](https://archive.24days.in/umbraco-cms/2021/advanced-blocklist-editor/). His code has been extended to support the new Block Grid editor in v10.4/v11 and turned into this package.

[Matthew Wise](https://github.com/Matthew-Wise) also wrote a great article for [24days in Umbraco 2022](https://24days.in/umbraco-cms/2022/more-blocklist-editor/) which added the ability to surface `ViewComponents` and has allowed his code to be contributed.

## License
Copyright &copy; 2022-2023 [Rick Butterfield](https://rickbutterfield.dev), and other contributors.

Licensed under the [MIT License](https://github.com/rickbutterfield/Our.Umbraco.BlockPreview/blob/main/LICENSE.md).
