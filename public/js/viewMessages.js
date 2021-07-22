let count = 0
const message = document.querySelector('#message')
const button = document.querySelector('#viewMsg')

const getMessages = () => {
    const passcode = document.querySelector('#passcode').value
    
     if (count > 5) {
        message.innerHTML = 'You have made too many attempts. Please wait before trying again'
        message.style.color = 'red'
        button.disabled = true
        message.disabled = true
        setTimeout(() => {
            message.innerHTML = ''
            button.disabled = false
            message.disabled = false
            count = 0
        }, 5000)
        return
    }
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', snapshot => {
        let correct = false
        const data = snapshot.val() 
        message.innerHTML = ''   
        for (let id in data) {
            // console.log(data[id].passcode)
            if (data[id].passcode === passcode) {
                message.style.color = 'black'
                message.innerHTML += (`${data[id].message} <br />`)
                correct = true
            }
        }
        
        if (!correct) {
            message.innerHTML = 'Sorry. Your passcode is incorrect. Please try again.'
            message.style.color = 'red'
            count++
        }
        
    })

    // messagesRef.on('value', snapshot => {
    //     const data = snapshot.val()    
    //     for (let id in data) {
    //         // console.log(data[id].passcode)
    //         if (data[id].passcode === passcode) {
    //             message.style.color = 'black'
    //             message.innerHTML = (`${data[id].message} <br />`)
    //             return
    //         }
    //     }
        
    //     message.innerHTML = 'Sorry. Your passcode is incorrect. Please try again.'
    //     message.style.color = 'red'
    //     count++
    // })


}