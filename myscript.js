window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function validateForm()
{  

        function ValidateEmail(mail) 
      {
          var re= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
          return re.test(mail);
      }


        var fn = document.forms["myForm"]["fname"].value;
        var ln = document.forms["myForm"]["lname"].value;
        var num = document.forms["myForm"]["mobile"].value;
        var mail = document.forms["myForm"]["email"].value;
        var dob = document.forms["myForm"]["dob"].value;
        var country = document.forms["myForm"]["country"].value;
        var state = document.forms["myForm"]["state"].value;
        var city = document.forms["myForm"]["city"].value;
        var pin = document.forms["myForm"]["pin"].value;
        var gender = document.getElementsByName('gender');
        var genValue = false;



        if(fn=="")
        {
          alert("please enter your first name");
          return false;
        }

        if(ln=="")
        {
          alert("please enter your last name");
          return false;
        }

        if(num=="")
        {
          alert("please enter your mobile number");
          return false;
        }
      
        if(dob=="")
        {
          alert("please enter your  date of birth");
          return false;
        }

        for(var i=0; i<gender.length;i++){
                  if(gender[i].checked == true){
                      genValue = true;    
                  }
              }
              if(!genValue){
                  alert("Please Choose the gender");
                  return false;
              }

        
        if(country=="NONE")
        {
          alert("please selet a country");
          return false;
        }
        
        if(state=="")
        {
          alert("please enter name of your state");
          return false;
        }
        
        if(city=="")
        {
          alert("please enter name of your city");
          return false;
        }
        
        if(pin=="")
        {
          alert("please enter your pincode");
          return false;
        }

        if(!ValidateEmail(mail)
        {
          alert("please enter your  E-mail id ");
          return false;
        }
        else 
        {
         return false;
        }
        
}