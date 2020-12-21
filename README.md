# Проект-демонстрация подхода построения документации по OpenUI5 в GIT формате

## Проблематика

Часто в документации:
1. не хватает связности одной стадии (шага) от другой (другого шага);
2. отсутствует личная уверенность в работоспособности предлагаемого решения;
3. отсутствует самодостаточность при соблюдении описанных условий;
4. вода.

## Решение

Воспользуемся возможностями GIT - коммиты, ветвление, тэги.

P.S. Ззнать обязательно! например - https://git-scm.com/book/ru/v2

## Условные определения

**Документ** - совокупность предложений, инстукций, ссылок (в общем - идей), доносящую главную (генеральную) идею. Документ может быть разбит на отдельные крупные сущности (аналогичные совокуности) - это **решения** (проще - этап документа, микростатья, параграф).

**Коммит** - этап решения.

**Ветка** - взаимосвязанная последовательность решений (например guideline).

**Тэг** - указатель на конечный этап решения.

## OpenUI5 документ

OpenUI5 v1.84.1 https://openui5nightly.hana.ondemand.com/1.84.1/

Ветки:

>`master` - описание документации;

>`openui5_base` - базовая сборка проекта;

>`openui5_walkthrough` - https://openui5nightly.hana.ondemand.com/1.84.1/#/topic/3da5f4be63264db99f2e5b04c5e853db

>`openui5_odatav4` - https://openui5.hana.ondemand.com/1.84.1/#/topic/bcdbde6911bd4fc68fd435cf8e306ed0

## Entry points

### Base project

```bash
git clone --depth 1 --branch openui5_prj_full https://github.com/Shahimat/OpenUI5_StepByStep      # Full version
```

### Walkthrough

```bash
git checkout walkthrough_step_1      # Step 1:   Hello World!
git checkout walkthrough_step_2      # Step 2:   Bootstrap
git checkout walkthrough_step_3      # Step 3:   Controls
git checkout walkthrough_step_4      # Step 4:   XML Views
git checkout walkthrough_step_5      # Step 5:   Controllers
git checkout walkthrough_step_6      # Step 6:   Modules
git checkout walkthrough_step_7      # Step 7:   JSON Model
git checkout walkthrough_step_8      # Step 8:   Translatable Texts
git checkout walkthrough_step_9      # Step 9:   Component Configuration
git checkout walkthrough_step_10     # Step 10:  Descriptor for Applications
git checkout walkthrough_step_10_1   # Step 10*: Best practices (структура папок проекта)
git checkout walkthrough_step_11     # Step 11:  Pages and Panels
git checkout walkthrough_step_12     # Step 12:  Shell Control as Container 
git checkout walkthrough_step_13     # Step 13:  Margins and Paddings
git checkout walkthrough_step_14     # Step 14:  Custom CSS and Theme Colors
git checkout walkthrough_step_15     # Step 15:  Nested Views
git checkout walkthrough_step_16     # Step 16:  Dialogs and Fragments
git checkout walkthrough_step_17     # Step 17:  Fragment Callbacks
git checkout walkthrough_step_18     # Step 18:  Icons
git checkout walkthrough_step_19     # Step 19:  Reuse Dialogs
git checkout walkthrough_step_20     # Step 20:  Aggregation Binding
git checkout walkthrough_step_21     # Step 21:  Data Types
git checkout walkthrough_step_22     # Step 22:  Expression Binding
git checkout walkthrough_step_23     # Step 23:  Custom Formatters
git checkout walkthrough_step_24     # Step 24:  Filtering
git checkout walkthrough_step_25     # Step 25:  Sorting and Grouping
git checkout walkthrough_step_26     # Step 26:  Remote OData Service
git checkout walkthrough_step_27     # Step 27:  Mock Server Configuration
git checkout walkthrough_step_28     # Step 28:  Unit Test with QUnit
git checkout walkthrough_step_29     # Step 29:  Integration Test with OPA
git checkout walkthrough_step_30     # Step 30:  Debugging Tools
git checkout walkthrough_step_31     # Step 31:  Routing and Navigation
git checkout walkthrough_step_32     # Step 32:  Routing with Parameters
git checkout walkthrough_step_33     # Step 33:  Routing Back and History
git checkout walkthrough_step_34     # Step 34:  Custom Controls
git checkout walkthrough_step_35     # Step 35:  Responsiveness
git checkout walkthrough_step_36     # Step 36:  Device Adaptation
git checkout walkthrough_step_37     # Step 37:  Content Density
git checkout walkthrough_step_38     # Step 38:  Accessibility
```

### Odata V4

```bash
git checkout odatav4_step_1   # Step 1: The Initial App
git checkout odatav4_step_2   # Step 2: Data Access and Client-Server Communication
git checkout odatav4_step_3   # Step 3: Automatic Data Type Detection
git checkout odatav4_step_4   # Step 4: Filtering, Sorting, and Counting
git checkout odatav4_step_5   # Step 5: Batch Groups
git checkout odatav4_step_6   # Step 6: Create and Edit
git checkout odatav4_step_7   # Step 7: Delete
git checkout odatav4_step_8   # Step 8: OData Operations
```

## Лицензия

Лицензия MIT (см. файл `LICENSE`)