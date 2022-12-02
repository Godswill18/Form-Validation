const firstName = document.querySelector('#fName')
const form = document.querySelector('#form')
const password = document.querySelector('#password')
const cP = document.querySelector('#cPassword')
const checkB = document.querySelector('#check')
const surName = document.querySelector('#sName')
const email = document.querySelector('#email')
const dateOB = document.querySelector('#dob')

dateOB.max = new Date().toISOString().split('T')[0];


form.addEventListener('submit', function() {

    
   
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(password.value !== '' && password.value !== null && cP.value !== '' && cP.value !== null && password.value === cP.value && checkB.checked === true && email.value.match(validRegex))  {

        form.submit();
        form.action = "page2.html";
        document.form.email.focus();
          
            sendValues();
       
        
        
    }
    else{
        
        form.preventDefault();
        alert('please fill the form and agree to our condition')
        
            document.form.email.focus();
        
            return false;
       
    }
});



function sendValues(){
    const a = 200;
    localStorage.setItem('myValue', a);
    window.location.href = "page2.html";
}


/*
    return true;
    }

    valid coded
    (if((firstName==""|| surName =="")|| email === '' || (password==""||confirmPassword== "")){
            console.log('fill in the form')
            
        })

        not it 

        if((name==""||email=="")||(password==""||confirmPassword==""))
    {
        document.querySelector("#empty-field").innerHTML="*Fill all required fields";
        i++;
    }
    else
    {
    if(name.length<3)
    {
        document.querySelector("#u_name").style.borderColor="red";
        document.querySelector("#user-errmsg").innerHTML="*Enter valid user name";
        i++;
    }
    else
    {
        document.querySelector("#u_name").style.borderColor="#ced4da";
        document.querySelector("#user-errmsg").innerHTML="";
        i;
    }
    if(email.length<6)
    {
        document.querySelector("#email_id").style.borderColor="red";
        document.querySelector("#email-errmsg").innerHTML="*Enter valid email id";
        i++;
    }
    else
    {
        document.querySelector("#email_id").style.borderColor="#ced4da";
        document.querySelector("#email-errmsg").innerHTML="";
        i;
    }
    if(password.length<6 && confirmPassword.length<6)
    {
        document.querySelector("#pwd").style.borderColor="red";
        document.querySelector("#confirm_pwd").style.borderColor="red";
        document.querySelector("#pwd-errmsg").innerHTML="*Password must be atleast 6 digits long";
        i++;
    }
    else if(password.length<6 && confirmPassword.length>=6)
    {
        document.querySelector("#confirm_pwd").style.borderColor="red";
        document.querySelector("#pwd").style.borderColor="red";
        document.querySelector("#pwd-errmsg").innerHTML="*Password must be atleast 6 digits long";
        i++;
    }
    else if(password.length>=6 && confirmPassword.length>=6)
        {
            if(password!= confirmPassword)
            {
                document.querySelector("#pwd").style.borderColor="red";
                document.querySelector("#confirm_pwd").style.borderColor="red";
                document.querySelector("#pwd-errmsg").innerHTML="*Both fields must have the same password";
                i++;
            }
            else
            {
                document.querySelector("#pwd").style.borderColor="#ced4da";
                document.querySelector("#confirm_pwd").style.borderColor="#ced4da";
                document.querySelector("#pwd-errmsg").innerHTML="";
                i;
            }
        }
    else
    {
        document.querySelector("#pwd").style.borderColor="red";
        document.querySelector("#confirm_pwd").style.borderColor="red";
        document.querySelector("#pwd-errmsg").innerHTML="*Both fields must have the same password";
        i++;
    }
    document.querySelector("#empty-field").innerHTML="";
    }
    if(i==0)
    return true;
    else
    return false
}

}*/



