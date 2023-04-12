const button = document.querySelector(".but");
const year = document.querySelector(".target-year");
const month = document.querySelector(".target-month")
const date = document.querySelector(".target-date")


const dateFormMaker = function () {
  const yearValue = year.value;
  const monthValue = month.value;
  const dateValue = date.value;
  const dateInput = `${yearValue}-${monthValue}-${dateValue}`
  const nowDate = new Date ();
  const dayDate = new Date (dateInput).setHours(0,0,0,0);
  const count = (dayDate - nowDate) / 1000 ;
  
  // count === 0 이면 d-day 끝
  if (count === 0 || count < 0) {
    console.log('입력 다시해라');
  }else {
    const countDate = Math.floor(count / 3600 / 24);
  const countHours = Math.floor(count / 3600) % 24 ;
  const countMinutes =  Math.floor(count / 60) % 60;
  const countSec = Math.floor(count) % 60;
  console.log(yearValue,monthValue,dateValue);
  console.log(countDate, countHours , countMinutes , countSec);
  }

  


  // const countDate = Math.floor(count / 3600 / 24);
  // const countHours = Math.floor(count / 3600) % 24 ;
  // const countMinutes =  Math.floor(count / 60) % 60;
  // const countSec = Math.floor(count) % 60;
  // console.log(yearValue,monthValue,dateValue);
  // console.log(countDate, countHours , countMinutes , countSec);
}


button.addEventListener("click",dateFormMaker)

