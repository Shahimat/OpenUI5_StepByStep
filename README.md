# Walkthrough - Step 7: JSON Model

v1.84.1 https://openui5nightly.hana.ondemand.com/1.84.1/

## Установка

Используем **UI5 tooling** https://sap.github.io/ui5-tooling/pages/GettingStarted/

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` проверяем установку

## Настройка

Для прохождения данного шага ui5 пока не потребуется. Можно запустить напрямую открыв файл или запустив простой статический сервер, например: `npm install -g serve` и после `serve ./webapp`.

## Объяснение

Функция `onInit` вызывается фреймворком при создании контроллера.

Внутри функции мы создали JSON модель и забиндили ее к view.

Для использования внутри view данных из модели, необходимо в желаемом параметре обернуть путь ко значению в модели в фигурные скобки, например так `{/recipient/name}`.

## Лицензия

Лицензия MIT (см. файл `LICENSE`)