# Contact Management Application

## Project Description

A simple web application to manage contacts, built with Angular for the frontend and Laravel for the backend. Users can create, read, update, and delete contacts. Contacts can be categorized, and the application supports user authentication.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation and Setup](#installation-and-setup)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [Contact](#contact)

## Features

- User authentication (login/register)
- Create, read, update, and delete contacts
- Categorize contacts
- Search and filter contacts by category or name

## Technologies Used

- **Frontend**: Angular
- **Backend**: Laravel
- **Database**: MySQL (or any other preferred database)
- **Version Control**: Git and GitHub

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- PHP and Composer installed
- MySQL or another preferred database

### Backend (Laravel) Setup

1. Clone the repository:
   '''bash
   git clone https://github.com/Calaretz/ShababSanto.git
   cd ShababSanto/backend
   
2. Install dependencies:
   composer install
   
3. Set up the environment:
   Copy .env.example to .env
   Update .env with your database credentials

4. Generate application key:
   '''bash
   php artisan key:generate

5. Run migrations:
   '''bash
   php artisan migrate

6. (Optional) Seed the database:
   '''bash
   php artisan db:seed

7. Start the development server:
   '''bash
   php artisan serve

### Frontend (Angular) Setup

1.Navigate to the frontend directory:
   '''bash
   cd ../frontend

2. Install dependencies:
   '''bash
   npm install
   
3. Start the development server:
   '''bash
   ng serve

## Usage
   1. Open your browser and go to http://localhost:4200 for the Angular frontend.
   2. The Laravel backend will be running on http://localhost:8000.

### Project Structure

## Backend (Laravel)

backend/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
├── routes/
├── storage/
├── tests/
├── .env.example
├── composer.json
└── phpunit.xml

## Frontend (Angular)

frontend/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
├── angular.json
├── package.json
└── tsconfig.json

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

### Summary of project contributions

## (Fares) : Backend

## User Authentication:

Basic authentication functionality has been implemented, including:
Registration of new users (register endpoint).
User login (login endpoint).
User logout (logout endpoint).
These endpoints handle user authentication using basic mechanisms like username/password.

## Database Migrations:

Database migrations have been set up for the following tables:
users: Stores user information such as username, email, and password hashes.
contacts: Stores information about contacts, likely linked to users through foreign keys.

## API Endpoints:

Routes and controllers have been configured for CRUD operations related to contacts.
The CRUD operations typically include:
Creating new contacts (POST /contacts).
Retrieving contacts (GET /contacts or GET /contacts/{id}).
Updating existing contacts (PUT /contacts/{id} or PATCH /contacts/{id}).
Deleting contacts (DELETE /contacts/{id}).

## Model Setup:

User: Represents a user with attributes like username, email, and password.
Contact: Represents a contact with attributes that may include name, email, phone number, etc.

## (Fares) : Backend

Fares spearheaded the backend development for the Contact Management App, ensuring a solid and efficient server-side setup. He began by initializing a new Node.js project and installing necessary dependencies like express, mongoose, and body-parser. Fares created an Express server, set up middleware for JSON handling and CORS, and crafted Mongoose models for the Contact data structure. He implemented and tested CRUD operations, ensuring smooth database interactions, and connected the app to MongoDB using Mongoose. Throughout the project, Fares rigorously tested and debugged the backend to deliver a reliable and secure foundation for the app.

## (Rimawi) : Frontend

Focused on enhancing the app's user experience and visual appeal. He designed an intuitive UI using CSS and SCSS, ensuring a consistent and attractive look throughout the app. Rimawi developed a dynamic contact list feature, allowing users to view, delete, and edit contacts easily. He implemented robust forms for adding and editing contacts using Angular Reactive Forms, ensuring proper validation and user input handling. Rimawi also played a key role in testing and debugging the frontend components, ensuring they worked flawlessly with the backend and delivering a seamless, user-friendly experience.

## (Kilani) : Frontend

Kilani laid the groundwork for the frontend, starting with the initialization of a new Angular project. He set up essential dependencies and defined the app's routing structure, creating an AppRoutingModule with routes for listing, adding, and editing contacts. Kilani developed core components such as AppComponent, ContactListComponent, ContactAddComponent, and ContactEditComponent, each with specific functionality. He also created a ContactService to handle data operations, ensuring seamless communication with the backend. Kilani integrated Angular Forms for input management and validation, contributing significantly to the app's functionality and user experience.


### Contact
Fares: faresibrahim10@gmail.com

Kilani: kilani.1090@gmail.com

Rimawi: aa.rimawi@gmail.com




