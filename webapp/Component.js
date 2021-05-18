sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    'use strict';
    return UIComponent.extend('webapp.Component', {

        metadata : {
            manifest: 'json'
        },

        init: function () {
            // вызвать функцию инициализации родителя
            UIComponent.prototype.init.apply(this, arguments);

            // применяем модель с данными oData к view
            var deviceModel = new sap.ui.model.json.JSONModel({
                isPhone: sap.ui.Device.system.phone
            });
            this.setModel(deviceModel, 'device');

            this.getRouter().initialize();
        },

        getContentDensityClass: function () {
            if (!this._sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = 'sapUiSizeCompact';
                } else {
                    this._sContentDensityClass = 'sapUiSizeCozy';
                }
            }
            return this._sContentDensityClass;
        }

    });
});