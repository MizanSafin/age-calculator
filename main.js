let resultEl = document.querySelector(".result")
let birthDay = document.querySelector("#birthday")
let btnEl = document.querySelector(".submit")

btnEl.addEventListener("click",()=>{
    let currentDate = new Date();
    if(birthDay.value === ""){
        return;
    }
    let birthDate = new Date(birthDay.value);
    let year = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    
    if(month < 0 || (month ===0 && currentDate.getDate() < birthDate.getDate())){
        year --;
    }
    resultEl.textContent = `You are now ${year} ${year<=1 ? "year" : "years"}  old.`
})
