const makeBroken = (weapon) => {
    return `broken ${weapon}`;
}


let weapons = ['candlestick', 'lead pipe', 'revolver'];

let brokenWeapons = _.map(weapons, makeBroken)

console.table(brokenWeapons);