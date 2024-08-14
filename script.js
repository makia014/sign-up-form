const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const pwd = document.querySelector("#password");
    const pwdConf = document.querySelector("#confirm-password");
    const message = document.querySelector(".invalid-match");

    if (!pwd.value || !pwdConf.value || pwd.value !== pwdConf.value) {
      message.classList.remove("hidden");
      pwd.classList.add("invalid");
      pwdConf.classList.add("invalid");
    } else {
      message.classList.add("hidden");
      pwd.classList.remove("invalid");
      pwdConf.classList.remove("invalid");
    }
  });
});
