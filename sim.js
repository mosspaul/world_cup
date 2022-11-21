function team(teamName, teamRating) {
    this.teamName = teamName;
    this.teamRating = teamRating;
}


function playMatch(team1, team2) {
    return team1.teamRating < team2.teamRating ? team1 : team2;
}

/*let group = {
    team1: new team("Netherlands", 8),
    team2: new team("Senegal", 18),
    team3: new team("Ecuador", 44),
    team4: new team("Quatar", 50),
}*/
