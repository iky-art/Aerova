# Aevora

Aevora is an open-source weather, date, and time Progressive Web App (PWA) designed around simplicity, transparency, and real-world data.

It combines local time, date, location, and weather information into a focused interface that works across mobile and desktop devices.

## Features

- Real-time local clock
- Current date and calendar information
- Location-based weather
- Temperature and feels-like temperature
- Humidity and wind information
- Sunrise and sunset
- Day/night detection
- Automatic weather refresh
- Manual weather refresh
- Automatic location detection
- Dark and light mode
- Custom accent colors
- Responsive mobile-first interface
- Progressive Web App support
- Offline application shell
- No hidden API key
- No proprietary Aevora weather backend

## Data & Transparency

Aevora does not claim to provide 100% real-time weather data.

Weather information is retrieved from external public services. Weather models and external services can have different update schedules, so refreshing the application does not necessarily mean that the underlying weather data has changed.

Aevora does not own or generate the weather data. The application processes and displays information provided by the services it uses.

The local clock and date are generated directly by the user's device and browser.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- vite-plugin-pwa
- Lucide React
- Open-Meteo API
- Browser Geolocation API
- JavaScript Intl API

## Project Structure

```text
src/
├── components/
│   ├── ui/
│   ├── Calendar.tsx
│   ├── Clock.tsx
│   ├── CreatorNote.tsx
│   ├── FeedbackCard.tsx
│   ├── Header.tsx
│   ├── LocationCard.tsx
│   ├── OwnerNotice.tsx
│   ├── WeatherCard.tsx
│   └── WeatherDetails.tsx
│
├── features/
│   ├── calendar/
│   ├── clock/
│   ├── location/
│   └── weather/
│
├── hooks/
│   ├── useClock.ts
│   ├── useGeolocation.ts
│   └── useWeather.ts
│
├── services/
│   └── openMeteo.ts
│
├── types/
│
├── utils/
│
├── styles/
│
├── App.tsx
└── main.tsx
