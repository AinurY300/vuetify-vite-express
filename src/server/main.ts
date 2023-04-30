import express from "express"
import bodyParser from "body-parser"
import ViteExpress from "vite-express"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/hello", (req, res) => {

  const json = JSON.stringify('Hello Vite + Vue + TypeScript!')

  console.log(req.body)
  
  res.send(json)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
)