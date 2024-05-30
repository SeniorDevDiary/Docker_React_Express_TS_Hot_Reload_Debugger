# https://www.youtube.com/@SeniorDevDiary

# create server

```
mkdir server
cd server

npm init -y
npm i express
npm i -D @types/express ts-node-dev typescript
tsc --init  or tsc init
```

# create client

npx create-react-app client --template typescript

# docker

build:
docker build -t client_v1 .
docker build -t server_v1 .

run:
docker run -p 3000:3000 client_v1
docker run -p 5000:5000 server_v1
docker run -p 5555:5555 server_v1

stop:
docker ps
=> docker stop 'CONTAINER ID'

run all:
docker-compose up --build
docker-compose up -d
