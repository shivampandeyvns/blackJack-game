let guestScore=document.getElementById("guest-score")
let homeScore=document.getElementById("home-score")
let leader=document.getElementById("leader")

var scoreHome=0
var scoreGuest=0

//guest score


function add1guest()
{
    scoreGuest+=1
    guestScore.innerText=scoreGuest;
    leaderScore()
}
function add2guest()
{
    scoreGuest+=2
    guestScore.innerText=scoreGuest;
    leaderScore()
}
function add3guest()
{
    scoreGuest+=3
    guestScore.innerText=scoreGuest;
    leaderScore()
}

//Home score
function add1home()
{
    scoreHome+=1
    homeScore.innerText=scoreHome;
    leaderScore()
}
function add2home()
{
    scoreHome+=2
    homeScore.innerText=scoreHome;
    leaderScore()
}
function add3home()
{
    scoreHome+=3
    homeScore.innerText=scoreHome;
    leaderScore()
}

function resetScore()
{
    scoreHome=0
    scoreGuest=0
    homeScore.innerText=scoreHome;
    guestScore.innerText=scoreGuest;
}

function leaderScore()
{
    if(scoreHome>scoreGuest)
    {
        leader.innerText="Home Leads!"
    }
    else if(scoreGuest>scoreHome)
    {
        leader.innerText="Guests Leads!"
    }
    else
    {
        leader.innerText="Scores Tied!"    
    }
}