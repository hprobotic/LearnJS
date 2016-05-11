'use strict';

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// random return a string represting one of the six
// Crow and Anchor faces
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}

const bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0,
};
let funds = 50;
let totalBet = rand(1, funds);
if(totalBet == 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    
}
funds = funds - totalBet;