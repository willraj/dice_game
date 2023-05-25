// for dice one..
let num1 = (Math.random()*6)+1;
let wholeNum1 = Math.floor(num1);
switch(wholeNum1){
    case 1:
        document.getElementById("d1").src="./images/dice1.png";
        break;
    case 2:
        document.getElementById("d1").src="./images/dice2.png";
         break;
    case 3:
        document.getElementById("d1").src="./images/dice3.png";
        break;
    case 4:
         document.getElementById("d1").src="./images/dice4.png";
         break;
    case 5:
     document.getElementById("d1").src="./images/dice5.png";
        break;
    case 6:
        document.getElementById("d1").src="./images/dice6.png";
        break;
    default:
        console.log("non of the case not meeted");
            
}
// for dice 2

let num2 = (Math.random()*6)+1;
let wholeNum2 = Math.floor(num2);
switch(wholeNum2){
    case 1:
        document.getElementById("d2").src="./images/dice1.png";
        break;
    case 2:
        document.getElementById("d2").src="./images/dice2.png";
         break;
    case 3:
        document.getElementById("d2").src="./images/dice3.png";
        break;
    case 4:
         document.getElementById("d2").src="./images/dice4.png";
         break;
    case 5:
     document.getElementById("d2").src="./images/dice5.png";
        break;
    case 6:
        document.getElementById("d2").src="./images/dice6.png";
        break;
    default:
        console.log("non of the case not meeted");
            
}

// for change the winner title

if(wholeNum1>wholeNum2){
    document.getElementById("win-loss").innerText="Winner is Player 1";
}else{
    document.getElementById("win-loss").innerText="Winner is Player 2"; 
}

