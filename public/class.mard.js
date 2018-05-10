module.exports = class Mard {
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