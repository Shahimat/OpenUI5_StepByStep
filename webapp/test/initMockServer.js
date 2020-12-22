sap.ui.define([
	'webapp/test/localService/mockserver'
], function (mockserver) {
	'use strict';

	// Инициализация мок сервера
	mockserver.init();

	// инициализировать встроенный компонент на HTML-странице
	sap.ui.require(['sap/ui/core/ComponentSupport']);
});