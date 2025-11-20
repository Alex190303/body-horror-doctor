const first_name_output = document.querySelector("#first_name_output");
const last_name_output = document.querySelector("#last_name_output");
const age_output = document.querySelector("#age_output");
const dato_behandling_output = document.querySelector("#dato_behandling_output");
const forvraengning_output = document.querySelector("#forvraengning_output");
const monster_output = document.querySelector("#monster_output");
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formData = new FormData(form);

  first_name_output.textContent = formData.get("fornavn");
  last_name_output.textContent = formData.get("efternavn");
  age_output.textContent = formData.get("alder");
  dato_behandling_output.textContent = formData.get("date");
  forvraengning_output.textContent = formData.getAll("checkbox").join(" ,");
  monster_output.textContent = formData.getAll("monstre");

  form.reset();
}

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
