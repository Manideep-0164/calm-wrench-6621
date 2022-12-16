let signUp = document.getElementById("snup");
let signIn = document.getElementById("snin");
let display = document.getElementById("displyname");
let overlay = document.getElementById("ovrly");
let clse = document.getElementById("rmve");
let form = document.getElementById("frm");
let userInput = JSON.parse(localStorage.getItem("inputdata"))||[];
let insider = document.getElementById("insider")

signUp.addEventListener("click",()=>{
    document.querySelector(".sign-up").classList.add("opensign-up");
    document.querySelector(".overlay").classList.add("showviewport")
});

overlay.addEventListener("click",()=>{
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".overlay").classList.remove("showviewport")
});

clse.addEventListener("click",function(){
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".overlay").classList.remove("showviewport")
});

// Sign-up 

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userData = {
        f_name:form.fname.value,
        l_name:form.lname.value,
        email:form.email.value,
        password:form.pswrd.value,
        number:form.number.value,
        month:form.month.value,
        date:form.date.value,
        zcode:form.zcode.value,
        checkbox:form.chkbx.value,
    }
    userInput.push(userData);
    localStorage.setItem("inputdata",JSON.stringify(userInput));
    display.innerText="Hi | "+userData.f_name+"🔸";
    insider.innerText="INSIDER "+0+" pts";
    insider.style.color="black";
    let advr = document.getElementById("advr").innerHTML="Have a Great Day";
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".overlay").classList.remove("showviewport")
})