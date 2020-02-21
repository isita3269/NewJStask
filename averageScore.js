let TeamScore = [
    {
        captainName : "John",
        score1: 89,
        score2: 120,
        score3 :103,
        average :0        
    },
    {
        captainName : "Mark",
        score1: 116,
        score2: 94,
        score3 :123,
        average :0 
    }
]

function teamAverageScoreCal (TeamScore){
    let i;
    for(i in TeamScore){
        TeamScore[i].average=((TeamScore[i].score1 + TeamScore[i].score2 + TeamScore[i].score3)/TeamScore.length)
    }
}

function display(){
    teamAverageScoreCal(TeamScore)
    console.log("TCL: TeamScore", TeamScore)
}
display();
