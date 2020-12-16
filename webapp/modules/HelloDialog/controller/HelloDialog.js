sap.ui.define([
	'sap/ui/base/ManagedObject',
	'sap/ui/core/Fragment'
], function (ManagedObject, Fragment) {
	'use strict';

	return ManagedObject.extend('webapp.modules.HelloDialog.controller.HelloDialog', {

		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		open : function () {
			var oView = this._oView;

			// ленивое создание диалога (в момент запуска)
			if (!this.pDialog) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId('helloDialog').close();
					}
				};
				// load asynchronous XML fragment
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: 'webapp.modules.HelloDialog.view.HelloDialog',
					controller: oFragmentController
				}).then(function (oDialog) {
					// присоединить диалог к корню View
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		}

	});

});