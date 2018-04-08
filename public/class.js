class KendaniEak{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;


    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}
class Grass extends KendaniEak {
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak, this.multiply);
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}
class Xotaker extends KendaniEak{
    sharjvel() {
        var patahakanVandakDatark = random(this.yntrelVandak(0));
        if (patahakanVandakDatark) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandakDatark[0];
            this.y = patahakanVandakDatark[1];
            matrix[this.y][this.x] = 2;
            this.multiply--;
        }

    }

    utel() {
        var patahakanVandak = random(this.yntrelVandak(1));

        if (patahakanVandak) {
            this.multiply++;
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        var norXotakerVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 5 && norXotakerVandak) {
            var norXotaker = new Xotaker(norXotakerVandak[0], norXotakerVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norXotakerVandak[1]][norXotakerVandak[0]] = 2;
            this.multiply = 0;
        }
    }
    mernel() {
        this.sharjvel();
        if (this.multiply <= -5) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}
class Gishatich extends KendaniEak{
    sharjvel() {
        var patahakanVandakDatark = random(this.yntrelVandak(1));
        if (patahakanVandakDatark) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandakDatark[0];
            this.y = patahakanVandakDatark[1];
            matrix[this.y][this.x] = 3;
            this.multiply--;
        }

    }

    utel() {
        var patahakanVandak = random(this.yntrelVandak(2));

        if (patahakanVandak) {
            this.multiply++;
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 3;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        var norGishatichVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 5 && norGishatichVandak) {
            var norGishatich = new Gishatich(norGishatichVandak[0], norGishatichVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norGishatichVandak[1]][norGishatichVandak[0]] = 3;
            this.multiply = 0;
        }
    }
    krvel() {
        for (var i in mardArr) {
            if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                kriv++;
            }
        }
        return this.kriv;
    }
}
class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.kriv = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        var patahakanVandakDatark = random(this.yntrelVandak(1));
        if (patahakanVandakDatark) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandakDatark[0];
            this.y = patahakanVandakDatark[1];
            matrix[this.y][this.x] = 4;
            this.multiply--;
        }


    }

    utel() {
        var patahakanVandak = random(this.yntrelVandak(2));

        if (patahakanVandak) {
            this.multiply++;
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 4;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }

        else {
            this.sharjvel();

        }

    }
    bazmanal() {
        var norMardVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 10 && norMardVandak) {
            var norMard = new Mard(norMardVandak[0], norMardVandak[1]);
            mardArr.push(norMard);
            matrix[norMardVandak[1]][norMardVandak[0]] = 4;
            this.multiply = 0;
        }
    }
    mernel() {
        this.sharjvel();
        if (this.multiply <= -200) {
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
    krvel() {
        for (var i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                kriv++;
            }
        }
        return this.kriv;
    }

}
class GerMard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }
    gerMard() {
        if (this.kriv >= 5) {
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 5;

                }
            }
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1);
                    matrix[this.y][this.x] = 5;

                }
            }
        }
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        var patahakanVandakDatark = random(this.yntrelVandak(1));
        if (patahakanVandakDatark) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandakDatark[0];
            this.y = patahakanVandakDatark[1];
            matrix[this.y][this.x] = 5;
            this.multiply--;
        }

    }
    utel() {
        var patahakanVandak = random(this.yntrelVandak(3));

        if (patahakanVandak) {
            this.multiply++;
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 5;

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }

        else {
            this.sharjvel();

        }

    }

}