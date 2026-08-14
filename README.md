# Road Trip Guru

Road Trip Guru is a database-driven web application created for Oregon State University CS 340 Introduction to Databases. The application is used to manage road trips, destinations, attractions, and budget information through a web interface.

The website is mainly intended as an interface for managing records in the Road Trip Guru database rather than as a complete travel planning application for individual users.

## Team Members

Daniella Norris  
Feifan Qi

## Website

http://classwork.engr.oregonstate.edu:3212/

## Technology

The project uses:

- React with Vite for the frontend
- Node.js with Express for the backend
- MySQL for the database
- Material UI and MUI Data Grid for interface components and tables

## Database

The database contains six tables:

- RoadTrippers
- RoadTripRoutes
- TripBudgets
- Places
- RoadTripPlaces
- Attractions

RoadTripPlaces is the intersection table between RoadTripRoutes and Places and represents the many-to-many relationship between road trips and places.

## Project Structure

- `backend/` contains the Express server, database connection, and backend queries.
- `frontend/` contains the React application and user interface.
- `stored_procedures/ddl.sql` contains database definition logic used by the project.
- `stored_procedures/pl.sql` contains stored procedures used by database operations.
- `ddl_roadtripguru.sql` contains the database definition queries.
- `road_trip_guru_dml.sql` contains the data manipulation queries.
- `insert_sample_roadtripguru.sql` contains the sample data.

## Running Locally

Install the required packages before starting the frontend and backend.

Backend:

```bash
cd backend
npm install
npm run development
```

The backend uses the following environment variables:

```text
OSU_ID
DB_PASSWORD
BACKEND_PORT
```

Frontend:

```bash
cd frontend
npm install
npm run development
```

The frontend uses:

```text
VITE_BACKEND_PORT
```

to connect to the backend.

Both the frontend and backend servers need to be running for the application to work locally.

## References

Course materials provided through Oregon State University CS 340 were used throughout the project.

Additional references identified in the source files include:

* Express documentation: https://expressjs.com/
* GeeksforGeeks React reference: https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/
* Vite configuration documentation: https://vite.dev/config/

React, Material UI, MUI Data Grid, MySQL, and the other packages listed in the project `package.json` files are used as project dependencies.

Limited AI assistance was used where documented in the relevant source files, with the exception of the below. AI was also used to review assignment requirements and check the completeness of the final submission.

```
/*
EditForm.jsx
Citation:
File level -
Asked ChatGPT:
"Help me figure out a method to pass in my data objects from my forms
into my existing methods that call my express API"
*/

/*
FormBase.css
Citation:
File level -
Asked ChatGPT:
"Help me make my current form card responsive so that it does not overflow on smaller screens or
when it has more content (pasted form card css)"
*/

/* 
FormBase.jsx
Citation:
File level -
Asked ChatGPT:
"Help me convert my current date / time format derived from form entry into strings that can be passed in 
to my existing post request and form display."

*/

/* 
NavBar.jsx
Citation:
File level -
Asked ChatGPT:
"I am building a nav bar using React and I already have my routes and general scaffolding set up in the pasted code. 
Help me add CSS styling to make sure the navbar has consistent styling, wraps on resize, 
and the relevant tab the user is on remains highlighted. "
*/

/* 
Table.jsx
Citation:
File level -
Asked ChatGPT:
"With the current Material UI components in place, help me utilize
Material UI's Grid functionality. This is meant to be used with my data
types (inserted data types)."

"Assist with mapping over existing object keys to display in a tabular
format for compatibility with Material UI."

*/

/* 
RoadTripPlaces.jsx
File level - 
For citation, prompt: 
Chat GPT - 'how to perform a table refresh with props for React' */

/*
RoadTripRoutes.jsx
File level - 
For citation, prompt: Chat GPT - 'table refresh with props for React'
*/

/* DDL.sql
Citation:
File level -
Asked ChatGPT:
"Help structure the SQL_MODE for this DDL file"
*/

/* 
pl.sql
Used ChatGPT to help format this file. 
Citation: File level -
Prompt: Format this file for MariaDB, keeping my comment and DB structure in tact */

```

## Project Work

Road Trip Guru was developed by Daniella Norris and Feifan Qi for the CS 340 course project. The database design, project-specific SQL, frontend and backend implementation, and project documentation were completed as part of the project. External references and assisted portions are identified where applicable.
