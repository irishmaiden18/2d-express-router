# Lesson 2D: Express-Router Assignment

---

## Goals

- DONE-- Create a server using the Express module
- DONE-- Create an API with full CRUD functionality on 2 sets of data
- DONE-- Implement a Router to clean up the code

---

![Stock Image of Push Up](https://i.imgur.com/my52chH.jpg)

It's time to get in shape! Back-end functionality is fairly standard, and it takes some repetitions before getting a handle of it. The examples here uses datasets for Musicians and Actors, but feel free to use a set of data that you will enjoy working with!

## Instructions:

- DONE-- Begin inside of your assignment folder
- DONE-- Create an **index.js** file
- DONE-- Create a **./routes** folder
- DONE-- Create a **./routes/musiciansRouter** file
- DONE-- Create a **./routes/actorsRouter** file
- DONE-- Use command `npm init -y` to initialize a Node project
- DONE-- Use command `npm install express morgan uuid lodash` so our necessary modules are ready to use

- - In **index.js**

1. DONE-- Import express & Morgan, set up app variable
2. DONE-- Set up middleware
3. DONE-- Import Router files (`"./routes/musiciansRouter`)
4. DONE-- Set up the URL routes to connect to each router
5. DONE-- Set up the port and begin listening

- - In **./routes/musiciansRouter.js**

6. DONE-- Import `express` & `uuid`, set up router
7. DONE-- Create an array of your favorite Musical Artists using `uuid()` for unique ID's

The data we will create is based on what music artists you listen to. Here is an example:

```js
let musicians = [
  {
    id: uuid(),
    name: "Carson Pace",
    age: 29,
  },
  {
    id: uuid(),
    name: "Anthony Green",
    age: 42,
  },
  {
    id: uuid(),
    name: "Lizzy McAlpine",
    age: 25,
  },
  {
    id: uuid(),
    name: "Yvette Young",
    age: 33,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

8. DONE-- Handle GET requests to `/musicians` and Export the router at the bottom of the page

- TEST IT WITH POSTMAN

9. DONE-- Handle POST requests to `/musicians`.

- TEST IT WITH POSTMAN

10. DONE-- Handle PUT requests to `/musicians/:id`.

- TEST IT WITH POSTMAN

11. DONE-- Handle DELETE requests to `/musicians/:id`.

- TEST IT WITH POSTMAN

- - In **./routes/actorsRouter.js**

12. DONE-- Import express & uuid, set up router
13. DONE-- Create an array of your favorite Actors using uuid() for unique ID's

The data we will create is based on what actors you enjoy. Here is an example:

```js
let actors = [
  {
    id: uuid(),
    name: "Nathan Fielder",
    age: 42,
  },
  {
    id: uuid(),
    name: "Emma Stone",
    age: 36,
  },
  {
    id: uuid(),
    name: "Aaron Paul",
    age: 45,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

14. DONE-- Handle GET requests to `/actors` and Export the router at the bottom of the page

- TEST IT WITH POSTMAN

15. DONE-- Handle POST requests to `/actors/`

- TEST IT WITH POSTMAN

16. DONE-- Handle PUT requests to `/actors/[id]`

- TEST IT WITH POSTMAN

17. DONE-- Handle DELETE requests to `/actors/[id]`

- TEST IT WITH POSTMAN

18.

- DONE-- Create sort method for the musical artists to sort by name and age as well as specifying if the order is ascending or descending
- DONE-- Apply the sort method in your GET method
- DONE-- Create sort method for the actors to sort by name and age as well as specifying if the order is ascending or descending
- DONE-- Apply the sort method in your GET method


### BONUS
- GET an individual Musician by their ID
- DONE-- GET an indiviual Actor by their ID
