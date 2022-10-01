// TODO: start here
//express exemple


const app = require("express")();
const axios = require("axios");
const cors = require("cors");

const port = 4000;

app.use(cors());

app.get("/", (req, resp) => {
    axios.get("https://data.primariatm.ro/api/3/action/datastore_search").then(response => {
        resp.status(200).json(response);
    });

});


app.listen(port, () => {
    console.log("Started listening on port 4000");
});