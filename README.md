# Arival Bank Small Test Task
This project is small task that is required before technical interview at Arival Bank.

## Clone git repository
To clone git repository, run this command.

```
$ git clone https://github.com/HEROEngineer/Arival-Bank-test.git
$ cd Arival-Bank-test
```

## 1: Running NodeJS Docker

To run [Node.js](http://nodejs.org/) docker image, use following command. Make sure you have installed [Docker](https://docs.docker.com/engine/install/ubuntu/).

```
$ docker build .
```

After running this command, docker image for this nodejs application is generated, but there is no name. If you want to set docker image name and tag, use -t flag.

```
$ docker build -t <docker-image-name>:<tag>
```

For example 

```
$ docker build -t myapp-node-app:latest
```

After running this command, first you find nodejs docker image and run this image.

```
$ docker images
$ docker run -d <nodejs-docker-image-id>
```

And you can access nodejs application by using this url: http://localhost:5001

## 2: Running Loki, Promtail, Grafana and Nodejs application with docker-compose

Make sure you have installed [docker-compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04).

First, you need to create volume for data storage.
```
$ mkdir -p ./volumes/loki
$ sudo chown 10001:10001 ./volumes/loki

$ mkdir -p ./volumes/grafana
$ sudo chown 472:472 ./volumes/grafana
```

After that, you can run Loki, Promtail, Grafana and nodejs application by using this command.

```
$ docker-compose up -d
```

After a few seconds, all containers will be up and running, and the grafana web interface will be available at http://localhost:3000 with default credentials.

- Username: admin
- Password: admin

To check that data is flowing correctly:

1: Click on the "Explorer" button on the left.
2: Set Label filters (in that case, job = nodejs).
3: And click on the "Run query" button and you can see the result.

## 3: Write simple script that will print numbers from 0 to 100 and convert every tenth to a wordy version

In that case, I use [Python3](https://www.python.org/) Programming language. Make sure that you have installed [Python3](https://www.python.org/). To view result, run following commands.

```
$ cd Test-3
$ python3 test.py
```