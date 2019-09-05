let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Club"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);