const onSubmit = () => {
    const passcode = document.querySelector('#passcode').value
    const message = document.querySelector('#message').value
    console.log(passcode, message)
    const payload = {
        passcode,
        message
        // this is JS shorthand object value notation
    }
    console.log(payload);
    firebase.database().ref().push(payload)
}