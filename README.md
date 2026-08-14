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

## Citations and References

Course materials provided through Oregon State University CS 340 were used throughout the project.

Additional references identified in the source files include:

- Express documentation: https://expressjs.com/
- GeeksforGeeks React reference: https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/
- Vite configuration documentation: https://vite.dev/config/

React, Material UI, MUI Data Grid, MySQL, and the other packages listed in the project `package.json` files are used as project dependencies.

AI tools were used for limited assistance with SQL formatting, React props, Express routing, and checking the final submission requirements. These uses are documented in the relevant source files.

## Project Work

Road Trip Guru was developed by Daniella Norris and Feifan Qi for the CS 340 course project. The database design, project-specific SQL, frontend and backend implementation, and project documentation were completed as part of the project. External references and assisted portions are identified where applicable.
