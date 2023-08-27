//START-UP PORT WITH EXPRESS
const express = require("express")
require("dotenv").config()
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

const port = process.env.port || 3000

//STATIC FOLDER
app.use(express.static(__dirname + '/public'))

//CONFIGURE TEMPLATE ENGINEERING
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//CALL FRONT ROUTERS
app.use("/", require("./routers/frontRouter"))
app.use("/admin", require("./routers/adminRouter"))

//CALL POSSIBLE ERRORS
app.use((req, res, next) => {
    res.status(404).render("404", {
        title: "404 ERROR"
    })
})

//PORT LISTENING
app.listen(port, () => {
    console.log(`Front server listening to port ${port}`)
})