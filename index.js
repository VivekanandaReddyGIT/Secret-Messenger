const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  const copyinput = document.querySelector("#link-input");
  copyinput.value = `${window.location}#${encrypted}`;
  copyinput.select();
});
