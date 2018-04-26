# Fridge Poetry

A microservice-based fridge poetry game. Inspired by https://github.com/Krristiina/magnetic-fields

## Ecosystem

Frontend: ReactJS<br>
Backend: Node / Koa

TODO: production builds

## How to run locally

1. Set environment variables

<pre>cp .env.dist .env</pre>

2. Launch in docker

<pre>docker-compose build && docker-compose up</pre>

3. Create the database

<pre>docker-compose exec backend npm run db:migrate</pre>

4. Seed the database with default set of words

<pre>docker-compose exec backend npm run db:seed:all</pre>

## Acknowledgements

Dockerizing create react app is based on this article:
http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/



