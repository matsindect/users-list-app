# User List App

## Overview

The User List App is a responsive application that fetches user data from the [Reqres API](https://reqres.in/) and displays it in a scrollable view. The app features a custom loading component, lazy loading of users, and a user-friendly interface that works well on various mobile screens.

## Features

- **Custom Loading Component**: A visually appealing loading component is displayed for 3 seconds while user data is being fetched.
- **User Data Fetching**: The app retrieves user data from the Reqres API and displays it in a list format.
- **Lazy Loading**: As the user scrolls to the bottom of the list, more users are automatically loaded. If there are no more users to load, a message is displayed.
- **Responsive Design**: The app is designed to be responsive and looks great on various devices, especially mobile screens.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-list-app.git
   cd user-list-app

2. Install the dependencies:
    ```bash
    npm install

3. Install the dependencies:
    ```bash
    npm start

## Technologies Used

- **Frontend**: React
- **State Management**: React Redux Toolkit
- **CSS Framework**: Material UI
- **API**: Reqres API

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Reqres API for providing user data for demonstration purposes.