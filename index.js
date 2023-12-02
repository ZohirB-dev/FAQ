

function swap(question, answer){
    
    const questions = document.getElementById(question);
    const answers = document.getElementById(answer);

    if (answers.style.display === "none"){
        answers.style.display = "block";
        questions.src = "assets/images/icon-minus.svg";
    } else{
        answers.style.display = "none";
        questions.src = "assets/images/icon-plus.svg"
    }
}



// principle learnt is that to be specific but effecient, provide the html with as much information as possible or get as much information as possible from the user if it requires user input.

// Then use the information provided to make a simple function
