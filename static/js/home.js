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
