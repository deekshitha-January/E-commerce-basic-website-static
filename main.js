//form validation
//we know thta all the fields int eh form are different
//therefore they are different according to the user
//we are going to declare teh variables to take the values
//next we are going to declare teh fields that are accepted by the given variables
//if the values and the fields are matching then its ok

function validation(){
    var name = document.getElementById('exampleInput1').value;
    var email = document.getElementById('exampleInputEmail1').value;
    //here the things in bracket are id in the index.html page
    var number = document.getElementById('exampleInput2').value;
    var password = document.getElementById('examplePassword').value;
    var cpassword = document.getElementById('examplePassword2').value;
    
    //permissions
    var namecheck = /^[A-Za-z ]{2,}$/;
    //the above allows the user to enter alphabets from A- Z and from a-z and also space
    //the above is the syntax , in {} used to restrict the number of characters , here we have given min 
    
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    //this means that from [A-Za-z0-9._] u have to pick min 3 and maximum any next @ , next from [A-Za-z0-9._] u have to pick min 3 and maximum any in the similar way remaining
    
    var numbercheck = /^[6789][0-9]{9}$/;
    
    var passwordcheck = /^[A-Za-z0-9!@#$%^&*_]{8,16}$/;
    
    //for confirm password no need of any permission
    
    // next we rae going to check with if else
    
    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = '';//it is used to print 
    }
    else{
        document.getElementById('error-name').innerHTML = 'Use only alphabets';
        return false;//the form is not submitted if the conditions are not met
    }
    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = '';//it is used to print 
    }
    else{
        document.getElementById('error-email').innerHTML = 'Invalid email';
        return false;//the form is not submitted if the conditions are not met
    }
    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = '';//it is used to print 
    }
    else{
        document.getElementById('error-number').innerHTML = 'Use 10 digit valid number';
        return false;//the form is not submitted if the conditions are not met
    }
    if(passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = '';//it is used to print 
    }
    else{
        document.getElementById('error-password').innerHTML = 'Use alphabets, number, special character';
        return false;//the form is not submitted if the conditions are not met
    }
    if(cpassword.match(password)){
        document.getElementById('error-password').innerHTML = '';//it is used to print 
    }
    else{
        document.getElementById('error-cpassword').innerHTML = 'password doesnt match';
        return false;//the form is not submitted if the conditions are not met
    }
    }
    