const cardArray = [
{
name: `fries`,
img:`images/fries.png`

},
{
    name: `cheeseburger`,
    img:`images/cheeseburger.png`
    
    },
    {
        name: `hotdog`,
        img:`images/hotdog.png`
        
        },
        {
            name: `ice-cream`,
            img:`images/ice-cream.png`
            
            },
            {
                name: `milkshake`,
                img:`images/milkshake.png`
                
                },
                {
                    name: `pizza`,
                    img:`images/pizza.png`
                    
                    },
                    {
                        name: `fries`,
                        img:`images/fries.png`
                        
                        },
                        {
                            name: `cheeseburger`,
                            img:`images/cheeseburger.png`
                            
                            },
                            {
                                name: `hotdog`,
                                img:`images/hotdog.png`
                                
                                },
                                {
                                    name: `ice-cream`,
                                    img:`images/ice-cream.png`
                                    
                                    },
                                    {
                                        name: `milkshake`,
                                        img:`images/milkshake.png`
                                        
                                        },
                                        {
                                            name: `pizza`,
                                            img:`images/pizza.png`
                                            
                                            },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector(`#grid`)

const resultDisplay = document.querySelector(`#result`)

let cardChosen = [];

let cardchosenids =[];

let cardsWon = [];

function createBoard(){
for (let i = 0 ;i<12;i++){

const card = document.createElement(`img`);

card.setAttribute(`src`, `images/blank.png `);
card.setAttribute(`data-id` , i);

card.addEventListener(`click`, flipCard)
gridDisplay.appendChild(card);
} 
}
createBoard(); 




function checkMatch(){


    const cards = document.querySelectorAll(`img`)


    const optionOneId = cardchosenids[0];
    const optiontwoId = cardchosenids[1];
    // console.log(`you have clicked the same image`);



    if(optionOneId == optiontwoId){
        cards[optionOneId].setAttribute(`src`, `images/blank.png`)
        cards[optiontwoId].setAttribute(`src`, `images/blank.png`)
        alert(`you find a match `)
    }
if(cardChosen[0] == cardChosen[1]){
    alert('You found a match')

cards[optionOneId].setAttribute(`src`, `images/white.png`)
cards[optiontwoId].setAttribute(`src`, `images/white.png`)
cards[optionOneId].removeEventListener(`click`,flipCard)
cards[optiontwoId].removeEventListener(`click`,flipCard);
 
 cardsWon.push(cardChosen)

}else{

    cards[optionOneId].setAttribute(`src`, `images/blank.png`)
    cards[optiontwoId].setAttribute(`src`, `images/blank.png`)
alert(`sorry try again`)
}



cardChosen = []
cardchosenids = []
// cardsWon.innerHTML = cardsWon.length
resultDisplay.innerHTML=cardsWon.length
if(cardsWon.length == cardArray.length/2){

    resultDisplay.innerHTML = `congrats you find all them`
}
}



function flipCard(){

console.log(cardArray);
    const cardId =this.getAttribute(`data-id`)


    cardChosen.push(cardArray[cardId].name)

    cardchosenids.push(cardId)


    this.setAttribute(`src`, cardArray[cardId].img)
if(cardChosen.length == 2 ){

    setTimeout(checkMatch,500)
}


}