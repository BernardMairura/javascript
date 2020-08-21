
var names = [
     { Male : 'Kwasi', Female : 'Akosua' },
             { Male : 'Kwado', Female : 'Adwoa' },
             { Male : 'Kwabena', Female : 'Abenna' },
            { Male : 'Kwaku', Female : 'Akua' },
             { Male : 'Yaw', Female : 'Yaa' },
              { Male : 'Kofi', Female : 'Afua' },
              { Male : 'Kwame', Female : 'Ama' }

]
var displayval = document.getElementById('showmssg');
var dtdob = document.getElementById('dob');

 function displayVisitor(e)
 {

    let dobdate = new Date(dtdob.value);
    let weekday = dobdate.getDay();
    var maleselected = document.getElementById("male").checked;
    var femaleselected = document.getElementById("female").checked;
    if(maleselected)
    {
        displayval.innerText = names[weekday].Male;
    }
    else if(femaleselected){
        
        displayval.innerText = names[weekday].Female;

    }
    else{
        displayval.innerText = "Gender not selected";
    }







 }           

//console.log(names);


//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

/* where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % ) */
