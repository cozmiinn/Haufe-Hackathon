// TODO: start here
//express exemple


const app = require("express")();
const axios = require("axios");
const cors = require("cors");

const port = 4000;

app.use(cors());

app.get("/blanao", async (req, res) => {
    try {
        const rawData = await axios.get("https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab");
        console.log(rawData.data.result.records);
        res.send(rawData.data.result.records)
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.listen(port, () => {
    console.log("Started listening on port 4000");
});