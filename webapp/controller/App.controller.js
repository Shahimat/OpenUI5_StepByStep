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
        productSelectedData: null,
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
            this.productSelectedData = {
                ProductID:    Number(this.productSelectedItem.getCells()[0].getProperty('value')),
                ProductName:         this.productSelectedItem.getCells()[1].getProperty('value'),
                UnitPrice:    Number(this.productSelectedItem.getCells()[2].getProperty('value'))
            };
        },
        
        onCreate: function () {
            this.odataModel.create('/Products', {
                'ProductName' : 'some',
                'UnitPrice' : 100
            }, 
            {
                success: function (oData, response) {
                    this.MessageToast.show('OData create success');
                    console.log(oData, response);
                }.bind(this),
                error: function (oError) {
                    this.MessageToast.show('OData create error');
                    console.log(oError);
                }.bind(this)
            });
        },
        
        onChange: function () {
            if (!this.productSelectedItemPos) {
                MessageToast.show('Ничего не выбрано!');
                return;
            }
            this.odataModel.update(`/Products(${this.productSelectedItemPos})`, {
                UnitPrice: this.productSelectedData.UnitPrice + 137,
            });
        },
        
        onDelete: function () {

        },
        
        onSort: function () {

        },
        
        onRefresh: function () {

        },

     });
 });