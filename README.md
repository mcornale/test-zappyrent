# Zappyrent test

This project was created with "Create React App".

## How to view the project

First you need to clone the repository on your computer.
Then, in the project directory, you need to install all the dependecies with the command `npm start`.
Now to start the project you need to run the command `npm run`, that lets you to view the project in the browser.
Open [http://localhost:3000](http://localhost:3000) to view it.

## Technologies used

- React
- Typescript
- CSS Modules
- React Router
- Framer Motion

## Technical solution

I used React Context to store the properties fetched and to handle the search filters.

I used only one component to show the single property items on the list and to show the details page of the items.
Basically, in the PropertyItem component I check if some parameters are defined in the url, in this case the property title, and:
- if it is defined it means that the details page is request
- if it is not defined it means that the card version of the property item is required

I handled errors and implemented some loaders to wait for the fetching phase to be completed.
