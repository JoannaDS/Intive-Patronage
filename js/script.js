window.onload=function(){
var modal = document.getElementById('myModal');
var hero_image = document.getElementById("heromodal");
// var hero_image2 = document.getElementById('hero2');
// var hero_image3 = document.getElementById('hero3');
// var hero_image4 = document.getElementById('hero4');
// var hero_image5 = document.getElementById('hero5');
// var hero_image6 = document.getElementById('hero6');
var span = document.getElementsByClassName("close")[0];

hero_image.onclick = function() {
    modal.style.display = "block";
  }
//   hero_image2.onclick = function() {
//     modal.style.display = "block";
//   }
//   hero_image3.onclick = function() {
//     modal.style.display = "block";
//   }
//   hero_image4.onclick = function() {
//     modal.style.display = "block";
//   }
//   hero_image5.onclick = function() {
//     modal.style.display = "block";
//   }

//   hero_image6.onclick = function() {
//     modal.style.display = "block";
//   }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}