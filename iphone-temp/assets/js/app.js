window.addEventListener('load', function () {

    console.log(parse('-2+5'))
    let timespan = document.querySelector('.time');

    let pId = this.setInterval(function () {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        timespan.innerHTML = `${hours.dateTime(2)}:${minutes.dateTime(2)}`;
    }, 1000)


    let calcOpen = document.querySelector('#calcOpen');
    calcOpen.addEventListener('click', function () {
        document.querySelector('.phone').classList.remove('phone-bg');
        document.querySelector('.content-menu').classList.remove('content-block');
        document.querySelector('.content-calculator').classList.add('content-block');
        document.querySelector('.content-calculator').classList.add('scaleIn');

    })

    let returnBtn = document.querySelector('.return-btn');
    returnBtn.addEventListener('click', function (e) {
        document.querySelector('.phone').classList.add('phone-bg');
        document.querySelector('.content-menu').classList.add('content-block');
        document.querySelector('.content-calculator').classList.remove('content-block');
        document.querySelector('.content-calculator').classList.remove('scaleIn');

    })


    let mainScreen = '';
    let operands = ['-', '+', '*', '/', '%']

    let outputScreen = document.querySelector('.output');

    let calcBtn = document.querySelectorAll('.calc-btn').forEach(function (e, index) {
        e.addEventListener('click', function () {


            // else if (outputScreen.value.length >= 9) {
            //     document.querySelector('.output').style.fontSize = '30px';
            // }

            mainScreen += e.value;
            outputScreen.value = mainScreen;
            if (e.value === '=') {
                outputScreen.value = ' ';

                if (mainScreen.length > 0) {
                    mainScreen = parse(getResult(mainScreen))
                }
                outputScreen.value = mainScreen;
            }
            else if (e.value === ' ') {
                outputScreen.value = ' ';
                mainScreen = ' ';
                console.log(mainScreen)
            }
            else if (mainScreen.includes('=')) {
                return;
            }

        })
    })






    let missedCall = 'Missed';
    let call = 'Call'
    let missedOr = [missedCall, call]

    function NewInfo(name, imgsrc, missedOr, time, number) {
        this.name = name;
        this.imgsrc = imgsrc;
        this.type = missedOr;
        this.time = time;
        this.number = number;
    }

    let person1 = new NewInfo('Amy', 'img/third.jpg', missedCall, '6:34', '+994558523696');
    let person2 = new NewInfo('Junn', 'img/second.jpg', call, '8:37', '+994558523696');
    let person3 = new NewInfo('Cassie', 'img/first.jpg', call, '8:34', '+994558523696');
    let person4 = new NewInfo('Walter', 'img/coldplay1.jpg', missedCall, '8:32', '+994558523696');
    let person5 = new NewInfo('Kit', 'img/coldplay2.jpg', call, '7:34', '+994558523696');
    let person6 = new NewInfo('Bob', 'img/coldplay2.jpg', missedCall, '8:34', '+994558523696');

    let persons = Array(person1, person2, person3, person4, person5, person6);

    function compare(a, b) {
        if (a.name > b.name) {
            return -1;
        }
        else if (a.name < b.name) {
            return 1
        }

    }

    let newArr = persons.sort(compare);
    let reversedArr = newArr.reverse()

    let allCalls = document.querySelector('#allcalls');
    let missed = document.querySelector('#missedCalls');

    const ul = document.querySelector('#callList');
    const ulChat = document.querySelector('#chatList');




    reversedArr.forEach(element => {
        let list = document.createElement('li');
        list.classList.add('liEl')
        ul.appendChild(list); // ul in calls 

        let listNode = list.cloneNode(true);
        ulChat.appendChild(listNode);

        let li = document.createElement('a');
        li.classList.add('listItem', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        list.appendChild(li);
        li.setAttribute('value', element.type);

        let liNode = li.cloneNode(true);

        listNode.appendChild(liNode);

        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info-img', 'd-flex', 'justify-content-start', 'align-items-center');
        li.appendChild(infoDiv);

        let infoDivNode = infoDiv.cloneNode(true);
        liNode.appendChild(infoDivNode);

        let callImg = document.createElement('img');
        callImg.classList.add('mr-2');
        infoDiv.appendChild(callImg);
        callImg.setAttribute('src', element.imgsrc);

        let callImgNode = callImg.cloneNode(true);
        infoDivNode.appendChild(callImgNode);

        let pName = document.createElement('p');
        pName.classList.add('p-name', 'mb-0');
        infoDiv.appendChild(pName);
        pName.innerHTML = element.name;

        let pNameNode = pName.cloneNode(true);
        infoDivNode.appendChild(pNameNode);

        let pTime = document.createElement('span')
        pTime.innerHTML = element.time;
        liNode.appendChild(pTime);



        if (element.type == missedCall) {
            pName.style.color = 'red';
        }
        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-info-circle')
        li.appendChild(icon);

    });

    missed.addEventListener('click', deleteChild)
    function deleteChild() {

        let li = document.querySelectorAll('.listItem');

        for (let i = 0; i < li.length; i++) {
            let prop = li[i].getAttribute('value')
            if (prop == call) {
                li[i].parentElement.style.display = 'none'
            }
            else {
                li[i].parentElement.style.display = 'block'
            }
        }
    }

    allCalls.addEventListener('click', deleteChild2)
    function deleteChild2() {

        let li = document.querySelectorAll('.listItem');

        for (let i = 0; i < li.length; i++) {
            let prop = li[i].getAttribute('value')
            if (prop == call) {
                li[i].parentElement.style.display = 'block'
            }
        }
    }

    allCalls.addEventListener('click', () => {
        if (allCalls.classList.contains('active') == false) {
            allCalls.classList.add('active');
            missed.classList.remove('active');
        }
    })
    missed.addEventListener('click', () => {
        if (missed.classList.contains('active') == false) {
            missed.classList.add('active');
            allCalls.classList.remove('active');
        }
    })

    let block = document.querySelectorAll('.phone d-block');
    block.forEach(el => {
        el.classList.remove('d-block')
    })

    let innerCall = document.querySelector('#calls');
    let innerChats = document.querySelector('#chats');

    let a = document.querySelectorAll('.bottom a');
    for (let i = 0; i < a.length; i++) {

        a[i].addEventListener('click', (e) => {
            let href = a[i].getAttribute('href');
            let inners = document.querySelector(`${href}`);



            let allInners = document.querySelectorAll('.inner');
            allInners.forEach(el => {
                el.classList.replace('d-block', 'd-none')
            })
            if (inners.classList.contains('block') == false) {
                inners.classList.remove('d-none');
                inners.classList.add('d-block');

            }


        });

        a[i].addEventListener('click', () => {
            a.forEach(el => {
                el.classList.remove('active')
            })
            if (a[i].classList.contains('active') == false) {
                a[i].classList.add('active');
            }
            else {
                a[i].classList.add('active');
            }
        })
    }

    const contactList = document.querySelector('#contactUl');
    const formcontact = document.querySelector('#formcontact')
    let addcontactBtn = document.querySelector('#contactList');
    addcontactBtn.addEventListener('click', () => {
        if (contactList.classList.contains('d-block') == true) {
            contactList.classList.replace('d-block', 'd-none');
            formcontact.classList.replace('d-none', 'd-block');
        }


    })

    let add = document.querySelector('#add')

    add.addEventListener('click', contactInfo);

    add.addEventListener('click', () => {
        if (formcontact.classList.contains('d-block') == true) {
            formcontact.classList.replace('d-block', 'd-none');
            contactList.classList.replace('d-none', 'd-block');
        }

    })




    let newContact = new Array();

    function Contact(name, number) {
        this.name = name;
        this.number = number;
    }

    let contactSystem = localStorage.getItem('contact');

    if (contactSystem != null) {
        newContact = JSON.parse(contactSystem);
        loadinfo(newContact);
    }

    function contactInfo() {
        let nameValue = document.querySelector('#nameInput').value;
        let numberValue = document.querySelector('#numberInput').value;
        let newCont = new Contact(nameValue, numberValue);
        newContact.push(newCont);

        let contactSystem = JSON.stringify(newContact);
        localStorage.setItem('contact', contactSystem)


        loadinfo(newContact)
    }

    function loadinfo(newContact) {

        newContact.forEach(el => {
            let li = document.createElement('li');
            contactList.appendChild(li);

            let p = document.createElement('p');
            p.textContent = el.name;
            li.appendChild(p)

            let p2 = document.createElement('p');
            p2.textContent = el.number;
            li.appendChild(p2)
        })
    }

})



Number.prototype.dateTime =
    function (length) {
        let currentlength = this.toString().length;
        length = length - currentlength;
        return `${'0'.repeat(length)}${this.toString()}`;

    }


function parse(str) {
    let result = Function(`'use strict'; return (${str})`)()
    return result.toString().substr(0, 6);
}

function getResult(e) {
    return e.split('').filter(function (value, index, arr) {
        return value.indexOf('=') == -1;
    }).join('');
}