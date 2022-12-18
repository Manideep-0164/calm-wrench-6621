let signUp = document.getElementById("snup");
let signIn = document.getElementById("snin");
let display = document.getElementById("displyname");
let overlay = document.getElementById("ovrly");
let clse = document.getElementById("rmve");
let form = document.getElementById("frm");
let userInput = JSON.parse(localStorage.getItem("inputdata"))||[];
let insider = document.getElementById("insider")
let exit = document.getElementById("exit");
let invalid = document.getElementById("invalid");
let snform = document.getElementById("snform");
let login = document.getElementById("sign-in");
let rmbtn = document.querySelector(".btns");
let pushit = document.getElementById("incld")
let signbtn = document.createElement("button");
let userData = {};

function signup(){
    document.querySelector(".sign-up").classList.add("opensign-up");
    document.querySelector(".overlay").classList.add("showviewport");
    document.querySelector(".signin").classList.remove("showsignin");
}
signUp.addEventListener("click",()=>{
    document.querySelector(".sign-up").classList.add("opensign-up");
    document.querySelector(".overlay").classList.add("showviewport")
});
signIn.addEventListener("click",()=>{
    document.querySelector(".signin").classList.add("showsignin");
    document.querySelector(".overlay").classList.add("showviewport")
})

overlay.addEventListener("click",()=>{
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".signin").classList.remove("showsignin");
    document.querySelector(".overlay").classList.remove("showviewport");
});

clse.addEventListener("click",function(){
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".overlay").classList.remove("showviewport")
});

exit.addEventListener("click",function(){
    document.querySelector(".signin").classList.remove("showsignin");
    document.querySelector(".overlay").classList.remove("showviewport")
});

// Sign-up 

form.addEventListener("submit",(e)=>{
    e.preventDefault();
     userData = {
        f_name:form.fname.value,
        l_name:form.lname.value,
        email:form.email.value,
        password:form.pswrd.value,
        number:form.number.value,
        month:form.month.value,
        date:form.date.value,
        checkbox:form.chkbx.value,
    }
    userInput.push(userData);
    localStorage.setItem("inputdata",JSON.stringify(userInput));
    display.innerText="Hi | "+userData.f_name+"🔸";
    insider.innerText="INSIDER "+0+" pts";
    insider.style.color="black";
    let advr = document.getElementById("advr").innerHTML="Have a Great Day";
    document.querySelector(".sign-up").classList.remove("opensign-up");
    document.querySelector(".overlay").classList.remove("showviewport");

    rmbtn.remove();

    signbtn.setAttribute("class","sgn");
    signbtn.innerText="Sign Out";
    signbtn.style.color="white";
    pushit.setAttribute("class","signout");
    pushit.append(signbtn)
})

// sign-in 

snform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let count = 0;
    userInput.forEach((e,i)=>{
            if(snform.snemail.value==e.email && snform.snpass.value== e.password)
             {
                document.querySelector(".signin").classList.remove("showsignin");
            document.querySelector(".overlay").classList.remove("showviewport");
                alert("Login Successfull");
                count++;
                display.innerText=e.f_name;

                insider.innerText="INSIDER "+0+" pts";
                insider.style.color="black";

                let advr = document.getElementById("advr").innerHTML="Have a Great Day";

                rmbtn.remove();

                // let signbtn = document.createElement("button");
                signbtn.setAttribute("class","sgn");
                signbtn.innerText="Sign Out";
                signbtn.style.color="white";
                pushit.setAttribute("class","signout");
                pushit.append(signbtn)
            }
    })
    if(count == 0)
    {
        invalid.style.margin="20px";
        invalid.style.color="red";
        invalid.innerText="Invalid Email / Password";
    }
    snform.snemail.value=null;
    snform.snpass.value=null;
})

// Sign out functionality 
let addsc = document.getElementById("addfnct");
let strng = document.createElement("strong");
signbtn.addEventListener("click",()=>{

    addsc.append(rmbtn);

    display.innerText="Sign In🔸";

    insider.innerText="for FREE Shipping 🚚";
    // insider.style.color="black";
    strng.innerText="FREE standard shipping"
    let advr = document.getElementById("advr").innerHTML="Sign in for " +strng.innerText+" on all orders.";
    pushit.remove();
    window.location.reload();
})