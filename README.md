# Azure Computer Vision API with JS Client SDK

Simple usage of Computer Vision API with Express JS

### Usage

1) Create a Computer Vision Resource on Azure, get the subscription key and end point.

2) Go to project directory and run the following command to install dependencies.

```
npm install
```

3) In *server.js* changed the following code with your subscription key and enpoint.

```JS
const key = '<your-subscription-key';
const endpoint = '<your-endpoint>';
```
    
4) run the application on localhost:3000

```
npm start
```

### Resources
[Computer Vision JS Client SDK](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts-sdk/client-library?tabs=visual-studio&pivots=programming-language-javascript)
