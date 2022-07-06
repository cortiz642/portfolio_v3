const logo = document.querySelectorAll("#logo path");
// console.log(logo);

//Get path total length of each element
for(let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}