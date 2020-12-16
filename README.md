# Walkthrough - Step 11: Pages and Panels

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

Добавляем страницу **Page**, которая агрегирует контролы внутри себя. Для агрегации используется `<content>`. 

Обратите внимание, что в XML нотации (и не только) то, что является контролом, начинается с большой буквы (например `<Page>`), а то, что является свойством или агрегацией контрола начинается с маленькой (например `<content>`).

## Лицензия

Лицензия MIT (см. файл `LICENSE`)