let msgGlobalId = -1
const tbody = document.getElementsByTagName('tbody')[0]

if(tbody.children.length === 0){
    geraTabela()
}

editMsgSave.addEventListener('click', ()=>{
    let editMsgDesc = document.getElementById('editMsgDesc')
    let editMsgDetail = document.getElementById('editMsgDetail')
    
    if(msgGlobalId === -1){
        if(editMsgDesc.value === '' || editMsgDetail.value === ''){
            alert('Preencha ambos os campos!')
            return
        }

        const users = JSON.parse(localStorage.getItem('users'))
        const userLogin = JSON.parse(localStorage.getItem('userLogin'))
        const userLoginArrMsg = userLogin.arrMsg

        let arrMsg = [editMsgDesc.value,editMsgDetail.value]

        userLoginArrMsg.push(arrMsg)
        users[userLogin.id].arrMsg = userLoginArrMsg
        
        localStorage.setItem('userLogin',JSON.stringify(userLogin))
        localStorage.setItem('users', JSON.stringify(users))

        editMsgDesc.value = ''
        editMsgDetail.value = ''
        geraTabela()
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
        geraTabela()
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

//DECLARAÇÕES DE FUNCTIONS ========================================================


function geraTabela(){
    tbody.innerHTML = ''

    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userLoginArrMsg = userLogin.arrMsg

    if(userLoginArrMsg != null){
        userLoginArrMsg.forEach((e, i)=>{
            const row = document.createElement('tr')
            const msgId = document.createElement('td')
            const msgDesc = document.createElement('td')
            const msgDetail = document.createElement('td')
            let rowButtons = document.createElement('td')
            let btnMsgListEdit = document.createElement('button')
            let btnMsgListDelete = document.createElement('button')
            
            btnMsgListEdit = createBtnMsgListEdit(btnMsgListEdit)
            btnMsgListDelete = createBtnMsgListDelete(btnMsgListDelete)
            rowButtons = appendButtons(btnMsgListEdit, btnMsgListDelete, rowButtons)
    
            msgId.innerHTML = i+1
            msgDesc.innerHTML = e[0]
            msgDetail.innerHTML = e[1]
    
            appendElementsInRow(msgId, msgDesc, msgDetail, rowButtons, row)
    
            tbody.appendChild(row)
        })
    }
}

//Functions auxiliares geraTabela()
function editMsg(tableMsgListEdit){
    let editMsgDesc = document.getElementById('editMsgDesc')
    let editMsgDetail = document.getElementById('editMsgDetail')
    const msgRow = tableMsgListEdit.parentElement.parentElement
    const msgId = Number(msgRow.querySelector('td').innerHTML) - 1

    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userLoginArrMsg = userLogin.arrMsg

    editMsgDesc.value = userLoginArrMsg[msgId][0]
    editMsgDetail.value = userLoginArrMsg[msgId][1]

    msgGlobalId = msgId
    geraTabela()
}

function deleteMsg(tableMsgListDelete){
    const msgRow = tableMsgListDelete.parentElement.parentElement
    const msgId = Number(msgRow.querySelector('td').innerHTML) - 1

    const users = JSON.parse(localStorage.getItem('users'))
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    let userLoginArrMsg = userLogin.arrMsg

    delete userLogin.arrMsg[msgId]
    userLoginArrMsg = userLoginArrMsg.filter(e => e != null)
    
    users[userLogin.id].arrMsg = userLoginArrMsg
    userLogin.arrMsg = userLoginArrMsg

    localStorage.setItem('userLogin', JSON.stringify(userLogin))
    localStorage.setItem('users', JSON.stringify(users))
    geraTabela()
}

function createBtnMsgListEdit(btnMsgListEdit){
    btnMsgListEdit.classList.add('tableMsgListEdit')
    btnMsgListEdit.setAttribute('onclick','editMsg(this)')
    btnMsgListEdit.innerHTML = 'EDITAR'

    return btnMsgListEdit
}

function createBtnMsgListDelete(btnMsgListDelete){
    btnMsgListDelete.classList.add('tableMsgListDelete')
    btnMsgListDelete.setAttribute('onclick','deleteMsg(this)')
    btnMsgListDelete.innerHTML = 'EXCLUIR'

    return btnMsgListDelete
}

function appendButtons(btnMsgListEdit, btnMsgListDelete, rowButtons){
    rowButtons.appendChild(btnMsgListEdit)
    rowButtons.appendChild(btnMsgListDelete)

    return rowButtons
}

function appendElementsInRow(msgId, msgDesc, msgDetail, rowButtons, row){
    row.appendChild(msgId)
    row.appendChild(msgDesc)
    row.appendChild(msgDetail)
    row.appendChild(rowButtons)

    return row
}


