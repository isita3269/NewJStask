let john={
    name:"john",
    match1:89,
    match2:120,
    match3:103 
}
let mike={
    name:"mike",
    match1:116,
    match2:94,
    match3:23 
}

let mary={
    name:"mary",
    match1:97,
    match2:134,
    match3:105 
}

let ScoreAverage=[];

function average(){
    let average= ( this.match1 + this.match2  + this.match3 ) /3;
    ScoreAverage.push(average);
}
john.f=average;
mike.f=average;
mary.f=average;

john.f();
mike.f();
mary.f();

function decision(){
    console.log(ScoreAverage); 
    ((ScoreAverage[0]>ScoreAverage[1]) && ScoreAverage[0]>ScoreAverage[2]) ? console.log("Winner is John ",ScoreAverage[0])
    :((ScoreAverage[1]>ScoreAverage[0]) && ScoreAverage[1]>ScoreAverage[2]) ? console.log("Winner is  Mike ",ScoreAverage[1])
    :((ScoreAverage[2]>ScoreAverage[1]) && ScoreAverage[2]>ScoreAverage[0]) ? console.log("Winner is marry ",ScoreAverage[2])    
    :console.log("Match is draw")
}
decision();
