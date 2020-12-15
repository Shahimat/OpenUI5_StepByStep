# Walkthrough - Step 2: Bootstrap

v1.84.1 https://openui5nightly.hana.ondemand.com/1.84.1/

## Установка

Используем **UI5 tooling** https://sap.github.io/ui5-tooling/pages/GettingStarted/

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` проверяем установку

## Настройка

Для прохождения данного шага ui5 пока не потребуется. Можно запустить напрямую открыв файл или запустив простой статический сервер, например: `npm install -g serve` и после `serve ./webapp`.

## Объяснение

Чтобы работать с OpenUI5, необходимо объявить его в `index.html`.

Опции загрузки:

> `src` - путь до OpenUI5 (URL/URI)

> `data-sap-ui-theme` - тема приложения

> `data-sap-ui-libs` - библиотека (внутри OpenUI5) для пользовательской настройки интерфейса

> `data-sap-ui-compatVersion` - версия совместимости с самым свежим функционалом. По дефолту не меняем.

> `data-sap-ui-async` - ассинхронная загрузка ресурсов.

> `data-sap-ui-resourceroots` - пространство имен (связка имя-путь).

## Лицензия

Лицензия MIT (см. файл `LICENSE`)