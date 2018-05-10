module.exports = class Xotaker extends KendaniEak {
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