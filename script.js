window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("container-fluid").style.top = "0";
  } else {
    document.getElementsByClassName("container-fluid").style.top = "-50px";
  }
}