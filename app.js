const logo = document.querySelectorAll("#logo path");
// console.log(logo);

//Get path total length of each element
for(let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

function clickMenu(){
    var navbar = document.getElementById('navbar');
    var responsiveName = 'responsive';
    navbar.classList.toggle(responsiveName);
}
    $("portfolio").html().document.onreadystatechange

// const header = document.querySelector('.loader-wrapper');
// window.onscroll = function(){
//     var top = window.scrollY;
//     console.log(top);
//     if(top >= 50){
//         header.classList.add('active')
//     }else{
//         header.classList.remove('active');
//     }
// }
// document.onreadystatechange = function() {
//             if (document.readyState !== "complete") {
//                 document.querySelector(
//                   "body").style.visibility = "hidden";
//                 // $(".loader-wrapper").document.style.visibility="visible";
//                 document.querySelector(
//                   ".loader-wrapper").style.visibility = "visible";
//             } else {
//                 document.querySelector(
//                   ".loader-wrapper").style.display = "visible";
//                 document.querySelector(
//                   "body").style.visibility = "hidden";
//             }
//         };