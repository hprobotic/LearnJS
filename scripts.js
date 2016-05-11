'use strict';

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// random return a string represting one of the six
// Crow and Anchor faces
function randFace() {
    return ["bau", "cua", "tom", "ca"]
    [rand(0, 3)];
}
let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // Place bets
    let bets = { bau: 0, cua: 0, tom: 0, ca: 0 };
    let totalBet = rand(1, funds);
    if (totalBet == 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //distribute total bet
        let remainning = totalBet;
        do {
            let bet = rand(1, remainning);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remainning = remainning - bet;
        } while (remainning > 0);
    }
    funds = funds - totalBet;
    console.log('\tbets:' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + ` (total: ${totalBet} pence)`);

    // role die
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // collect winnings
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);  
}
console.log(`\tending funs: ${funds}`);