# ti.codescanner - Titanium code scanner module for Andorid

## Scan codes (QR, Barcodes) without any camera permission!

Based on the <a href="https://developers.google.com/ml-kit/code-scanner">MLKit Google code scanner (Beta)</a> you can use this module to make a simple QR/Barcode scanner inside your app that don't need any camera permission!

If you'll need to customize your UI or want to scan text have a look at the <a href="https://github.com/m1ga/titanium-mlkit-demo">demo of my ti.mlkit module</a>.

## Example

```js
const win = Ti.UI.createWindow();
const codescanner = require("ti.codescanner");
codescanner.addEventListener("complete", e => {
	console.log(e.value);
})
win.addEventListener("click", e => {
	codescanner.scan();
});
win.open();
```

## Events
* <b>complete</b> -> event.value
* <b>error</b> -> event.message

## Methods
* scan

## Known issues

On some phones the code scanner might not work or open/closes right away without any error. The `Google Play Services` could be an issue. 
The Titanium module only calls one function from Googles library. If you have a non-working phone you would need to use their support pages: https://developers.google.com/ml-kit/community

## Author

- Michael Gangolf ([@MichaelGangolf](https://twitter.com/MichaelGangolf) / [Web](http://migaweb.de))

<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>
