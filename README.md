# Students' Information Portal

An online Single Page Application (SPA) designed for the University of Vavuniya's IT development committee to demonstrate efficient React programming methods and component architecture.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Credits](#credits)

---

## Project Overview

The **Students' Information Portal** is a React application that displays basic student records and detailed profiles. The application incorporates dynamic font size adjustment and showcases efficient use of React components.

This project is part of a selection process for talented IT students by the IT development committee.

## Features

- **Dynamic Font Size Adjustment**:
  - Choose between three font sizes: Small (16px), Medium (20px), and Large (24px).
- **Student Records Table**:
  - Displays basic details such as First Name, Last Name, Course, and Country.
  - Includes a "View Profile" button for each record.
- **Profile Viewer**:
  - Displays complete student details, including their profile picture, on selection.
  - Automatically shows the first student's profile on initial load.

## Technologies Used

- **Frontend**: React
- **Editor**: Visual Studio Code
- **Data Source**: `StudentsDb.JS`
- **Assets**: Profile pictures are available in the `assets` folder.

## Setup Instructions

# React Project Setup and Execution

This guide explains how to clone, set up, and run a React project from a GitHub repository.

---

## Prerequisites

Before you begin, ensure the following tools are installed on your system:

1. **Node.js**: [Download here](https://nodejs.org)
2. **Git**: [Download here](https://git-scm.com/)
3. **Code Editor**: [Download Visual Studio Code](https://code.visualstudio.com/)

---

## Steps to Clone and Run the Project

1. **Clone the Repository**  
   Open a terminal and run:
   ```bash
   https://github.com/udaraKavishka/SPA-Student-Information-Portal.git
    ```
    Replace `<repository-url>` with the URL of the GitHub repository.
2. **Navigate to the Project Directory**  
   ```bash
   cd <informationportal>
   ```
   Replace `<project-folder>` with the name of the cloned project folder.
3. **Install Dependencies**  
   ```bash
    npm install
    ```
    This command installs the project dependencies specified in `package.json`.
4. **Run the Project**
    ```bash
    npm start
    ```
    This command starts the React development server.
5. **Access the Application**
    Open a web browser and visit `http://localhost:3000` to view the application.


## Usage

1. Run the project using your preferred method (e.g., `npm start` or `yarn start`).
2. Interact with the following features:
   - Adjust font size using the font size control.
   - Browse the table of student records on the left side.
   - Click "View Profile" to see a student's complete profile on the right.

## Credits

This project was developed for the **IT development committee** of the **University of Vavuniya** as part of the Mobile Communication and Computing module (IT3133).
