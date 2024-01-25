# MunchMap: Food Donation Management System

## Overview

This project is a Food Donation Management System designed to facilitate the process of managing food donations from restaurants to shelters. It consists of two main components: a Landing Page for restaurants to submit donation tickets and an Admin View for administrators to manage and view submitted tickets.

## Features

- **Landing Page for Restaurants:**

  - Restaurants can submit tickets with details about food donations, including the type of food, expiration date, and other relevant information.
  - The page utilizes React hooks such as `useState` and `useEffect` for state management and side effects.
  - Axios is used for making API requests to a backend server.
  - The form includes validation and handles the submission of tickets.
  - A sign-out feature that redirects to the home page.

- **Admin View:**
  - Allows administrators to view a list of all submitted tickets from restaurants and shelters.
  - Displays details like ticket number, name, location, contact info, donation type, expiration date, and inspection status.
  - The data is presented in a card layout for easy readability.

## Technology Stack

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Axios: A promise-based HTTP client for making HTTP requests.
  - React Router DOM: For managing navigation in React applications.
  - CSS: For styling the application.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies:
4. Start the application:
