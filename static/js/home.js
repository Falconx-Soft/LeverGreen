const create_account = document.getElementById("create-account");
create_account.addEventListener("click", function(){
  document.getElementById("login-modal").style.display = "none"

  document.getElementById("sign-up-modal").style.display = "block"
});


const login = document.getElementById("login-account-btn");
login.addEventListener("click", function(){
  document.getElementById("login-modal").style.display = "block"

  document.getElementById("sign-up-modal").style.display = "none"
});


const mobile_nav_btn = document.getElementById("mobile-nav-btn");
mobile_nav_btn.addEventListener("click", function(){
  console.log("Clicked")
  const mobile_nav_div = document.getElementById("mobile-nav-div");

  if(mobile_nav_div.classList.contains("hide")){
    mobile_nav_div.classList.remove("hide");
  }else{
    mobile_nav_div.classList.add("hide");
  }

});