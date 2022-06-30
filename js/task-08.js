const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert(`Warning that all fields must be filled!`)
  } 
};
console.log(formRef.textContent);
