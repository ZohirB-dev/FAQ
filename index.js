
function swap(block){
    
    const questions = block.querySelector('.image-class');
    const answers = block.querySelector('.answer');
    
    if (answers.style.maxHeight){
        answers.style.maxHeight = null;
        answers.style.margin = null;
        questions.src = "assets/images/icon-plus.svg"
    } else{
        answers.style.maxHeight = answers.scrollHeight + "px";
        answers.style.margin = '16px 0px';
        questions.src = "assets/images/icon-minus.svg";
    }
}

document.addEventListener("keydown", function(event) {
    const blocks = document.querySelectorAll('.block');
      
    
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault(); 
        let currentIndex = -1;

            blocks.forEach((block, index) => {
                    if (document.activeElement === block) {
                        currentIndex = index;  
                        console.log(`delayed index ${currentIndex}`);
                    }                

        });
        
        if (event.key === 'ArrowDown') {
            
            currentIndex = (currentIndex + 1) % blocks.length;
            console.log(currentIndex);
        } else if (event.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + blocks.length) % blocks.length;
            console.log(currentIndex);
        }

        blocks[currentIndex].focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
        swap(document.activeElement);
    }
});




