formInfo = () => {
    let nameSurname = document.getElementById("nameSurname").value
    let subject = document.getElementById("subject").value
    let email = document.getElementById("email").value
    let pNumber = +document.getElementById("pNumber").value

    if(exampleCheck1.checked){
        alert("Welcome " + nameSurname + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + pNumber + ".")
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested Name & Surname!  If you want to sign up, you better CHECK that newsletter box!")
    }

    document.getElementById("signUpForm").reset()
}