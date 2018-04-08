var xQanak = 100;
var yQanak = 60;
var side = 10;
var matrix = [];
var grassArr = [];
var xotakerArr = [];
var xotakerQanak = 500;
var gishatichArr = [];
var gishatichQanak = 20;
var mardArr = [];
var mardQanak = 20;
var gerMardArr = [];


function setup() {
    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(random(0, 1));
        }
    }

    createCanvas(xQanak * side, yQanak * side);
    background('#acacac');
    while (xotakerQanak > 0) {
        var x = Math.floor(Math.random() * xQanak);
        var y = Math.floor(Math.random() * yQanak);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            xotakerQanak--;
        }
    }
    while (gishatichQanak > 0) {
        var x = Math.floor(Math.random() * xQanak);
        var y = Math.floor(Math.random() * yQanak);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            gishatichQanak--;
        }
    }
    while (mardQanak > 0) {
        var x = Math.floor(Math.random() * xQanak);
        var y = Math.floor(Math.random() * yQanak);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            mardQanak--;
        }
    }
    for (var y = 0; y < yQanak; y++) {
        for (var x = 0; x < xQanak; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }

        }
    }
    console.log(grassArr);
    for (var y = 0; y < yQanak; y++) {
        for (var x = 0; x < xQanak; x++) {
            if (matrix[y][x] == 2) {
                var gr = new Xotaker(x, y);
                xotakerArr.push(gr);
            }

        }
    }
    console.log(xotakerArr);
    for (var y = 0; y < yQanak; y++) {
        for (var x = 0; x < xQanak; x++) {
            if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y);
                gishatichArr.push(gr);
            }

        }
    }
    console.log(gishatichArr);
    for (var y = 0; y < yQanak; y++) {
        for (var x = 0; x < xQanak; x++) {
            if (matrix[y][x] == 4) {
                var gr = new Mard(x, y);
                mardArr.push(gr);
            }

        }
    }
    console.log(mardArr);
    for (var y = 0; y < yQanak; y++) {
        for (var x = 0; x < xQanak; x++) {
            if (matrix[y][x] == 5) {
                var gr = new GerMard(x, y);
                gerMardArr.push(gr);
            }

        }
    }
    console.log(gerMardArr);
}

function draw() {
    frameRate(100);


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("oringe");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mernel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].krvel();
    }
    for (var i in mardArr) {
        mardArr[i].utel();
        mardArr[i].bazmanal();
        mardArr[i].mernel();
        mardArr[i].krvel();
    }
    for (var i in gerMardArr) {
        gerMardArr[i].gerMard();
        gerMardArr[i].utel();
    }
}


