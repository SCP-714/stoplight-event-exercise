//                    TIME TO CODE                           //

// const stopBulb = document.querySelector("#stopLight");
// const stopButton = document.querySelector("#stopButton");


// stopLight.addEventListener("click", function(){
//   // make it trigger .stop
//   stopBulb.style.backgroundColor="red";
//     });

//       stopLight.addEventListener("dblclick", function(){
//         // make it trigger .stop
//         stopBulb.style.backgroundColor="black";
//           });


// const slowBulb = document.querySelector("#slowLight");
// const slowLight = document.querySelector("#slowButton");


//  slowLight.addEventListener("click", function(){
// // // make it trigger .slow
// slowBulb.style.backgroundColor="orange";
//    });
   
//    slowLight.addEventListener("dblclick", function(){
//     // make it trigger .stop
//     slowBulb.style.backgroundColor="black";
//       });



//       const goBulb = document.querySelector("#goLight");
//       const goLight = document.querySelector("#goButton");
       

//       goLight.addEventListener("click", function(){
//       // // make it trigger .slow
//       goBulb.style.backgroundColor="green";
//          });
      
//          goLight.addEventListener("dblclick", function(){
//           // make it trigger .stop
//           goBulb.style.backgroundColor="black";
//             });




var stopButton = document.querySelector('#stopButton');
var stopLight = document.querySelector('#stopLight');

stopButton.addEventListener('click', function(){
    if(stopLight.classList.contains('stop')){
        stopLight.classList.remove('stop');
    }else{
        stopLight.classList.add('stop');
    }
});





var slowButton = document.querySelector('#slowButton');
var slowLight = document.querySelector('#slowLight');

slowButton.addEventListener('click', function(){
    if(slowLight.classList.contains('slow')){
        slowLight.classList.remove('slow');
    }else{
        slowLight.classList.add('slow');
    }
});






var goButton = document.querySelector('#goButton');
var goLight = document.querySelector('#goLight');

goButton.addEventListener('click', function(){
    if(goLight.classList.contains('go')){
        goLight.classList.remove('go');
    }else{
        goLight.classList.add('go');
    }
});