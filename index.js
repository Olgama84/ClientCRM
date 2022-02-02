let clients = [
    {
        id: 12455,
        surname: 'Скворцов',
        name: 'Денис',
        fatherName: 'Юрьевич',
        date: '2021-02-21',
        time: '12:41',
        changeDate: '2021-02-21',
        changeTime: '14:50',

        contacts: [
            {
                type: "email",
                value: "skvortsov@gmaol.com"
            },
            {
                type: "facebook",
                value: "https://facebook.com/id12346",
            },
            {
                type: "vk",
                value: "https://vk.com/id123456"
            },
            {
                type: "phone",
                value: "+7917888888"
            }
        ]
    },
    {
        id: 12456,
        surname: 'Куприянов',
        name: 'Арсений',
        fatherName: 'Валерьевич',
        date: '2021-01-28',
        time: '16:40',
        changeDate: '2021-02-02',
        changeTime: '17:01',

        contacts: [
            {
                type: "email",
                value: "skvortsov@gmaol.com"
            },
            {
                type: "phone",
                value: "+7917888888"
            }
        ]
    },
    {
        id: 12457,
        surname: 'Константинопольская',
        name: 'Людмила',
        fatherName: 'Александровна',
        date: '2021-01-20',
        time: '14:01',
        changeDate: '2021-01-21',
        changeTime: '14:59',

        contacts: [
            {
                type: "email",
                value: "skvortsov@gmaol.com"
            },
            {
                type: "facebook",
                value: "https://facebook.com/id12346",
            },
            {
                type: "phone",
                value: "+7917888888"
            }
        ]
    },
    {
        id: 12458,
        surname: 'Дмитриевский',
        name: 'Олег',
        fatherName: 'Алексеевич',
        date: '2021-01-14',
        time: '16:50',
        changeDate: '2021-01-18',
        changeTime: '16:55',

        contacts: [
            {
                type: "phone",
                value: "+7917888888"
            }
        ]
    },
    {
        id: 12459,
        surname: 'Александрова',
        name: 'Татьяна',
        fatherName: 'Павловна',
        date: '2021-01-11',
        time: '12:45',
        changeDate: '2021-01-11',
        changeTime: '14:11',

        contacts: [
            {
                type: "email",
                value: "skvortsov@gmaol.com"
            },
            {
                type: "vk",
                value: "https://vk.com/id123456"
            },
            {
                type: "phone",
                value: "+7917888888"
            }
        ]
    },
]

// showing students upon page load, loading delete buttons
window.onload = () => {
    loadTable(clients);
    loadDelete();
}
const table = document.getElementById('tbody');
const headers = document.querySelectorAll("th");

//create table with existing clients
function loadTable(clients) {
    let rows = '';

    let contactTypes = {
        "phone" : 'img/phone.svg',
        "email" : 'img/mail.svg',
        "vk": 'img/vk.svg',
        "facebook": 'img/fb.svg'
    }

    for (let client of clients) {
        const date = new Date(client.date).toLocaleDateString('ru-RU');
        const changedDate = new Date(client.changeDate).toLocaleDateString('ru-RU');

        rows += "<tr>";
        rows += "<td class='id-light'>" + client.id + "</td>";
        rows += "<td>" + client.surname + " " + client.name + " " + client.fatherName + "</td>";
        rows += "<td>" + date + " " + "<span class='light'>" + client.time + "</span>" + "</td>";
        rows += "<td>" + changedDate + " " + "<span class='light'>" + client.changeTime + "</span>" + "</td>";
        rows += "<td>" ;
        for(let contact of client.contacts) {
            let src = contactTypes[contact.type];
            let data = contact.value;
            rows += `<img src='${src}' data-attr="${data}">`;
        }
        rows += "</td>";
        rows += "<td>" + `<button class='change_btn' data-id ="${client.id}"><svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z\" fill=\"#9873FF\"/>\n" +
            "</svg> Изменить</button>` + "</td>";
        rows += "<td>" + `<button class='delete_btn' data-id ="${client.id}"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z\" fill=\"#F06A4D\"/>\n" +
            "</svg> Удалить</button>` + "</td>";

        rows += "</tr>";

        table.innerHTML = rows;

    }
}

//Opening modal window to add a new client
const modal = document.getElementById('modal');
let btn = document.getElementById('btnAdd');
let close = document.getElementById('close');
let cancel = document.getElementById("cancel")

btn.addEventListener("click", () => {
    modal.style.visibility = "visible";
})
close.addEventListener("click", () => {
    modal.style.visibility = "hidden";
})
cancel.addEventListener("click", () => {
    modal.style.visibility = "hidden";
})

//Display contact options
let btnContact = document.getElementById("btn-contact");
let selectContact = document.getElementById("select");

btnContact.onclick = function() {
    selectContact.style.display = "block";
}

