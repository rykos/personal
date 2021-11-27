#!/bin/bash
docker build -t rykos:cv .
docker run -v /SSL:/var/imported/ssl -it rykos:cv