/*global QUnit*/

sap.ui.define([
	"comsample/ov-app-inv/controller/Inventory.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Inventory Controller");

	QUnit.test("I should test the Inventory controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
