sap.ui.define([
	'sap/ui/core/util/MockServer',
	'sap/base/util/UriParameters'
], function (MockServer, UriParameters) {
	'use strict';

    return {
        init: function () {

            // создаем мок сервер
            let oMockServer = new MockServer({
                rootUri: 'https://services.odata.org/V2/Northwind/Northwind.svc/'
            });

            let oUriParameters = new UriParameters(window.location.href);

            // Настраиваем задержку для мок сервера
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get('serverDelay') || 500
            });

            // симуляция данных
            const MOCK_DATA_PATH = './localService/';
            oMockServer.simulate(`${MOCK_DATA_PATH}/metadata.xml`, `${MOCK_DATA_PATH}/mockdata`);

            // запуск
            oMockServer.start();
        }
    };

});