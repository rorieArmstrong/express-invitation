const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(express.static('views'));
/*
app.post("/reversed-string", (req, res, next) => {
    console.log(req.body);
    let receivedText = req.body.text;
    if (receivedText){
        let final = receivedText
        .split("")
        .reverse()
        .join("");
    res.send(final);
    }
});*/

app.get('node-express\views\informationForm.html', (req, res) => {
    
});

app.post("/card", (req, res, next) => {
    console.log(req.body);
    let receivedGreeting = req.body.greet;
    let receivedEvent = req.body.event;
    let receivedMessage = req.body.msg;
    
    res.send(`<head><style>body{
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 80%;
        justify-content: center;
        background-color: navy;
        color: whitesmoke;
    }
    img{
        width: 750px;
        display: flex;
        align-self: center;
    }</style></head>
    <body>
    <h3>${receivedGreeting}</h3><br>
    <img class="image" src="https://source.unsplash.com/featured/400x300/?{${receivedEvent}}" alt="${receivedEvent} image"/><br>
    <p>${receivedMessage}</p></body>`);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})