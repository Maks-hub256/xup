let submit = document.querySelector(".form__submit")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let message = document.querySelector("#message")

submit.onclick = (e) => {
    const checkForm = (elem) => {
        if(elem.value == "") {
            elem.style.border = "1px solid #E45851"
            elem.value = ""
            e.preventDefault()

            document.querySelector(`.form__${elem.id}-err`).innerHTML = "Error"
        }
        if(elem == email && elem.value.indexOf("@") == -1) {
            elem.style.border = "1px solid #E45851"
            elem.value = ""
            e.preventDefault()

            document.querySelector(`.form__${elem.id}-err`).innerHTML = "Error"
        }
    }
    checkForm(name)
    checkForm(email)
    checkForm(phone)
    checkForm(message)
}



