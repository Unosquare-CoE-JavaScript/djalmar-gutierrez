class Generator {
    generate(size) {
        let randoms = new Array(size).fill(0);
        randoms.forEach((val, index) => randoms[index] = Math.floor((Math.random() * 6) + 1));
        return randoms;
    }
}

class Splitter {

    split(list) {

        let arrangments = [];
        // columns


        for (let i in list) {
            let jArrangments = []
            for (let j in list[i]) {
                yArrangments.push(list[i][j])
            }
            arrangments.push(jArrangments);
        }

        // rows

        for (let i in list) {
            let iArrangments = []
            for (let j in list[i]) {
                yArrangments.push(list[j][i])
            }
            arrangments.push(iArrangments);
        }

        //diagonals
        let diagonal1 = []
        let diagonal2 = []
        for (let i in list) {
            diagonal1.push(list[i][i])
            diagonal2.push(list[list.length - i][i])
        }
        arrangments.push(diagonal1);
        arrangments.push(diagonal2);
        return arrangments;
    }
}

class Verifier {
    verify(array) {
        let sums = array.map(a => a.reduce((p, c) => p += c, 0));

        return sums.every(sum => sum == sums[0]);
    }
}


class MagicSquareGenerator {
    generate(size) {
        let generator = new Generator();
        let splitter = new Splitter();
        let verifier = new Verifier();
        let magicSquare = [];

        do {
            magicSquare = [];
            for (let i = 0; i < size; i++) {
                magicSquare.push(generator.generate(size));
            }
        } while (!verifier.verify(magicSquare))

        return magicSquare;
    }
}



