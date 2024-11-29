function roll(){
    const numOfDice=document.getElementById("numOfDice").value;
    const result=document.getElementById("result");
    const dice=document.getElementById("dice-img");
    const values=[];
    const images=[];
    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice :${value}">`)
    }
    result.textContent=`dice: ${values.join(', ')}`;
    dice.innerHTML=images.join('');


}