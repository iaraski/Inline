## Как запустить локально

Склонируй репозиторий:

```sh
git clone https://github.com/iaraski/Inline.git
```

Перейди в папку проекта:

```sh
cd Inline
```

## Установи зависимости:

```sh
yarn install
```

## Запусти сервер разработки:

```sh
yarn dev
```

Приложение будет доступно по адресу: http://localhost:5173

## Для сборки проекта в продакшен:

```sh
yarn build
```

Собранные файлы появятся в папке docs/.

## Деплой на GitHub Pages

Проект опубликован через GitHub Pages напрямую из ветки main:

Перейди в настройки репозитория (Settings → Pages). В разделе Source выбери: Branch: main Folder: /
(docs) Нажми Save. Сайт доступен по ссылке: https://iaraski.github.io/Inline

## В файле vite.config.ts должно быть

base: './',

## Для того чтобы работал роутинг необходимо чтобы в router/index.ts было установлено следующее

history: createWebHistory('/Inline/'),
