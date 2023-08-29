# Welcome to Neptune JS!

![](https://img.shields.io/github/v/tag/neptune-css/neptune-css?color=%2300AACC) ![](https://img.shields.io/npm/dm/@neptune-css/neptune?color=%2300AACC) ![](https://img.shields.io/npm/l/@neptune-css/neptune?color=%2300AACC) 
***

![readme_banner_js](https://github.com/neptune-css/javascript-api/assets/122671813/42fd3da4-3f6e-42de-b68b-487e5fc7da47)


## Install

### NPM
Copy the following Code to install the [npm package](https://www.npmjs.com/package/neptunecss-js).
```
npm i neptunecss-js
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/neptunecss-js@latest/neptune.min.js"></script>
```

### Import

There are two ways to import Neptune JS. The first way is a namespaced import. Copy the following line into your file.

```javascript
import * as NeptuneJS from "path/to/package/neptune.min.js"
```

Now you have to write NeptuneJS. before every class of Neptune JS like:

```javascript
const myBadge = new NeptuneJS.Badge({
    text: "default badge",
    size: "m",
    style: "primary"
});
```

The second way to import Neptune JS is to import only the components you need.

```javascript
import { Badge, Spinner, Toast } from "path/to/package/neptune.min.js"
```

### Example
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Import neptune ui -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss@latest/neptune.min.css">
        
        <title>Neptune example</title>
    </head>
    <body>
        <!-- Your Content -->
        
        <!-- Import Neptune JS -->
        <script src="https://cdn.jsdelivr.net/npm/neptunecss-js@latest/neptune.min.js"></script>
    </body>
</html>
```

## Documentation
You can read the docs [here](https://neptune-css.gitbook.io/neptune-css-docs/neptune-js).

## Snippets Extension
Download it in [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NeptuneCSS.neptunecss-snippets) or checkout on [GitHub](https://github.com/neptune-css/neptune-snippets).

## License
[MIT LICENSE](https://github.com/neptune-css/neptune-js/blob/main/LICENSE)

## Author
[Colin Grahm](https://github.com/CGWebDev2003)
