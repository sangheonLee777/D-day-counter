const button = document.querySelector(".but");
const year = document.querySelector(".target-year");
const month = document.querySelector(".target-month")
const date = document.querySelector(".target-date");
const message = document.querySelector(".d-day-message");
const container = document.querySelector(".d-day-container");
// const days = document.querySelector(".days");
// const hours = document.querySelector(".hours");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");

message.innerHTML = "<h3>D-day를 입력해라</h3>"
//container.style.display = 'none'


const dateFormMaker = function () {
  message.innerText = "";
  const yearValue = year.value;
  const monthValue = month.value;
  const dateValue = date.value;
  const dateInput = `${yearValue}-${monthValue}-${dateValue}`
  const nowDate = new Date ();
  const dayDate = new Date (dateInput).setHours(0,0,0,0);
  const count = (dayDate - nowDate) / 1000 ;
  
  // count === 0 이면 d-day 끝
  if (count <= 0) {
    message.innerHTML = "<h3>타이머 끝났다</h3>"
  }else if (isNaN(count)) {
    message.innerHTML = "<h3>입력 제대로해라</h3>"
  }
  else {
  // const countDate = Math.floor(count / 3600 / 24);
  // const countHours = Math.floor(count / 3600) % 24 ;
  // const countMinutes =  Math.floor(count / 60) % 60;
  // const countSec = Math.floor(count) % 60;

  const countObj = {
    countDate : Math.floor(count / 3600 / 24),
    countHours : Math.floor(count / 3600) % 24,
    countMinutes : Math.floor(count / 60) % 60,
    countSec : Math.floor(count) % 60,
  }

  const documentObj = {
    days : document.querySelector(".days"),
    hours : document.querySelector(".hours"),
    minutes : document.querySelector(".minutes"),
    seconds : document.querySelector(".seconds"),
  }

  const countArr = Object.keys(countObj);
  const documentArr = Object.keys(documentObj);



  for (let i = 0; i <countArr.length; i = i+1) {
    documentObj[documentArr[i]].innerText = countObj[countArr[i]]
  }


  console.log(yearValue,monthValue,dateValue);
  console.log(countObj.countDate, countObj.countHours , countObj.countMinutes , countObj.countSec);
  }

  



  // const countDate = Math.floor(count / 3600 / 24);
  // const countHours = Math.floor(count / 3600) % 24 ;
  // const countMinutes =  Math.floor(count / 60) % 60;
  // const countSec = Math.floor(count) % 60;
  // console.log(yearValue,monthValue,dateValue);
  // console.log(countDate, countHours , countMinutes , countSec);
}


button.addEventListener("click",dateFormMaker)
