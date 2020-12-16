sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function (UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend('webapp.Component', {

        metadata : {
            'rootView': {
                'viewName': 'webapp.view.App',
                'type': 'XML',
                'async': true,
                'id': 'app'
            }
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
            // применяем модель i18n к view
            let i18nModel = new ResourceModel({
                bundleName: 'webapp.i18n.i18n',
                supportedLocales: [''],
                fallbackLocale: ''
            });
            this.setModel(i18nModel, 'i18n');

        }
    });
});