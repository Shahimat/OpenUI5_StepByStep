# Walkthrough - Step 16: Dialogs and Fragments

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

Теперь перейдем к рассмотрению фрагментов и диалоговых окон.

Фрагменты отличаются от View отсутствием контроллера, что весьма удобно использовать при создании диалоговых окон. Так как сами диалоговые окна программируются во вне представления View (диалоги создаются поверх приложения), то описание их создания приходится описывать программно, в связи с чем фрагменты помогают сохранению декларативного подхода.

## Лицензия

Лицензия MIT (см. файл `LICENSE`)