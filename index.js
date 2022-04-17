// // LANDING PAGE

//
//
document.querySelector(".hello").addEventListener("mouseover", helloTransition);

function helloTransition() {
  document.querySelector(".hello").innerHTML = "About";
  document.querySelector(".hello").style.color = "white";
  gsap.to(".hello", {duration: 2, x: 50, ease: "bounce"});
 
}



document.querySelector(".hello").addEventListener("mouseout", helloReverse);

function helloReverse() {
  document.querySelector(".hello").innerHTML = "Hello";
  gsap.to(".hello", {duration: 2, x: -7, ease: "bounce"});

}


document.querySelector(".iam").addEventListener("mouseover", iAmTransition)

function iAmTransition() {
  document.querySelector(".iam").innerHTML = "Projects";
  document.querySelector(".iam").style.color = "red";
  gsap.to(".iam", {duration: 2, x: 50, ease: "bounce"});
  
}

document.querySelector(".iam").addEventListener("mouseout", iAmReverse)

function iAmReverse() {
  document.querySelector(".iam").innerHTML = "I am";
  document.querySelector(".iam").style.color = "red";
  gsap.to(".iam", {duration: 2, x: -7, ease: "bounce"});

}

document.querySelector(".wisdom").addEventListener("mouseover", wisdomTransition);

function wisdomTransition() {
  document.querySelector(".wisdom").innerHTML = "Contact";
  document.querySelector(".wisdom").style.color = "red";
  gsap.to(".wisdom", {duration: 2, x: 50, ease: "bounce"});
  

}

document.querySelector(".wisdom").addEventListener("mouseout", wisdomReverse);

function wisdomReverse() {
  document.querySelector(".wisdom").innerHTML = "Wisdom";
  document.querySelector(".wisdom").style.color = "red";
  gsap.to(".wisdom", {duration: 2, x: -7, ease: "bounce"});
  
}
//
//
// ABOUT-section

// var noOfBH = document.querySelectorAll(".BH").length;

//  for (var i = 0; i < noOfBH; i++ ) {

//   document.querySelectorAll(".BH")[i].addEventListener("mouseover", function() {

    
//       // alert("I was hovered");
//       document.querySelector(".BH").style.color = "white";
      
//     });

//  }

 
//  var noOfSH = document.querySelectorAll(".SH").length;

//  for (var i = 0; i < noOfSH; i++ ) {

//   document.querySelectorAll(".SH")[i].addEventListener("mouseover", function() {

    
//       // alert("I was hovered");
//       document.querySelector(".SH").style.color = "red";
      
//     });

//  }

