# test-to-do-list
Тестовое ООО НИП Александрина

## Запуск

Для запуска приложения необходим Docker

Пример .env файла в корне дирректории проекта

```
PORT=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_PORT=
```

Команда запуска dev-режим

```
docker compose -f docker-compose.dev.yml up --build
```
Команда запуска prod-режим

```
docker compose -f docker-compose.yml up --build
```
