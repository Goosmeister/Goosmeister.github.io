/* scrol animation */
window.addEventListener("scroll", () => {
      document.body.style.setProperty
      ("--scroll",window.pageYOffset / (document.body.offsetHeight - window.innerHeight));},false);
  /* burgermenu*/

function openMenu() {
      var b = document.getElementById("toggle");
      var cross = document.getElementById("crossMain");
      var burger = document.getElementById("burgerMain");
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
function closeMenu() {
      var toggle = document.getElementById("toggle").checked = 1;
      var cross = document.getElementById("crossMain");
      var burger = document.getElementById("burgerMain");
      var cross1 = document.getElementById("cross1");
      var cross2 = document.getElementById("cross2");
      cross.style.display = "none";
      burger.style.display = "block";
      cross1.classList.remove("cross1");
      cross2.classList.remove("cross2");
      cross1.classList.add("crossreverse1");
      cross2.classList.add("crossreverse2");
    }
       