function opentab(tabname) {
  var i;
  var x = document.getElementsByClassName("containers");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].className = x[i].className.replace(" w3-animate-zoom", "");
  }

  document.getElementById(tabname).style.display = "block";
  document.getElementsByClassName("containers") += " w3-animate-zoom";
}
