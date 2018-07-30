const globalModulesPath = require("global-modules-path");
const cliPath = globalModulesPath.getPath("nativescript", "tns");
cli = require(cliPath);

let configurations = {
	appIdentifier: "com.tns.testapplication",
	deviceIdentifier: "<DEVICE_ID>",
	appPlatformsPath: "C:\\work\\android-runtime\\test-app\\app\\src\\main\\assets\\app"
};

const liveTool = cli.androidLivesyncTool;

liveTool.connect(configurations)
	.then(() => {
		return liveTool.sendFile("C:\\work\\android-runtime\\test-app\\app\\src\\main\\assets\\app\\MyActivity.js")
		.then( () => {
			return liveTool.sendDoSyncOperation(false);
		},
		(e) => {
			console.log(e)
		})
		.then(uid => {
			liveTool.end();
		},
		(e) => {
			console.log(e)
		});
	});