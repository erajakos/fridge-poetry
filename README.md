# Fridge Poetry

This is a microservice-based fridge poetry project. Inspired by https://github.com/Krristiina/magnetic-fields

Dockerizing create react app is based on this article:
http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/

## Ecosystem

frontend: ReactJS client

backend: Node / Koa server

TODO: production builds

## How to run locally

1. Set environment variables

cp .env.dist .env

2. Launch in docker

docker-compose build && docker-compose up

3. Create the database

docker-compose exec backend npm run db:migrate

4. Seed the database with default set of words

docker-compose exec backend npm run db:seed:all





