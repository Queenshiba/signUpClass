// const Datastore = require('nedb');

// const database = new Datastore('database.db');
// database.loadDatabase();
// database.insert({name : "haru"})

const inputName = document.getElementById('inputName')
const inputDob = document.getElementById('inputDob')
const inputEmail = document.getElementById('inputEmail')

const confirmName = document.getElementById('confirmName')
const confirmDob = document.getElementById('confirmDob')
const confirmEmail = document.getElementById('confirmEmail')
const confirmDate = document.getElementById('confirmDate')
const confirmNote = document.getElementById('confirmNote')

console.log(inputDob.date)

function SaveBasicInfo() {
    // inputName to confirmation
    const createPTagForName = document.createElement('p')
    const createPTagForNameText = document.createTextNode(inputName.value)
    createPTagForName.appendChild(createPTagForNameText)
    confirmName.appendChild(createPTagForName)

        // input DOB confirmation
        const createPTagForDob = document.createElement('p')
        const createPTagForDobText = document.createTextNode(inputDob.value)
       
        createPTagForDob.appendChild(createPTagForDobText)
        confirmDob.appendChild(createPTagForDob)

            // input Email adress to confirmation
    const createPTagForEmail = document.createElement('p')
    const createPTagForEmailText = document.createTextNode(inputEmail.value)
    createPTagForEmail.appendChild(createPTagForEmailText)
    confirmEmail.appendChild(createPTagForEmail)
}
