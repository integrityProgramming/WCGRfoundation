var i = 0; //starting point
var images = [];
var time = 3000;

//image list
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';

//change Image
function changeImg(){
    document.hasChildNodes.src = images[i];

    if(i < images.length -1) {
        i++;
    } else {
        i = 0;

setTimeout("changeImg()", time);
window.onload = changeImg;    }
}

var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < link.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function openGolfDates(evt, golfDate) {
  //Declare all variables
  var i, tabcontent, tablinks;

  //Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0; i < tabcontent.length; i++) {
    tabcontent[i].getElementsByClassName.display = "none";
  }

  //Get all elements with class="tablinks" and remove the class "active"
  tablink = document.getElementsByClassName("tablinks");
  for (i =0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(golfOuting).style.display = "block";
  evt.currentTarget.className += " active";
}

       /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}