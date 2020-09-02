var cities = [],
    choosedOnes = [];
var howMany = 10; //how Many Cities Do You Want to Push ?
var globalData;

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadJSON('city.list.json', gotData);
}

function gotData(data) {
    globalData = data;
}

function addNewCity() {
    var autherized = false;
    while (!autherized) {
        var randomNumber = floor(random(0, globalData.length));
        console.log('random File Select With a Index of : ' + randomNumber);
        var equalshod = false;
        for (var i = 0; i < choosedOnes; i++) {
            if (randomNumber == choosedOnes[i]) {
                equalshod = true;
                break;
            }
        }
        if (!equalshod) {
            console.log('This File Selected : ' + randomNumber)
            choosedOnes.push(randomNumber);
            autherized = true;
            cities.push(globalData[randomNumber]);
        }
    }
}

function normalizeVertecies() {
    for (var i = 0; i < cities.length; i++) {
        console.log('Before :  lat : ' + cities[i].coord.lat + ' lon : ' + cities[i].coord.lon);
        var X = map(mouseX, -90, 90, 0, 600);
        var Y = map(mouseY, -180, 180, 0, 600);
        cities[i].coord.lat = X;
        cities[i].coord.lon = Y;
        console.log('After :  lat : ' + cities[i].coord.lat + ' lon : ' + cities[i].coord.lon);
    }
}

function mousePressed() {
    addNewCity();
    normalizeVertecies();
}

function draw() {
    background(0);
    if (globalData) {
        for (var i = 0; i < cities.length; i++) {
            fill(255);
            noStroke();
            ellipse(cities[i].coord.lon * 4, cities[i].coord.lat *4, 16, 16);
            }
            for (var i = 0; i < 10000000000; i++) {
                fill(255);
                noStroke();
                ellipse(globalData[i].coord.lon * 4, globalData[i].coord.lat * 4, 1, 1);
            }
        }
    }