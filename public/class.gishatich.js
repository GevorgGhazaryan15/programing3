module.exports = class Gishatich extends KendaniEak {
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