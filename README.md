# Binance API

## Technologies

- Node.js
- Postgres
- Typescript
- Express
- Prettier + Eslint

## Setup

### Start the database

```bash
$ docker compose up
```

### Run the cron-job

```bash
$ npm run cron
```

### Start the dev server

```bash
$ npm run dev
```

## Endpoints

### POST /pairs 

Used to save a new pair symbol.

### GET /pairs 

Used to get and array of existing pairs previously created.

### GET /average?symbol=BTCUSDT&lectures=N 

Returns the average of the last "N" lectures.

## Automated service 

Executed by cron-job every 1 hour.

Gets the current price for each pair of currencies existing on `/pairs` data source and saves the historical information.
