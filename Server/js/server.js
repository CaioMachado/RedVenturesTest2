var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')

var numbers = [
    {
        "id": 1,
        "number": 5
    },
    {
        "id": 2,
        "number": 4
    },
    {
        "id": 3,
        "number": -6
    },
    {
        "id": 4,
        "number": 1
    }
];

var lastId = 4;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/get-numbers', function (req, res) {
    console.log("Called /get-numbers");
    res.end(JSON.stringify(numbers));
})

app.post('/addNumber', function (req, res) {
    console.log("Called /addNumber");
    console.log("Body: " + req.body.number);
    var number = req.body.number;
    if (!number && number !== 0) {
        res.status(400);
        res.send('The value sent is not a number.');
    }
    else {
        lastId = lastId + 1;
        numbers.push({ "id": lastId, "number": number });
        console.log("Number added successfully.");
        res.end(JSON.stringify(numbers));
    }
})

app.get('/reset', function (req, res) {
    console.log("Called /reset");
    numbers = [];
    res.end(JSON.stringify(numbers));
})

app.get('/is-sum-2', function (req, res) {
    console.log("Called /is-sum-2");
    var isSumTwo = false;
    var numberList = JSON.parse(JSON.stringify(numbers));
    for (var i = 0; i < numberList.length;) {
        if (numberList.length == 1) {
            break;
        }

        for (var j = 0; j < numberList.length; j++) {
            if (i != j) {
                if (numberList[i].number + numberList[j].number == 0) {
                    isSumTwo = true;
                    break;
                }
            }
        }
        numberList.splice(i, 1);
    }

    res.end(JSON.stringify({ "result": isSumTwo }));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("RedVentures Server app listening at http://%s:%s", host, port)
})