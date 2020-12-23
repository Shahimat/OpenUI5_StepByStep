sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
 ], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend('webapp.controller.App', {

        productList: null,
        productListBinding: null,
        productSelectedItem: null,
        productSelectedItemPos: null,
        odataModel: null,
        MessageToast: null,

        onInit: function () {
            this.productList = this.byId('productList');
            this.productListBinding = this.productList.getBinding('items');
            this.odataModel = this.getView().getModel('product');
            this.MessageToast = MessageToast;
        },

        onSelectionChange: function (oEvent) {
            this.productSelectedItem = this.productList.getSelectedItem();
            this.productSelectedItemPos = oEvent.getSource().getSelectedContextPaths()[0].match(/\((\d+)\)/)[1];
        },
        
        onCreate: function () {

        },
        
        onChange: function () {

        },
        
        onDelete: function () {

        },
        
        onSort: function () {

        },
        
        onRefresh: function () {

        },

     });
 });