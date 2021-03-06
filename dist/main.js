// import { createBrotliCompress } from "zlib"




const inputName = document.getElementById('inputName')
const inputDob = document.getElementById('inputDob')
const inputEmail = document.getElementById('inputEmail')

const confirmName = document.getElementById('confirmName')
const confirmDob = document.getElementById('confirmDob')
const confirmEmail = document.getElementById('confirmEmail')
const confirmSelectedClass = document.getElementById('confirmSelectedClass')




function SaveBasicInfo() {
    // inputName to confirmation
    const createPTagForName = document.createElement('p')
    const createPTagForNameText = document.createTextNode(inputName.value)
    createPTagForName.appendChild(createPTagForNameText)
    confirmName.appendChild(createPTagForName)

    // input DOB confirmation
    const createPTagForDob = document.createElement('p')
    const dobNum = document.createTextNode(inputDob.value)
    createPTagForDob.appendChild(dobNum)
    confirmDob.appendChild(createPTagForDob)

    // input Email adress to confirmation
    const createPTagForEmail = document.createElement('p')
    const emailText = document.createTextNode(inputEmail.value)
    createPTagForEmail.appendChild(emailText)
    confirmEmail.appendChild(createPTagForEmail)

    // jump to next section
    let selectEventContaier = document.getElementById('selectEvent-contaier')
    selectEventContaier.scrollIntoView()
}

function startSignUp() {
    let basicInfo = document.getElementById('basicInfo')
    basicInfo.scrollIntoView()

}

function SaveSelectDateInfo() {
    // jump to next section
    let confirmInfo = document.getElementById('confirmInfo')
    confirmInfo.scrollIntoView()
}

function confirmInfoBtn() {
    // jump to next section
    let completedScreen = document.getElementById('completedScreen')
    completedScreen.scrollIntoView()
}

function goToTopPage() {
    window.location.reload();
    let topPage = document.getElementById('topPage')
    topPage.scrollIntoView()
}

