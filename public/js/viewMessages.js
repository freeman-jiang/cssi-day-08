const getMessages = () => {
    const passcode = document.querySelector('#passcode').value
    console.log(passcode)
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', snapshot => {
        const data = snapshot.val()    
        console.log(data);
    })
    
}