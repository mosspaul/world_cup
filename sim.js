function rando(arg) {
    return Math.ceil(Math.random() * arg);
}

function playMatch(team1, team2) {
    if (team1.teamRating + rando(25) === team2.teamRating + rando(25)) {
        return team1.teamRating < team2.teamRating ? [team1, team2]: [team2, team1];
    } 
    return (team1.teamRating + rando(25) < team2.teamRating + rando(25)) ? [team1, team2]: [team2, team1];
}

function findFamiliar(array) {
    let t1 = [];
    let t2 = [];
    let t3 = [];
    let t4 =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[0]) {
            t1.push(array[i]);
        } 
        else if (!(array[i] === array[0])) {
            t2.push(array[i]);
            for (let i = 0; i < t2.length; i++) {
                if (!(t2[i] === t2[0])) {
                    t3.push(t2[i]);
                    t2.splice(i, 1);
                }
            }
        }
    }
    return [t1, t2, t3, t4];
}

function simGroup(array) {
    let  result = findFamiliar(array);
    let lengthRes = result.map(item => item.length);
    let winners = [];
    for (let i = 0; i < 2; i++) {
        let max = lengthRes.reduce((a, b) =>  Math.max(a, b));
        let target = lengthRes.indexOf(max);
        winners.push(target);
        delete lengthRes[target];
    }
    return [result[winners[0]][0], result[winners[1]][0]];
}

function Team(teamName, teamRating) {
    this.teamName = teamName;
    this.teamRating = teamRating;
}

function Group(team1, team2, team3, team4) {
    this.team1 = team1;
    this.team2 = team2;
    this.team3 = team3;
    this.team4 = team4;
    this.simMatches = () => 
        [
            playMatch(team1, team2)[0],
            playMatch(team1, team3)[0],
            playMatch(team1, team4)[0],
            playMatch(team2, team3)[0],
            playMatch(team2, team4)[0],
            playMatch(team3, team4)[0]
        ];  
}
/*
* GROUP INITIALIZER
*/
let GroupA = new Group(
    new Team("Quatar", 50),
    new Team("Senegal", 18),
    new Team("Ecuador", 44),
    new Team("Netherlands", 8)
);

let GroupB = new Group(
    new Team("United States", 16),
    new Team("Iran", 20),
    new Team("Wales", 19),
    new Team("England", 5),
);

let GroupC = new Group(
    new Team("Saudi Arabia", 51),
    new Team("Poland", 26),
    new Team("Argentina", 3),
    new Team("Mexico", 13),
);

let GroupD = new Group(
    new Team("France", 4),
    new Team("Denmark", 10),
    new Team("Austrailia", 38),
    new Team("Tunisia", 30),
);

let GroupE = new Group(
    new Team("Germany", 11),
    new Team("Spain", 7),
    new Team("Costa Rica", 31),
    new Team("Japan", 24),
);

let GroupF = new Group(
    new Team("Croatia", 12),
    new Team("Morocco", 22),
    new Team("Belgium", 2),
    new Team("Canada", 41),
);

let GroupG = new Group(
    new Team("Switzerland", 15),
    new Team("Serbia", 21),
    new Team("Brazil", 1),
    new Team("Cameroon", 43),
);

let GroupH = new Group(
    new Team("Portugal", 9),
    new Team("Ghana", 61),
    new Team("South Korea", 28),
    new Team("Uruguay", 14),
);

let a = simGroup(GroupA.simMatches());
let b = simGroup(GroupB.simMatches());
let c = simGroup(GroupC.simMatches());
let d = simGroup(GroupD.simMatches());
let f = simGroup(GroupE.simMatches());
let e = simGroup(GroupF.simMatches());
let g = simGroup(GroupG.simMatches());
let h = simGroup(GroupH.simMatches());
console.log("Group Stage");
for (let item of [a, b, c, d, e, f, g, h]) {
    console.table(item);
}

/* 
*KNOCKOUT STAGES
*/
function Record(winner, loser) {
    this.winner = winner;
    this.loser = loser;
}

console.log("\n\n\nRound of 16");
let match49 = playMatch(a[0], b[1]);
let match50 = playMatch(c[0], d[1]);
let match53 = playMatch(e[0], f[1]);
let match54 = playMatch(g[0], h[1]);
let match51 = playMatch(b[0], a[1]);
let match52 = playMatch(d[0], c[1]);
let match55 = playMatch(f[0], e[1]);
let match56 = playMatch(h[0], g[1]);
for (item of [match49, match50, match53, match54, match51, match52, match55, match56]) {
    console.table(new Record(item[0], item[1]));
}

console.log("\n\n\nQuarter-finals");
let match57 = playMatch(match49[0], match50[0]);
let match58 = playMatch(match53[0], match54[0]);
let match59 = playMatch(match51[0], match52[0]);
let match60 = playMatch(match55[0], match56[0]);
for (item of [match57, match58, match59, match60]) {
    console.table(new Record(item[0], item[1]));
}

console.log("\n\n\nSemi-finals");
let match61 = playMatch(match57[0], match58[0]);
let match62 = playMatch(match59[0], match60[0]);
for (item of ([match61, match62])) {
    console.table(new Record(item[0], item[1]));
}

console.log("\n\n\nThird place play-off");
let thirdPlace = playMatch(match61[1], match62[1]);
console.table(new Record(thirdPlace[0], thirdPlace[1]));

console.log("\n\n\nFinal");
let final = playMatch(match61[0], match62[0]);
console.table(new Record(final[0], final[1]));