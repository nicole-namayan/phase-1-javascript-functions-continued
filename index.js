

function saturdayFun( rollerskate="roller-skate")  {
        return `This Saturday, I want to ${rollerskate}!`

} 
saturdayFun()

 mondayWork = function(activity="go to the office") {
        return `This Monday, I will ${activity}.`
    }


let wrapAdjective = function(ast="*") {
    return function(adjective="special"){
    return `You are ${ast}${adjective}${ast}!`
    }
 }

