const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_form = document.querySelector("#sign-up-form");
const container = document.querySelector(".section-login");

sign_up_form.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
