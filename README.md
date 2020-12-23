# [OpenUI5 v1.84.1](https://openui5nightly.hana.ondemand.com/1.84.1/) my OData V2 demo-project. Step 6: Sort

## Установка UI5 tooling

Используем [**UI5 tooling**](https://sap.github.io/ui5-tooling/pages/GettingStarted/)

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` - проверяем установку

`npm i -g serve` - для статики, полученной после build-а

## Настройка

`npm install` - установка зависимостей.

`npm run start` - Для запуска сервера. В локальном хосте найти файл `./webapp/index.html` для обычного приложения или `./webapp/test/mockServer.html` если нужны мок данные.

`npm run build` - для запуска процесса сборки приложения. `serve ./dist` - поднимает собранное приложение. `http://localhost:5000/test/mockServer` - если нужны мок данные.

`npm run proxy` - если в проекте будут использоваться данные с удаленного OData сервиса.

## Описание

На данном шаге мы добавляем функционал сортировки.

## Лицензия

Лицензия MIT (см. файл `LICENSE`)