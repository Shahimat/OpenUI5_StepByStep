# Walkthrough - Step 26: Remote OData Service

v1.84.1 https://openui5nightly.hana.ondemand.com/1.84.1/

## Установка

Используем **UI5 tooling** https://sap.github.io/ui5-tooling/pages/GettingStarted/

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` проверяем установку

## Настройка

`ui5 use openui5@1.84.1`

`ui5 add sap.ui.core sap.m sap.ui.table themelib_sap_fiori_3`

Добавить в **package.json**:

```JSON
"scripts": {
    "start": "ui5 serve",
    "build": "ui5 build --all"
},
```

Для запуска сервера выполнить `npm run start`

Для запуска процесса сборки приложения выполнить `npm run build`. Собранное приложение будет лежать в папке `dist` и для дальнейшего его запуска достаточно выполнить команду `serve ./dist`. Если **serve** не установлен, то: `npm i -g serve`.

## Объяснение

На данном шаге мы добавили поддержку удаленного сервиса OData. Обратите внимание, что перейдя по ссылке https://services.odata.org/V2/Northwind/Northwind.svc/ можно увидеть внутреннее содержимое сервиса. В дальнейшем тема OData сервиса будет раскрыта.

Информацию по OData сервисам можно найти на оффициальном сайте https://www.odata.org/documentation/. Актуальная версия OData - 4 (хотя стабильной считается версия 2).

Ради примера, чтобы увидеть внутреннюю структуру данных (агрегации, ассоциации и тому подобное) можно перейти по ссылке с указанием поля `$metadata`, например так: https://services.odata.org/V2/Northwind/Northwind.svc/$metadata

Можно обратить внимание, что в консоли возникла ошибка CORS. Для решения этой ошибки добавим proxy.

`npm i --save-dev cors-anywhere`

в package.json файле:

```JSON
"scripts": {
    ......,
    "proxy": "node proxy.js"
},
```

И соответственно сам файл proxy.js. Теперь перед запуском приложения выполнить `npm run proxy` (поднимаем сервис перенаправления вызовов).

## Лицензия

Лицензия MIT (см. файл `LICENSE`)