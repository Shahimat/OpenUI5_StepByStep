sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend('mainmodel.controller.HelloPanel', {
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