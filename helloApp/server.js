const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors()); // To allow communication with React frontend
app.use(express.json()); // To parse JSON bodies

app.post('/api/greet', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.json({ message: `Hello ${name}` });
    } else {
        res.status(400).json({ message: 'Please provide a name' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
