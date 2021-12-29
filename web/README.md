# Imesh Web [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[icyxp/imesh/web](https://github.com/icyxp/imesh/tree/main/web) web front-end application  

This fork of Netflix's [vizceral-example](https://github.com/Netflix/vizceral-example) contains these new features:
* Replaying
* Connection Chart
* Node Coloring
* Class Filtering
* Notice Filtering

...

# Install
This application is one of promviz's components.  
To install, please refer to [icyxp/imesh/web#install](https://github.com/icyxp/imesh/tree/main/web#install).  

# Install & Run Independently
```
npm install
npm run dev
```
or, you can use Docker to run:
```
docker build -t <name>/imesh-web .
docker run -p 8080:8080 -d <name>/imesh-web
```
then, you can view the top page at http://localhost:8080/

### Public Docker Repository
[icyboy/imesh-web](https://quay.io/icyboy/imesh-web/)

# Configuration
There are 2 ways to configure this application:  
1. edit .env file
1. set environment variables

You can customize this application's behavior with these variables:  
```
IMESH_API: endpoint of imesh api server  
INTERVAL: interval between fetches (ms)  
MAX_REPLAY_OFFSET: limit of replaying offset (s)  
```

# Contributing
Welcome PRs!
