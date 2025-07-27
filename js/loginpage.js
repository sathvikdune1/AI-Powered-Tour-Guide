var Loginsideaddress =document.getElementsByClassName("loginpageside")[0];
var signuppageside = document.getElementsByClassName("singuppageside")[0];
var passbox1 = document.getElementsByClassName("passbox")[0];
var passbox2 = document.getElementsByClassName("passbox")[1];
// var userinfo;
var accountsinfo=[
    {
        email:"placeholderemail@123",
        pass:"Test123"
    }
]
    

function showsignuppage(){
    Loginsideaddress.setAttribute("style","display:none");
    signuppageside.setAttribute("style","display:block");
}

function showloginpage(){
    signuppageside.setAttribute("style","display:none");
    Loginsideaddress.setAttribute("style","display:block");
}

function loginpress(event){
    event.preventDefault();
    let emailboxaddrs = document.getElementsByClassName("emaillgnbox")[0];
    let loginpassboxaddrs = document.getElementsByClassName("loginpassbox")[0];
    let userinfo = emailboxaddrs.value;
    let userpassword = loginpassboxaddrs.value;
    let x={email:userinfo,
        pass:userpassword
    }
    let logincheck=1;
    for(let i=0;i<accountsinfo.length;i++){
        if(x.email == accountsinfo[i].email){
            logincheck=1;
            if(x.pass === accountsinfo[i].pass){

                alert("you are now logged in!!");
                break;
            }
            else{
                alert("Password is not correct");
            }
        }
        else{
            logincheck=0;
        }
    }
    if(logincheck==0){
        alert("email is not registered");
    }
}
function siguppress(event){
    event.preventDefault();
    if(passbox1.value.length<8 && passbox2.value.length<8){
        alert("Password must be above 8 charcters");
    }
    else{
        if(passbox1.value !== passbox2.value){
            alert("Password mismatch")
        }
        else{
            let singupboxaddrs = document.getElementsByClassName("sigupboxemail")[0];
            var pushinginfo={email:singupboxaddrs.value,
                pass:passbox1.value
            }
            let loginflag=0;
            for(let i=0;i<accountsinfo.length;i++){
                if(pushinginfo.email == accountsinfo[i].email){
                    alert("This email is already registered");
                    break
                }
                else{
                    loginflag=1;
                }
            }
            if(loginflag==1){
                accountsinfo.push(pushinginfo);
                alert("Now you can login");
                let clearboxes = document.getElementsByClassName("singupboxes");
                for(let i =0;i<=2;i++){
                    clearboxes[i].value="";
                }
            }
            
        }
    }
}
async function initMap() {
    console.log("Maps JavaScript API loaded.");
  }
  
  window.initMap = initMap;