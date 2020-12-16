# Walkthrough - Step 10: Descriptor for Applications

v1.84.1 https://openui5nightly.hana.ondemand.com/1.84.1/

## Установка

Используем **UI5 tooling** https://sap.github.io/ui5-tooling/pages/GettingStarted/

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` проверяем установку

## Настройка

Для прохождения данного шага ui5 пока не потребуется. Можно запустить напрямую открыв файл или запустив простой статический сервер, например: `npm install -g serve` и после `serve ./webapp`.

## Объяснение

Вместо ручного добавления в Component.js настроичных параметров/данных используется **manifest.json** файл декларативной нотации. Для его использования в Component.js указывается соответствующая ссылка.

Обязательным полем является ID в sap.app - оно определяет пространство имен приложения.

rootView - корневой View (запускается первым).

в разделе models описываются добавляемые модели и их типы (например JSONmodel или та же ResourceModel).

## Лицензия

Лицензия MIT (см. файл `LICENSE`)