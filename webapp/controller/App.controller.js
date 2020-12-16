sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend('webapp.controller.App', {
        onInit : function () {
            // применяем модель с данными oData к view
            let oData = {
                recipient : {
                    name : 'World'
                }
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            // применяем модель i18n к view
            let i18nModel = new ResourceModel({
                bundleName: 'webapp.i18n.i18n',
                supportedLocales: [''],
                fallbackLocale: ''
            });
            this.getView().setModel(i18nModel, 'i18n');
        },

        onShowHello : function () {
            // читаем текст сообщения из i18n
            let oBundle = this.getView().getModel('i18n').getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty('/recipient/name');
            let sMsg = oBundle.getText('helloMsg', [sRecipient]);
            // отображаем
            MessageToast.show(sMsg);
        }
     });
 });