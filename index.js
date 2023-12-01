let newScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homeGain = 0
let guestGain = 0


function incScore0(){
     homeGain += 1
     newScore.innerText = homeGain
    }
    
function incScore1(){
     homeGain += 2
     newScore.innerText = homeGain
    }
    
function incScore2(){
     homeGain += 3
     newScore.innerText = homeGain
    }
    
    
function secScore0(){
     guestGain += 1
     guestScore.innerText = guestGain
    
}
function secScore1(){
     guestGain += 2
     guestScore.innerText = guestGain
    
}
function secScore2(){
     guestGain += 3
     guestScore.innerText = guestGain
    
}