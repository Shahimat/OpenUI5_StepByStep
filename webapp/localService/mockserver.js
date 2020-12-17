sap.ui.define([
	'sap/ui/core/util/MockServer',
	'sap/base/util/UriParameters'
], function (MockServer, UriParameters) {
	'use strict';

    return {
        init: function () {
            // создаем мок сервер
            var oMockServer = new MockServer({
                rootUri: 'https://services.odata.org/V2/Northwind/Northwind.svc/'
            });

            var oUriParameters = new UriParameters(window.location.href);

            // Настраиваем задержку для мок сервера
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get('serverDelay') || 500
            });

            // симуляция данных
            var sPath = '../localService';
            oMockServer.simulate(sPath + '/metadata.xml', sPath + '/mockdata');

            // запуск
            oMockServer.start();
        }
    };

});