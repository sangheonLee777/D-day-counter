const button = document.querySelector(".but");
const year = document.querySelector(".target-year");
const month = document.querySelector(".target-month")
const date = document.querySelector(".target-date");
const message = document.querySelector(".d-day-message");
const container = document.querySelector(".d-day-container");
const timerFin = document.querySelector(".timer-finish")
// const days = document.querySelector(".days");
// const hours = document.querySelector(".hours");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");

message.innerHTML = "<h3>D-day를 입력해라</h3>"
container.style.display = 'none'
const intervalIdArr = [];

const valueBox = function () {
  const yearValue = year.value;
  const monthValue = month.value;
  const dateValue = date.value; 
  const dateInput = `${yearValue}-${monthValue}-${dateValue}`
  return dateInput;
}


const dateFormMaker = function (targetDateInput) {
  const nowDate = new Date ();
  const dayDate = new Date (targetDateInput).setHours(0,0,0,0);
  const count = (dayDate - nowDate) / 1000 ;
  
  // count === 0 이면 d-day 끝
  if (count <= 0) {
    container.style.display = 'none'
    message.innerHTML = "<h3>타이머 끝났다</h3>"
    message.style.display = 'flex'
    setClearInterval()
    return;
  }else if (isNaN(count)) {
    container.style.display = 'none'
    message.innerHTML = "<h3>입력 제대로해라</h3>"
    message.style.display = 'flex'
    setClearInterval()
    return;
  }
  else {
    //원래 대로 하던 방식 하나 하나 지정해서 innerText 로 값을 주기
  // const countDate = Math.floor(count / 3600 / 24);
  // const countHours = Math.floor(count / 3600) % 24 ;
  // const countMinutes =  Math.floor(count / 60) % 60;
  // const countSec = Math.floor(count) % 60;
  // const days = document.querySelector(".days")
  // const hours = document.querySelector(".hours")
  // const minutes =  document.querySelector(".minutes")
  // const  seconds = document.querySelector(".seconds")
  //days.innerText = countDate;  

  // 기본 반복문 숫자와 변수를 둘다 객체로 만든뒤 배열로 변환하는 작업을 거쳐 다시 객체로 만들어 반복문으로 사용한다
  // for (let i = 0; i <countArr.length; i = i+1) {
  //   documentObj[documentArr[i]].innerText = countObj[countArr[i]]
  // 

  const countObj = {
    countDate : Math.floor(count / 3600 / 24),
    countHours : Math.floor(count / 3600) % 24,
    countMinutes : Math.floor(count / 60) % 60,
    countSec : Math.floor(count) % 60,
  }

  // const documentObj = {
  //   days : document.querySelector(".days"),
  //   hours : document.querySelector(".hours"),
  //   minutes : document.querySelector(".minutes"),
  //   seconds : document.querySelector(".seconds"),
  // }

  const documentArr = ['.days','.hours','.minutes','.seconds']

  const countArr = Object.keys(countObj);
 // const documentArr = Object.keys(documentObj);

const format = function (time) {
  if(time<10) {
    return '0' + time;
  }else {
    return time;
  }
}

// html 에서 js 로 끌고오는 반복작업을 배열로 합친뒤 for of 문으로 반복해 줄인다.
 let i = 0;
  for(let tag of documentArr) {
    const renamingTime = format(countObj[countArr[i]]);
    // console.log(renamingTime);
    document.querySelector(tag).innerText = renamingTime;
    i++
  }



// documentObj를 배열로 만드는 작업 없이 for in 문을 활용하여 줄이는 반복문
  // let i = 0  
  // for(let key in documentObj) {
  //   documentObj[key].innerText = countObj[countArr[i]]
  //   i++;
  // }

  // console.log(yearValue,monthValue,dateValue);
  // console.log(countObj.countDate, countObj.countHours , countObj.countMinutes , countObj.countSec);
  }



  



  // const countDate = Math.floor(count / 3600 / 24);
  // const countHours = Math.floor(count / 3600) % 24 ;
  // const countMinutes =  Math.floor(count / 60) % 60;
  // const countSec = Math.floor(count) % 60;
  // console.log(yearValue,monthValue,dateValue);
  // console.log(countDate, countHours , countMinutes , countSec);
}


const starter = function () {
  const targetDateInput = valueBox();
  container.style.display = 'flex'
  message.style.display = 'none'
  setClearInterval()
  dateFormMaker(targetDateInput)
  const intervalId = setInterval(()=>{dateFormMaker(targetDateInput)},1000);
  intervalIdArr.push(intervalId);
}

button.addEventListener("click",starter)


const setClearInterval = function () {
  for(i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i])
  }
}

const resetTimer = function () {
  message.innerHTML = "<h3>D-day를 입력해라</h3>"
  container.style.display = 'none'
  message.style.display = 'flex'
  setClearInterval()
}

timerFin.addEventListener("click",resetTimer)

