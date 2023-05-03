# google-map-geolocation

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Using the App

You must enter a json data like this in the input field under the heading Data Entry Form

Clicking the button without entering data will create a default route

{
  "origin": {
    "lat": 41.01,
    "lng": 29.21
  },
  "destination": {
    "lat": 41.03,
    "lng": 29.23
  },
  "passengers": [
    { "name": "Dummy", "pickUpPoint": { "lat": 41.015, "lng": 29.215 } },
    { "name": "Jack", "pickUpPoint": { "lat": 41.015, "lng": 29.22 } },
    { "name": "Hans", "pickUpPoint": { "lat": 41.013, "lng": 29.223 } },
    { "name": "Tommy", "pickUpPoint": { "lat": 41.01, "lng": 29.218 } }
  ]
}

