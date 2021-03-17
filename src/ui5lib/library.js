sap.ui.define([
    
], function () {

    sap.ui.getCore().initLibrary({
        name: 'ui5lib',
        version: '0.0.1',
        dependencies: [
            'sap.ui.core',
            'sap.m'
        ],
        types: [],
        interfaces: [],
        controls: [
            'ui5lib.lib.ProductRaiting'
        ],
        elements: []
    });

    return ui5lib;

}, /* bExport */ false);