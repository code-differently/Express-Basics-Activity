import Express from "express"

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/balance", (req, res) => {
})

app.get("/withdraw", (req, res) => {
})

app.get("/deposit", (req, res) => {
    
})
app.listen(port, () => console.log("listening on port" +port))
//app.post