function playMatch(team1, team2) {
    return team1.teamRating < team2.teamRating ? team1 : team2;
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
            playMatch(team1, team2),
            playMatch(team1, team3),
            playMatch(team1, team4),
            playMatch(team2, team3),
            playMatch(team2, team4),
            playMatch(team3, team4)
        ];  
}

/*
* GROUP INITIALIZER
*/
let groupA = new Group(
     new Team("Netherlands", 8),
     new Team("Senegal", 18),
     new Team("Ecuador", 44),
     new Team("Quatar", 50)
);

let groupB = new Group(
    new Team("England", 5),
    new Team("United States", 16),
    new Team("Wales", 19),
    new Team("Iran", 20)
);

