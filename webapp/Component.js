sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
	'./modules/HelloDialog/controller/HelloDialog'
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    'use strict';
    return UIComponent.extend('webapp.Component', {

        metadata : {
            manifest: "json"
        },

        init: function () {
            // вызвать функцию инициализации родителя
            UIComponent.prototype.init.apply(this, arguments);

            // применяем модель с данными oData к view
            let oData = {
                recipient : {
                    name : 'World'
                }
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
            // create the views based on the url/hash
			this.getRouter().initialize();
        },

        exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}

    });
});