const win = Ti.UI.createWindow();
const codescanner = require("ti.codescanner");
codescanner.addEventListener("complete", e => {
	console.log(e.value);
})
win.addEventListener("click", e => {
	codescanner.scan({autoZoom: false});
});
win.open();
