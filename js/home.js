let msgGlobalId = -1

editMsgSave.addEventListener('click', ()=>{
    let editMsgDesc = document.getElementById('editMsgDesc')
    let editMsgDetail = document.getElementById('editMsgDetail')
    if(msgGlobalId === -1){
        if(editMsgDesc.value === '' || editMsgDetail.value === ''){
            alert('Preencha ambos os campos!')
            return
        }

        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const userLoginArrMsg = userLogin.arrMsg
        let arrMsg = [editMsgDesc.value,editMsgDetail.value]
        userLoginArrMsg.push(arrMsg)
        localStorage.setItem('userLogin',JSON.stringify(userLogin))

        editMsgDesc.value = ''
        editMsgDetail.value = ''
    }else{
        if(editMsgDesc.value === '' || editMsgDetail.value === ''){
            alert('Preencha ambos os campos!')
            
            return
        }

        const users = JSON.parse(localStorage.getItem('users'))
        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const userLoginArrMsg = userLogin.arrMsg

        userLoginArrMsg[msgGlobalId][0] = editMsgDesc.value
        userLoginArrMsg[msgGlobalId][1] = editMsgDetail.value
        
        users[userLogin.id].arrMsg = userLoginArrMsg

        localStorage.setItem('userLogin', JSON.stringify(userLogin))
        localStorage.setItem('users', JSON.stringify(users))

        editMsgDesc.value = ''
        editMsgDetail.value = ''
        msgGlobalId = -1
    }
})

editMsgCancel.addEventListener('click',()=>{
    let editMsgDesc = document.getElementById('editMsgDesc')
    let editMsgDetail = document.getElementById('editMsgDetail')
    if(msgGlobalId === -1){
        editMsgDesc.value = ''
        editMsgDetail.value = ''
    }else{
        editMsgDesc.value = ''
        editMsgDetail.value = ''
        msgGlobalId = -1
    }
})

function editMsg(tableMsgListEdit){
    let editMsgDescVal = document.getElementById('editMsgDesc')
    let editMsgDetailVal = document.getElementById('editMsgDetail')
    const msgRow = tableMsgListEdit.parentElement.parentElement
    const msgId = Number(msgRow.querySelector('td').innerHTML) - 1

    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userLoginArrMsg = userLogin.arrMsg

    editMsgDescVal.value = userLoginArrMsg[msgId][0]
    editMsgDetailVal.value = userLoginArrMsg[msgId][1]

    msgGlobalId = msgId
}

function deleteMsg(tableMsgListDelete){
    const msgRow = tableMsgListDelete.parentElement.parentElement
    const msgId = msgRow.querySelector('td').innerHTML
}