//Adding new client to the table //TODO дописать функцию - добавить контакты нового клиента в таблицу и массив
function addClient() {
    let addSurname = document.getElementById("new-surname").value;
    let addName = document.getElementById("new-name").value;
    let addFatherName = document.getElementById("new-fatherName").value;
    let addContact = document.getElementById("new-contact").value;
    let selectItem = document.querySelectorAll(".select__item");

    // let addID = document.querySelectorAll(".id-light");//TODO здесь надо найти как достать ID  последнего клиента
    let id = 99;

    // adding date of client card created
    let date = new Date();
    let addDate = date.toLocaleDateString('ru-RU').slice(0, 10);

    let addHour = date.getHours();
    if (addHour.toString().length == 1) {
        addHour = "0" + addHour;
    }
    let addMinutes = date.getMinutes();
    if(addMinutes.toString().length == 1) {
        addMinutes = "0" + addMinutes;
    }

    let addTime = addHour + ":" + addMinutes;

    if(addName && addSurname && addContact) {
        clients.push({
            surname: addSurname,
            name: addName,
            fatherName: addFatherName,
            date: addDate,
            time: addTime,
            changeDate: '',
            changeTime: '',
        });
        // console.log(clients);

        //adding a new client to the table
        let tr = document.createElement("tr");
        let td1 = tr.appendChild((document.createElement("td")));
        let td2 = tr.appendChild((document.createElement("td")));
        let td3 = tr.appendChild((document.createElement("td")));
        let td4 = tr.appendChild((document.createElement("td")));
        let td5 = tr.appendChild((document.createElement("td")));
        let td6 = tr.appendChild((document.createElement("td")));
        let td7 = tr.appendChild((document.createElement("td")));

        td1.innerHTML = String(id++); //TODO разобраться как добавлять ID
        td2.innerHTML = addSurname + " " + addName + " " + addFatherName;
        td3.innerHTML = addDate + " " +"<span class='light'>" + addTime + "</span>";
        td4.innerHTML = " "; //TODO возможно добавть здесь дату создания нового клиента
        td5.innerHTML = " ";; //TODO добавить контакты нового клиента
        td6.innerHTML = "<button class='change_btn'><svg width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z\" fill=\"#9873FF\"/>\n" +
            "</svg> Изменить</button>";
        td7.innerHTML = "<button class='delete_btn'><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z\" fill=\"#F06A4D\"/>\n" +
            "</svg> Удалить</button>" ;

        table.appendChild(tr);
        modal.style.visibility = "hidden";

        loadDelete();
    }
}

//Sort table by clicking on headersCR
function sortTableByColumn(mainTable, column, asc = true) {
    let direction = asc ? 1 : -1;
    const tBody = mainTable.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sorting rows
    let sortedRows;
    sortedRows = rows.sort((a, b) => {

        let client1 = a.querySelector(`td:nth-child(${column + 1})`).innerHTML;
        let client2 = b.querySelector(`td:nth-child(${column + 1})`).innerHTML;

        //sorting by ID number
        if (column === 0) {
            return (Number(client1) < Number(client2))? (direction * 1) : (direction * -1);
        }
        //sorting by date added and changed
        if (column === 2 || column === 3) {
            let client1 = a.querySelector(`td:nth-child(${column + 1})`).innerHTML;
            let client2 = b.querySelector(`td:nth-child(${column + 1})`).innerHTML;

            let dateTime1 = client1.split(" ");
            let dateTime2 = client2.split(" ");

            let date1 = Date.parse(dateTime1[0].split('.').reverse().join("-"));
            let date2 = Date.parse(dateTime2[0].split('.').reverse().join("-"));

            return (date1 < date2)? (direction * 1) : (direction * -1);
        }

        return (client1 < client2)? (direction * 1) : (direction * -1);
    });

    //Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    //Re-add the sorted rows to the table
    tBody.append(...sortedRows);

    //Remember how the column is currently sorted
    headers.forEach(th => th.classList.remove("th-asc", "th-desc"));
    mainTable.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-asc", asc);
    mainTable.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-desc", !asc);
}

//Adding event listener to the headers
headers.forEach(header => {
    header.addEventListener("click", () => {
        let tableElement = header.parentElement.parentElement.parentElement;
        let headerIndex = Array.prototype.indexOf.call(header.parentElement.children, header);
        let currentDir = header.classList.contains("th-asc");
        header.classList.remove('default');

        sortTableByColumn(tableElement, headerIndex, !currentDir);
    });
});

//Deleting a client //TODO дописать функцию и удалять клиента по ID кнопки
function loadDelete() {
    const modalDelete = document.getElementById("modal-delete");
    const btnsDelete = document.querySelectorAll(".delete_btn");
    console.log(btnsDelete)

    btnsDelete.forEach( btn => {
        btn.addEventListener("click", () => {
            console.log('delete');
            modalDelete.style.visibility = "visible";
        })
    })
    //Closing delete button
    let closeDel = document.getElementById("delete_close");
    closeDel.addEventListener("click",() => {
        modalDelete.style.visibility = "hidden";
    })
    //Canceling delete action
    let cancelDel = document.getElementById("cancelDel");
    cancelDel.addEventListener("click", ()=> {
        modalDelete.style.visibility = "hidden";
    })

}




