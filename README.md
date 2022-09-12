# kinema-test
The following repository describes a Js-based backend and frontend.
## Backend
The backend is made with Node, and its DB is postgues, according to the given requirements.

The backend is built with Express, as orm we have sequelize and its plugin for the connection with PostgresSql.
To install it we can go to the backend folder and execute:
```bash
npm install 
```
```bash
npm start
```
This will enable the backend on port: 8080.

## Frontend
The frontend is made with Nextjs and Mui as UI, the forms are validated with Yup and geotagged with react-hook-form. The api rest connection is done with Axios.

To run the frontend we can go into the folder and run 
```bash
npm install
```
```bash
npm run dev
```
this will enable the frontend on port 3000

## DOCKER:
If you want you can download the project and run
```bash
docker-compose up --build
```
This will build the two images (frontend and backend) and a third one with the postgres database.
