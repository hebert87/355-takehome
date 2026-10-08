# Job Application Tracker

A React job application tracker built for SDEV 355 Take-Home #1. The app displays job applications with their status, application date, source, notes, and a summary of application counts.

## Run the app

```bash
npm install
npm run dev

## Features

- Displays job applications using reusable React components
- Sorts applications by newest application date
- Displays status badges for each application
- Hides empty source and notes fields
- Calculates total applications and status counts from the application data
- Uses props to pass data between components

## Components

- `ApplicationList` — sorts and renders the application list
- `ApplicationCard` — displays information for one application
- `StatusBadge` — displays the application's status
- `SummaryStrip` — displays total and status counts

## Built With

- React
- Vite
- JavaScript
- CSS