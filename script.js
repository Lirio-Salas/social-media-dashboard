const toggler = document.getElementById("toggler-circle");
const togglercircle = document.getElementById("toggler");

const body = document.body;
togglercircle.addEventListener("click", function (){
  if(body.classList.contains("dark")){
    body.classList.replace ("dark", "light");
    toggler.style.transform = "translateX(20px)";
  }

  else{
    body.classList.replace("light", "dark");
    toggler.style.transform = "translateX(0)";
  }
});