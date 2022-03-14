function checkWinner(user, com){
    if(user == "rock" && com =="scissors"){
        return 1;
    }else if(user == "rock" && com=="paper"){
        return 2;
    }else if(user == "scissors" && com=="rock"){
        return 2;
    }else if(user == "scissors" && com=="paper"){
        return 1;
    }else if(user == "paper" && com=="rock"){
        return 1;
    }else if(user == "paper" && com=="scissors"){
        return 2;
    }

    return 0;
     
}


function getResult(user){
  
    let choices = ['rock', 'paper', 'scissors'];
    let com_choice = Math.floor((Math.random() * 2));
    let com = choices[com_choice];

   let result = checkWinner(user, com);
   
    if(user == "rock"){
        document.getElementById('user_choice').setAttribute("src", "/assets/images/rock.png");
    }else if(user == "paper"){
        document.getElementById('user_choice').setAttribute("src", "/assets/images/paper.png");
    }else if(user == "scissors"){
        document.getElementById('user_choice').setAttribute("src", "/assets/images/scissors.png");
    }

    if(com == "rock"){
        document.getElementById('com_choice').setAttribute("src", "/assets/images/rock.png");
    }else if(com == "paper"){
        document.getElementById('com_choice').setAttribute("src", "/assets/images/paper.png");
    }else if(com == "scissors"){
        document.getElementById('com_choice').setAttribute("src", "/assets/images/scissors.png");
    }
     

    if(result == 1){
       
        document.getElementById("result_message").innerHTML = "You won!";
        document.getElementById("result_message").innerHTML.className = "won_message";
    }else if(result == 2){
        document.getElementById("result_message").innerHTML = "You lost!";
        document.getElementById("result_message").innerHTML .className = "loss_message";
    }else{
        document.getElementById("result_message").innerHTML = "You draw!";
    }

    document.getElementById("choice_container").setAttribute("style", "opacity:0;");
    document.getElementById("result_container").setAttribute("style", "opacity:1;");
    
   

}


function reset(){
    document.getElementById("choice_container").setAttribute("style", "opacity:1;");
    document.getElementById("result_container").setAttribute("style", "opacity:0;");
    
}


