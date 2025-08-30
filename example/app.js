const win = Ti.UI.createWindow();
const codescanner = require("ti.codescanner");
codescanner.addEventListener("complete", e => {
	console.log(e.value);
})
win.addEventListener("click", e => {
	codescanner.scan({
		autoZoom: false,
		formats: [codescanner.FORMAT_QR_CODE, codescanner.FORMAT_CODE_128]
	});
});
win.open();
