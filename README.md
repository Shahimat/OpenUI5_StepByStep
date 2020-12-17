# Walkthrough - Step 31: Routing and Navigation

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

Добавлен роутинг (**routing**).

Для редактирования роутов используется manifest.json & id каждой view. Здесь нужно быть крайне аккуратным и следить за корректностью ввода данных.

**config** - влияет на все роуты, задает главные свойства (например - общий путь).

**routes** - определяет шаблон URL записи и соответствие ему целевых view (например URL `https://localhost:8080/index.html#detail` соответствует таргету (цели) с именем `detail`). Поле name для routes вроде как не особо нужно.

**targets** - определяет параметры целевого view, к которому обращается роут (в частности - имя, путь до view, ...).

ВАЖНО - можно задавать комбинированные роуты, например так:

```JSON
"routes": [
    {
        "pattern": "",
        "name":    "startPages",
        "target":  ["defaultMaster", "defaultDetail"]
    }
],
"targets": {
    "defaultMaster": {
        "viewId":   "master",
        "viewName": "Master",
        "viewPath": "mainpath.view", 
        "controlAggregation": "masterPages"
    },
    "defaultDetail": {
        "viewId":   "detail",
        "viewName": "Detail",
        "viewPath": "mainpath.view", 
        "controlAggregation": "detailPages"
    }
}
```

Такая запись особенно востребована для страниц с множественной загрузкой View наподобие master-detail страницы (см. SplitApp).

## Лицензия

Лицензия MIT (см. файл `LICENSE`)