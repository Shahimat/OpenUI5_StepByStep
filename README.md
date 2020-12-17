# Walkthrough - Step 27: Mock Server Configuration

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

На предыдущем шаге мы развернули поддержку реального сервера, но для отработки приложения лучше создать локальный **мок сервер** (**Mock server**).

Теперь мы имеем 2 точки входа в приложение: `index.html` - главная точка входа, по сути - основное приложение и `mockServer.html` - для тестирования и отладки приложения (в данном случе - имитация поступающих данных с сервера). Данные расположены в **localService**, причем там же расположена и схема данных **metadata.xml**.

Теперь после поднятия сервера через `npm run start` достаточно перейти на страницу с тестовым html `http://localhost:8080/test/mockServer.html`.

## Лицензия

Лицензия MIT (см. файл `LICENSE`)