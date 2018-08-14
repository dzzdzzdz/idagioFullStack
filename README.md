# idagioFullStack

This is the Full Stack version of track list editing I attempted over the weekend (2 days).
To run the client side, use npm start and open your browser on localhost:3000
To run the server side, also use npm start. The express server will run on localhost:3001.

For the front-end I used React.js, and this time attempted to use redux to store the state data, semantic-ui, and axios for making api calls. I also used react-router for page navigation. Once the user submits the form, it calls the submit thunk action, makes an api call (POST) and saves the metadata to a mongodb database. Then, it dispatches an action and uses a reducer to change the state of the track list data.
