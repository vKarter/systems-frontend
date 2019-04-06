[comment]: # (ACHTUNG! This is an autogenerated file and will be automatically overwritten)
[comment]: # (To edit its contents please refer to the project dir '.readme')

# Motion Bank Systems Frontend

> Combined frontend project for Motion Bank web services



## Setup

Clone repo, then run:

```shell
git submodule init
git submodule update
npm install
```

## Run

### Third-party webserver (recommended)

Point your webserver config to the ``dist/spa-mat``
directory. Configure your webserver to serve
``index.html`` with a 200 status code instead of a
404 error page.

### Standalone server

Execute ``npm start`` to start the built-in webserver.
Control server address through ``HOST`` and ``PORT``
env variables.

## Build

To remove any prior build artifacts run `npm run clean`.

```shell
npm run build
```

### Customise

In order to customize the build, use these env vars:

```shell
API_HOST=http://localhost:3030 STREAMER_HOST=http://localhost:1234 npm run dev  # (or npm run build)
```

For the available variables see `quasar.conf.js`.

## Development

Start a development server with automatic reload on
localhost at port 8080.

```shell
npm run dev
```

### Changelog

Development is tracked in
[CHANGELOG.md](https://gitlab.rlp.net/motionbank/systems-frontend/blob/master/CHANGELOG.md).

## Docker

The recommended way of deployment are our prebuilt
docker images.

[![](https://images.microbadger.com/badges/image/motionbank/systems-frontend.svg)](https://microbadger.com/images/motionbank/systems-frontend
"Get your own image badge on microbadger.com")

### Versions

* Stable: `motionbank/systems-frontend:release_1_3`
* Staging (beta): `motionbank/systems-frontend:staging`
* Experimental: `motionbank/systems-frontend:experimental`

### Configuration

The image is not configurable.
The application listens on port `3030`.


## License

:copyright: 2019 Mainz University of Applied Sciences (Motion Bank Project) – 
Released under the [MIT](https://github.com/motionbank-js/motionbank-systems-frontend/blob/master/LICENSE) license

