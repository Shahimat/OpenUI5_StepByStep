sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
 ], function (Controller, MessageToast, JSONModel) {
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
        },

        onShowHello : function () {
           MessageToast.show('Hello World');
        }
     });
 });