fetch("./schedule.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const classSchedule = data.classSchedule;

        for (let i = 0; i < classSchedule.length; i++) {

            const className = classSchedule[i].className;
            const classDate = classSchedule[i].date;
            const classTime = classSchedule[i].time;
            let classCapacity = classSchedule[i].capacity;


            // append schedule data to divs
            // eventBox contains eventBox-left,eventBox-right
            const createDivForEventBox = document.createElement('div');
            createDivForEventBox.setAttribute("id", "eventBox");

            // append eventBox
            const chooseEventContainer = document.getElementById('chooseEvent-container');
            chooseEventContainer.appendChild(createDivForEventBox)


            // function createEventElement ( tag, idName, parent ) {
            //     const div = document.createElement('div');
            //     div.setAttribute("id", idName);
            //     parent.appendChild(createDivForEventBoxLeft)
            // }
            // createEventElement("div","eventBox-left", createDivForEventBox)



            // EventBoxLeft contains className-container,eventDetail
            const createDivForEventBoxLeft = document.createElement('div');
            createDivForEventBoxLeft.setAttribute("id", "eventBox-left");
            createDivForEventBox.appendChild(createDivForEventBoxLeft)


            // EventNameContainer contains eventName
            const createDivForEventNameContainer = document.createElement('div');
            createDivForEventNameContainer.setAttribute("id", "className-container");
            createDivForEventBoxLeft.appendChild(createDivForEventNameContainer)

            // create div for checkbox
            const createDivForCheckeBox = document.createElement('div');
            createDivForCheckeBox.setAttribute("id", "checkeBox-container");
            createDivForEventBox.insertBefore(createDivForCheckeBox, createDivForEventBoxLeft)

            // create check box
            const createCheckBox = document.createElement('input');
            createCheckBox.setAttribute("id", "checkeBox");
            createCheckBox.setAttribute("type", "checkbox");
            createDivForCheckeBox.appendChild(createCheckBox)



            // create p tag for EventName
            const createPForEventName = document.createElement('p');
            const EventNameText = document.createTextNode(className)
            createPForEventName.appendChild(EventNameText)
            createDivForEventNameContainer.appendChild(createPForEventName)
            createPForEventName.classList.add("eventNameP");




            // EventDetail contains eventDate-container, eventHour-containe
            const createDivForEventDetail = document.createElement('div');
            createDivForEventDetail.setAttribute("id", "eventDetail");
            createDivForEventBoxLeft.appendChild(createDivForEventDetail)

            // EventDateContainer contains eventDate
            const createDivForEventDateContainer = document.createElement('div');
            createDivForEventDateContainer.setAttribute("id", "eventDate-container");
            createDivForEventDetail.appendChild(createDivForEventDateContainer)
            // create p tag for event date
            const createPForEventDate = document.createElement('p');
            const EventDateText = document.createTextNode(classDate)
            createPForEventDate.appendChild(EventDateText)
            createDivForEventDateContainer.appendChild(createPForEventDate)
            // create p tag for discription "date"
            const createPForEventDateDiscription = document.createElement('p');
            const EventDateDiscriptionText = document.createTextNode("Date")
            createPForEventDateDiscription.appendChild(EventDateDiscriptionText)
            createDivForEventDateContainer.appendChild(createPForEventDateDiscription)

            // EventHourContainer contains eventHour
            const createDivForEventHourContainer = document.createElement('div');
            createDivForEventHourContainer.setAttribute("id", "eventHour-container");
            createDivForEventDetail.appendChild(createDivForEventHourContainer)
            // create p tag for event time
            const createPForEventTime = document.createElement('p');
            const EventTimeText = document.createTextNode(classTime)
            createPForEventTime.appendChild(EventTimeText)
            createDivForEventHourContainer.appendChild(createPForEventTime)
            // create p tag for discription "time"
            const createPForEventTimeDiscription = document.createElement('p');
            const EventTimeDiscriptionText = document.createTextNode("Time")
            createPForEventTimeDiscription.appendChild(EventTimeDiscriptionText)
            createDivForEventHourContainer.appendChild(createPForEventTimeDiscription)

            // EventBoxRight contains openingNum,openingNumComment
            const createDivForEventBoxRight = document.createElement('div');
            createDivForEventBoxRight.setAttribute("id", "eventBox-right");
            createDivForEventBox.appendChild(createDivForEventBoxRight)
            // create p tag for availability Num
            const createPForAvailabilityNum = document.createElement('p');
            const AvailabilityNum = document.createTextNode(classCapacity)
            createPForAvailabilityNum.appendChild(AvailabilityNum)
            createDivForEventBoxRight.appendChild(createPForAvailabilityNum)
            // create p tag for availability description
            const createPForAvailabilityDiscription = document.createElement('p');
            const AvailabilityDiscriptionText = document.createTextNode("opening")
            createPForAvailabilityDiscription.appendChild(AvailabilityDiscriptionText)
            createDivForEventBoxRight.appendChild(createPForAvailabilityDiscription)




            createDivForEventBox.addEventListener('click', () => {
                const selected = []
                selected.push(className, classDate, classTime)
               
                let checkBtn = document.createElement('button')
                createDivForCheckeBox.appendChild(checkBtn)

                let confirmSelectedClassDiv = document.getElementById('confirmSelectedClass')
                const createDivForSelectedClassInConfirm = document.createElement('div');
                const createPForSelectedClassInConfirm = document.createElement('p');

                // In confirmation create p tag for Class Name
                const SelectedClassTextContentClassName = selected[0].toString()
                const SelectedClassTextClassName = document.createTextNode(SelectedClassTextContentClassName)
                createDivForSelectedClassInConfirm.appendChild(SelectedClassTextClassName)

                // In confirmation create p tag for Class Date
                const createPForEventDateInConfirm = document.createElement('p')
                const SelectedClassTextContentClassDate = selected[1].toString()
                const SelectedClassTextClassDate = document.createTextNode(SelectedClassTextContentClassDate)
                createPForEventDateInConfirm.appendChild(SelectedClassTextClassDate)
                createDivForSelectedClassInConfirm.appendChild(createPForEventDateInConfirm)

                // In confirmation create p tag for Class Hour
                const createPForEventHourInConfirm = document.createElement('p');
                const SelectedClassTextContentClassTime = selected[2].toString()
                const SelectedClassTextClassTime = document.createTextNode(SelectedClassTextContentClassTime)
                createPForEventHourInConfirm.appendChild(SelectedClassTextClassTime)
                createDivForSelectedClassInConfirm.appendChild(createPForEventHourInConfirm)


                createDivForSelectedClassInConfirm.appendChild(createPForSelectedClassInConfirm)
                confirmSelectedClassDiv.appendChild(createDivForSelectedClassInConfirm)
                createDivForSelectedClassInConfirm.setAttribute("id", "confirmSelectedClassDiv");

                console.log(selected.toString())
                console.log(selected)


            })



            // if (classCapacity < 4) {
            //     createDivForEventBox.classList.add("lessThanFive");
            // } else if (classCapacity >= 5 && classCapacity < 9) {
            //     createDivForEventBox.classList.add("fiveToTen");
            // } else if (classCapacity >= 10 && classCapacity < 14) {
            //     createDivForEventBox.classList.add("TenToFif");
            // } else if (classCapacity >= 15 && classCapacity < 20) {
            //     createDivForEventBox.classList.add("fifToTwen");
            // } else if (classCapacity >= 20) {
            //     createDivForEventBox.classList.add("moreThan20");
            // }



        }
        // append a number for avaliable classed 
        let openingClassNum = document.getElementById('openingClassNum')
        const createPForOpeningClassNum = document.createElement('p');
        const openingClassNumText = document.createTextNode(classSchedule.length)
        createPForOpeningClassNum.appendChild(openingClassNumText)
        openingClassNum.appendChild(createPForOpeningClassNum)




    })





// const Datastore = require('nedb');
// // let database = new Datastore({ filename: 'database.db', autoload: true });
// let database = new Datastore('database.db');
// database.loadDatabase();
// database.insert({ name: "haq", name: 'he'})