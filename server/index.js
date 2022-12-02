const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.get('/', async (req, res) => {
    const result = await axios.get('https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=10');
    res.send(JSON.stringify(result.data.result.records));
})

app.post('/', async (req, res) => {
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})