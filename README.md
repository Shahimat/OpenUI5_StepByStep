# [OpenUI5 v1.84.1](https://openui5nightly.hana.ondemand.com/1.84.1/) Load custom library

## Установка UI5 tooling

Используем [**UI5 tooling**](https://sap.github.io/ui5-tooling/pages/GettingStarted/)

`npm install --global @ui5/cli`

`npm install --save-dev @ui5/cli`

`ui5 --version` - проверяем установку

`npm i -g serve` - для статики, полученной после build-а

## Настройка

`npm install` - установка зависимостей.

`npm run start` - Для запуска сервера. В локальном хосте найти файл `./webapp/index.html` для обычного приложения или `./webapp/test/index.html` если нужны мок данные.

`npm run build` - для запуска процесса сборки приложения. `serve ./dist` - поднимает собранное приложение. `http://localhost:5000/test/index` - если нужны мок данные.

`npm run proxy` - если в проекте будут использоваться данные с удаленного OData сервиса.

## Описание

**Внимание!** Все что касается непосредственно разработки конечной библиотеки смотреть в ветке `openui5_npm_lib`.

Допустим готовая UI5 библиотека уже лежит в гит по адресу: `git://github.com/Shahimat/OpenUI5_StepByStep#openui5_npm_lib`. Как ее подключить?

UI5 tooling использует под капотом библиотеку [napa](https://www.npmjs.com/package/napa) для подгрузки кастомных библиотек. В этом примере обходится стороной необходимость установки самой библиотеки **napa** (на практике вскрылись косяки загрузки npm модулей с использованием этой библиотеки). Но кое-что все таки прийдется продублировать, а имеено.

В `package.json`:

```JSON
{
  ...
  "napa": { // Без этой записи ui5 serve не увидит библиотеку
    "ui5lib": "git://github.com/Shahimat/OpenUI5_StepByStep.git#ui5lib_v0.1"
  },
  ...
  "dependencies": {
    "ui5lib": "git://github.com/Shahimat/OpenUI5_StepByStep.git#ui5lib_v0.1" // #ui5lib_v0.1 - ссыль на тэг
  },
  ...
}
```

Удаляем `node_modules`. Запускаем `npm i`.

В файле `ui5.yaml` остается настроить [extension](https://sap.github.io/ui5-tooling/pages/Configuration/#extension-configuration) для загрузки [проектной шины](https://sap.github.io/ui5-tooling/pages/extensibility/ProjectShims/) - конфигурации, отвечающей за связность ссылок и соответствия им пространства имен.

В `ui5.yaml`:

```YAML
--- # отделяет extension от описания проекта
specVersion: "2.2"
kind: extension
type: project-shim
metadata:
  name: legacy-lib-shims # тут видимо все равно что писать - ни на что не влияет
shims:
  configurations:
    ui5lib: # имя соответствует названию npm модуля
      specVersion: "2.2"
      type: library
      metadata:
        name: ui5lib # лучше оставить как выше
```

В основном проекте теперь можно использовать ссылку на либу через namespace `ui5lib`, например так:

```XML
<mvc:View
	...
	xmlns:wt="ui5lib.lib">
```

При запуске `ui5 serve` можно обратить внимание, что модуль `ui5lib` сёрвится в папку ресурсов `/resource/ui5lib`.

## Лицензия

Лицензия MIT (см. файл `LICENSE`)