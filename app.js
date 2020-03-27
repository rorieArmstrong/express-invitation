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

app.get('node-express\views\index.html', (req, res) => {
    
});

app.post("/card", (req, res, next) => {
    console.log(req.body);
    let receivedGreeting = req.body.greet;
    let receivedEvent = req.body.event;
    let receivedMessage = req.body.msg;
    
    res.send(`<h3>${receivedGreeting}</h3><br>
    <img class="image" src="https://source.unsplash.com/featured/800x600/?{${receivedEvent}}" alt="${receivedEvent} image"/><br>
    <p>${receivedMessage}</p>`);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})