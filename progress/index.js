const line = document.getElementById('line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


//------------------Option 1----------------------------
// let current = 1;

// function update() {
//     circles.forEach(function(circle,index){
//         if(index<current){
//                 circle.classList.add("active")
//         }
//         else{
//             circle.classList.remove("active");
//         }
//     })
//     const active = document.querySelectorAll(".active");
//     line.style.width = (((active.length-1)*0.95)/(circles.length-1)*100) + "%";

//     if(current === circles.length) {
//         next.disabled = true;
//     }
//     else if(current ===1){
//         prev.disabled = true
//     }
//     else{
//         next.disabled = false;
//         prev.disabled = false;
//     }
// }

// next.addEventListener('click',function(){
//     current++;
//     if(current>circles.length){
//         current = circles.length;
//     }
//     update(current);
// })

// prev.addEventListener('click',function(){
//     current--;
//     if(current<1){
//         current = 1;
//     }
//     update();
// })



//-------Option 2-(Easy to understand)-----------
let current = 1;

next.addEventListener('click',function(){
    current++;
    //
    if (current > circles.length){
        current  = circles.length;
    }
    //After click the button, current become to 2, so the nodelist = [1],which the second element.
    circles[current-1].classList.add("active");
    progress();
})

prev.addEventListener('click',function(){
    current--;
    if (current < 1){
        current = 1;
    }
    circles[current].classList.remove("active");
    progress();
})

function progress() {
    const active = document.querySelectorAll(".active");
    //each clcik will add/minus 19%
    //I set the full width to 95%,because when the width is 100%, the line will go over the div.
    line.style.width = (((active.length-1)*0.95)/(circles.length-1)*100) + "%";
    
    if(current === circles.length) {
        next.disabled = true;
    }else if(current ===1){
        prev.disabled = true
    }else{
        next.disabled = false;
        prev.disabled = false;
    }
}