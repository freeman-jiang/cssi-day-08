const getMessages = () => {
    const passcode = document.querySelector('#passcode').value
    const message = document.querySelector('#message')
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', snapshot => {
        const data = snapshot.val()    
        for (let key in data) {
            if (key === passcode) {
                message.innerHTML = (data[key])
                return
            }

        }
    })
}