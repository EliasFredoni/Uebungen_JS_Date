/*****Lev 1.1******/

let date1 = new Date();
console.log(date1);

let date2 = new Date("September 2, 2019 09:00:00");
console.log(date2);

let date3 = new Date(0)
console.log(date3);

let date4 = new Date(31556908800)
console.log(date4)

let date5 = new Date(86400000)
console.log(date5)

console.clear()                              //Konsole wurde geleert!

/*******LEV 1.2*****/

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let newDate = new Date("Friday Februar 05, 2021 21:05:14")

console.log(new Date(newDate))
console.log(newDate.getFullYear())
console.log(newDate.getMonth(monate[5]) + " Monat ");
console.log(newDate.getDay() + " Tag ")
console.log(newDate.getHours() + " Stunde ")
console.log(newDate.getMinutes() + " Minute ")
console.log(wochenTag[5])
console.log(monate[newDate.getMonth()]);

/********LEV 1.3********/

let setDate = new Date();
console.log(setDate);

setDate.setFullYear(2222)
console.log(setDate)
setDate.getDate(15)
console.log(setDate)

/*********LEV 1.4*******/
let jahr = [
    2016,
    2017
]

/*let tageImMonat = (monate, jahr) => {
    console.log(tageImMonat(1, 2016)); //31
    console.log(tageImMonat(2, 2016)); //29
    console.log(tageImMonat(2, 2017)); //28
    console.log(tageImMonat(12, 2017)); //31
}

tageImMonat(12, 2016);
tageImMonat(2, 2016);
tageImMonat(2, 2017);
tageImMonat(12, 2017);*/

/*********LEV 1.5*******/

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

console.log(date.getMonth(list));


