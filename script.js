

var signupName = document.getElementById('signupName');
var upEmail = document.getElementById('signupEmail');
var signinPassword = document.getElementById('signupPassword');
var inEmail = document.getElementById('signinEmail')
var inpass = document.getElementById('signinPassword')


var box = [];



function signUp(){
    if( signupName.value !== '' && upEmail.value !== '' && signinPassword.value !==''){
        var data={
            pname: signupName.value,
            pmail: upEmail.value,
            paas: signinPassword.value,
        }
        box.push(data)
        localStorage.setItem("items", JSON.stringify(box))
        document.getElementById('exist').innerHTML = `Secces`
        console.log(box)
    }else{
        document.getElementById('exist').innerHTML = `Enter Value`

    }

}




var btn = document.getElementById('btn')


var cartinta = JSON.parse(localStorage.getItem("items"))



function login(){
    for( var i = 0 ; i<cartinta.length; i++){
        if( cartinta[i].pmail === inEmail.value && cartinta[i].paas === inpass.value ){
            console.log("yes")
            window.location.href='./welcom.html'
            localStorage.setItem('name' ,JSON.stringify(cartinta[i].pname))
             }else{
           document.getElementById('incorrect').innerHTML=`No Acc`
            
        }

    }

    }

    function welcom(){
     document.getElementById('welcom').innerHTML = `Welcome ${JSON.parse(localStorage.getItem("name"))}`
        
    }
 

