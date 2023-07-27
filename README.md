[![Lint](https://github.com/Julia-Tisa/test-task-six/workflows/lint/badge.svg)](https://github.com/Julia-Tisa/test-task-six/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/60be8bcaaa72c7608261/maintainability)](https://codeclimate.com/github/Julia-Tisa/test-task-six/maintainability)

# Test Junior Front Developer / Тестовое задание

Разработано SPA приложение на основе готового boilerplate, выводящее список аукционов на основе данных из API.

## Требования 

- Использовать прилагаемый макет (не требуется строгое соответствие);
- Оформить подписку на обновление данных (polling);
- При первой загрузке данных отображать лоадер, при их обновлении - нет;
- Таймер на экране должен отсчитывать секунды до окончания каждого аукциона;
- Рендер должен быть оптимизирован обновлять элемент списка только при смене ставки;
- Использовать redux;
- Результат задания оформлен в виде MergeRequest в GitHub;
- Pipeline линтера на GitHub должен быть пройден;
- Добавить в проект Reactrouter и реализовать просмотр каждого аукциона в свое роуте;
- Фильтрация аукционов по названию автомобиля;

## Дополнительно

- Любая дополнительная инициатива, которая продемонстрирует ваши знания.

## Установка

`npm install`

## Запуск

`npm dev`

## Запуск отдельно api и web-server

`npm dev:api` запуск локального сервера на localhost:3000

`npm dev:web` запуск dev сервера webpack на localhost:8080

## API

GET: `/api/filterAuctions?search=''` возвращает список аукционов, отфильтрованных по get-параметру `search`

GET: `/api/auction/:auctionId` возвращает информацию об отдельном аукционе, дополненную пробегом авто

## Настройка

Конфигурация приложени задается переменными в файле ./client/builder/env/dev.json

Внутри приложения переменные доступны через `process.env.CONFIG`

`IMAGES_BASEPATH` путь к локальному серверу с изображениями

`API_BASEPATH` путь к api endpoints

`POLLING_INTERVAL` интервал по умолчанию для запросов (20сек)

## UI kit

В проекте подключен и преднастроен [material-ui](https://mui.com/), будет большим плюсом, если он будет использован

## Как выглядит приложение

Список аукционов

![auctions_sample](./samples/auctions_fact.png)

 Страница отдельного аукциона:

![details_sample](./samples/details_fact.png)

Изображения с примерами верстки находятся в папке samples
