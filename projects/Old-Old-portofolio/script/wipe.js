
function projects() {
    var x = document.getElementById("hide-projects");
    var y = document.getElementById("about-container");
    var cols = document.getElementsByClassName('bg');
    var z = document.getElementById("contact");
    var bg = document.getElementsByClassName("text-shelf");
    var menuColor = document.getElementById("btn3").classList.add("btn3");
    var menuColor = document.getElementById("btn2").classList.remove("btn2");
    var menuColor = document.getElementById("btn1").classList.remove("btn1");
  for(i = 0; i < cols.length; i++) {
    cols[i].style.background = 'linear-gradient(-70deg, #6a040f 50%, #ffba08 50%)';
  }
  for(i = 0; i < bg.length; i++) {
    bg[i].style.background = '#6a040f';
  }
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";  
        z.style.display = "none";
        rect.style.fill = "white";
        

      } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      }
  }
  function contacts() {
  var x = document.getElementById("hide-projects");
  var y = document.getElementById("about-container");
  var cols = document.getElementsByClassName('bg');
  var z = document.getElementById("contact");
  var bg = document.getElementsByClassName("text-shelf");
  var menuColor = document.getElementById("btn3").classList.remove("btn3");
  var menuColor = document.getElementById("btn2").classList.add("btn2");
  var menuColor = document.getElementById("btn1").classList.remove("btn1");
  for(i = 0; i < cols.length; i++) {
    cols[i].style.background = 'linear-gradient(-70deg, #6b705c 50%, #ffe8d6 50%)';
  }
    for(i = 0; i < bg.length; i++) {
      bg[i].style.background = '#6b705c';
  } 
      if (x.style.display === "block" || y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";  
        z.style.display = "block";
        
      } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";

      }
  }
  function home() {
    var x = document.getElementById("hide-projects");
  var y = document.getElementById("about-container");
  var cols = document.getElementsByClassName('bg');
  var z = document.getElementById("contact");
  var bg = document.getElementsByClassName("text-shelf");
  var menuColor = document.getElementById("btn3").classList.remove("btn3");
  var menuColor = document.getElementById("btn2").classList.remove("btn2");
  var menuColor = document.getElementById("btn1").classList.add("btn1");
  for(i = 0; i < cols.length; i++) {
    cols[i].style.background = 'linear-gradient(-70deg,#1b1b1b 50%, #ffffff  50%)';
  }
    for(i = 0; i < bg.length; i++) {
      bg[i].style.background = 'rgb(64, 64, 65)';
  } 
      if (x.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";  
        z.style.display = "none";
      } else {
       
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
      }
  }
  function rectChange() {
   
    var b = document.getElementById("toggle");
    var cross = document.getElementById("cross-main");
    var burger = document.getElementById("burger-main");
    var cross1 = document.getElementById("cross1");
    var cross2 = document.getElementById("cross2");
    if( toggle.checked == 0){
      cross.style.display = "block";
      burger.style.display = "none";
      cross1.classList.add("cross1");
      cross2.classList.add("cross2");
    } else {
      cross.style.display = "none";
      burger.style.display = "block";
      cross1.classList.remove("cross1");
      cross2.classList.remove("cross2");
    }
    
  }
  function closeIt() {
    var toggle = document.getElementById("toggle").checked = 1;
    var cross = document.getElementById("cross-main");
    var burger = document.getElementById("burger-main");
    var cross1 = document.getElementById("cross1");
    var cross2 = document.getElementById("cross2");
    cross.style.display = "none";
    burger.style.display = "block";
    cross1.classList.remove("cross1");
    cross2.classList.remove("cross2");
  }