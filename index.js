const button = document.querySelector(".but");
const year = document.querySelector(".target-year");
const month = document.querySelector(".target-month")
const date = document.querySelector(".target-date")




const dateFormMaker = function () {
  const yearValue = year.value;
  const monthValue = month.value;
  const dateValue = date.value;
  const dateInput = yearValue + '-' + monthValue + '-' + dateValue
  const nowDate = new Date ();
  const dayDate = new Date (dateInput)
  const count = (dayDate - nowDate) / 1000 ;
  const countDate = Math.floor(count / 3600 / 24);
  const countHours = Math.floor(count / 3600) % 24 ;
  const countMinutes =  Math.floor(count / 60) % 60;
  const countSec = Math.floor(count) % 60;
  console.log(yearValue,monthValue,dateValue);
  console.log(countDate, countHours , countMinutes , countSec);
}


button.addEventListener("click",dateFormMaker)

function getTime(){
  const dDay = new Date('2023-4-15');
  const today = new Date();
  const difference = dDay.getTime() - today.getTime(),
      // Ms 단위로 변환
      secInMs = Math.floor(difference / 1000),
      minInMs = Math.floor(secInMs / 60),
      hourInMs = Math.floor(minInMs / 60),
      days = Math.floor(hourInMs / 24),
      // 남은 시간 계산
      seconds = secInMs % 60,
      minutes = minInMs % 60,
      hours = minutes % 24;
  // console.log(secInMs, minInMs , hourInMs , days);
  console.log(days, hours ,minutes, seconds);
  // console.log(minInMs, minutes);
  // console.log(hours);
}

//getTime()