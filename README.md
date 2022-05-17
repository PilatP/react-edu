# Шаблон SPA приложения Happy Numbers

Используем React & Typescript.
Запуск и сборка с помощью [Vite](https://vitejs.dev/).

Особенности:
- Использование [styled-components](https://styled-components.com/)
- Запуск автоформаттера кода в пре-коммит хуке.
- Запуск линтеров (код, стили, типизация, тесты) в пре-пуш хуке.

## Рекомендуемые настройки для Github репозитория

- Отключить `Allow merge commits`
- Включить `Allow squash merging`
- Отключить `Allow rebase merging`
- Включить `Automatically delete head branches`

Добавить правила для ветки `master`:
- `Require status checks to pass before merging`
- `Require branches to be up to date before merging`
- `Require conversation resolution before merging`
- `Require linear history`

## Dockerfile

Для локальной проверки создания докер-образа для разворачивания на стейджах и проде используются команды ниже:

Создание контейнера
```bash
docker build -t hn-vite-example .
```

Запуск контейнера
```bash
docker run --name hn-vite-example -it --rm -p 8080:80 hn-vite-example
```

Создан с использованием шаблонного образа для SPA в Uchi.ru: https://github.com/uchiru/spa-base.
