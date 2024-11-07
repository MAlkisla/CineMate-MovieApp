<p align="center"><a href="https://cinemate-mericalkisla.netlify.app"><img src="public/darklogo.png" height="200"></a></p>

# Cinemate 🎬

![GitHub last commit](https://img.shields.io/github/last-commit/MAlkisla/CineMate-MovieApp) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MAlkisla/CineMate-MovieApp/main)
![Languages](https://img.shields.io/badge/languages-React-blue.svg)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/MAlkisla/CineMate-MovieApp)

## Demo

You can view the live version of this application here: [Cinemate Live Demo](https://cinemate-mericalkisla.netlify.app/)

## Why this repository?

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/70147993?v=4">
</p>

Cinemate is a React application that allows users to explore movies, view actor details, create favorite lists, and manage their movie watchlist using The Movie Database (TMDb) API. The application includes features like search functionality, pagination, theming, and user authentication, all integrated with Redux and Material-UI.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Search and Filter**: Browse movies by genre, category (e.g., popular, top-rated), or keyword search.
- **Movie Details**: View movie information including cast, runtime, and rating.
- **Actor Profiles**: Access actor profiles and see the movies they've appeared in.
- **User Authentication**: Login using TMDb API for a personalized experience, including favorites and watchlist management.
- **Responsive Design**: Optimized for mobile and desktop screens.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Pagination**: Load more movies with pagination for a smoother browsing experience.

## Technologies

- **React** with Hooks
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **Material-UI** for UI components and theming
- **TMDb API** for movie data
- **Axios** for HTTP requests

## Setup & Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MAlkisla/CineMate-MovieApp.git
    cd cinemate
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
    or if you're using yarn:
    ```bash
    yarn install
    ```

3. **Set up Environment Variables**:

   Create a `.env` file in the root directory and add your TMDb API key:
    ```env
    REACT_APP_TMDB_KEY=your_tmdb_api_key
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```
    or if using yarn:
    ```bash
    yarn start
    ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Browse Movies**: By default, the home page shows a list of popular movies. Use the categories and genre filter in the sidebar to explore more.
2. **Search**: Use the search bar to find movies by title.
3. **Movie Details**: Click on any movie to see detailed information, cast, and recommendations.
4. **Actor Profiles**: From the movie details page, click on an actor's name to view their profile.
5. **Favorites & Watchlist**: After logging in, you can add movies to your favorites or watchlist.
6. **User Profile**: Access your profile to view your favorite movies and watchlist.
7. **Light/Dark Mode**: Toggle between light and dark themes using the sun/moon icon in the navbar.

## Project Structure

The project is organized into main folders like components, features, services, and styles. Below is an overview of the project structure and the role of each file:


    .
    ├── build                        # Compiled production build files
    ├── public
    │   └── index.html                   # HTML template for React App
    ├── src                          # Main source code for the application 
    │   ├── app                          # Redux store configration
    │   ├── assets                       # Images and other static assets
    │   ├── components                   # Reusable and independent React components
    │   │   ├── Actors                     # Component to display actor details 
    │   │   ├── MovieInformation           # Component for displaying movie details 
    │   │   ├── Movies                     # Main component to list movies 
    │   │   ├── NavBar                     # Navigation bar component with search and login 
    │   │   ├── Sidebar                    # Sidebar with genre and category filters 
    │   │   ├── Profile                    # User profile component to display favorites and watchlist 
    │   │   ├── Search                     # Search input component 
    │   │   └── Pagination                 # Component to handle pagination functionality
    │   ├── features                     # Redux slices for state management
    │   │   ├── auth.js                    # Manages user authentication state 
    │   │   └── currentGenreOrCategory.js  # Manages genre or category selection state 
    │   ├── services                     # API services (TMDb)
    │   │   └── TMDB.js                    # TMDb API setup and endpoints configuration 
    │   ├── utils                        # Utility functions and color mode toggle
    │   │   ├── ToggleColorMode.jsx        # Dark/Light mode toggle context provider 
    │   │   └── index.js                   # Utility functions for API token management 
    │   ├── index.js                     # Entry point for rendering App
    │   └── index.css                    # Global CSS style
    ├── .env                         # Environment variables
    ├── .gitignore                   # Files and directories ignored by Git
    ├── README.md                    # Project documentation 
    └── package.json                 # Dependencies and scripts for the project


If found helpful please press a ⭐.

## Author
***Meriç Alkışla***

[Mail ID](mailto:mericalkisla@gmail.com?subject=[GitHub]) | [LinkedIn](https://www.linkedin.com/in/meric-alkisla/) | [GitHub](https://github.com/MAlkisla) | [HackerRank](https://www.hackerrank.com/mericalkisla)

**"Any suggestions would be appreciated"**
