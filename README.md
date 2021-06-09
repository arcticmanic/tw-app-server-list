# Тестовое задание

Требуется создать приложение (SPA/SSR) для редактирования списка
серверов клиентов. Список серверов клиентов представлен коллекцией
моделей вида:

```json
[
  {
    "customer_id": "user1",
    "server_name": "server7",
    "server_type": "vds"
  },
  {
    "customer_id": "user5",
    "server_name": "server2",
    "server_type": "dedicated"
  },
  {
    "customer_id": "user3",
    "server_name": "server4",
    "server_type": "hosting"
  }
]
```

## Приложение должно реализовать:
* вывод списка моделей;
* выбор модели для редактирования;
* редактирование свойств модели:
  * имя сервера `(server_name), input`;
  * тип сервера `(server_type), select`;

## Требования к приложению:
* Для реализации использовать `React.js` или нативный `js`;
* Выполнить базовую верстку страницы. Интерфейс приложения состоит из списка слева и формы редактирования справа.
* Продемонстрировать владение `ES6+`, `SCSS`/`LESS`/`Stylus`;
* Если ранее использовали `Typescript`, то покажите это в тестовом задании (не обязательно);
* Можно использовать любой `UI` фреймворк, например, `Bootstrap` или `Tailwind` (не обязательно).

## Результат:
* В качестве результата ждём ссылку на публичный `git`-репозиторий с заполненным `Readme.md`;
* Будет круто (но не обязательно), если вы разместите свой проект на бесплатном ресурсе, например, на `Github Pages`.