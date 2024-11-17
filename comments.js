// Create web server
const express = require('express');
const app = express();
// Define the port
const port = 3000;
// Define the comments
const comments = [
    {
        id: 1,
        username: 'Alice',
        comment: 'Hello World!',
    },
    {
        id: 2,
        username: 'Bob',
        comment: 'Hi Alice!',
    },
    {
        id: 3,
        username: 'Charlie',
        comment: 'Hello Bob!',
    },
];
// Define the route for the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});