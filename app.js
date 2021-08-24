const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()
const port = process.env.port || 8000

//public static path
const staticPath = path.join(__dirname, "public")
const templatePath = path.join(__dirname, "templates/views")
const partialsPath = path.join(__dirname, "templates/partials")
app.set("view engine", "hbs")
app.use(express.static(staticPath))


app.set("views", templatePath)
hbs.registerPartials(partialsPath)

// routing
app.get("", (req,res) => {
    res.render("index")
})
app.get("/about", (req,res) => {
    res.render("about")
})


app.get("/shop", (req,res) => {
    res.render("shop")
})

app.get("*", (req,res) => {
    res.render("404")
})


app.listen(port, () => {
    console.log(`SERVER STARTED : ${port}`)
    console.log("==============")
})