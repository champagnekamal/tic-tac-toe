let turn = 'X'
let gameover = false;
changeturn = () => {
    return turn === "X"?"O": "X"
}

const checkwin = () => {
    let text = document.getElementsByClassName('text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = text[e[0]].innerText + "won"
            gameover = true;    
        }
         
    })
     
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', (e)=> {
        if(text.innerHTML === ''){
            text.innerHTML = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("turn")[0].innerHTML = " turn for " + turn;
            }
          
            
        }
    })
})