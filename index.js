
var names = { Sunday : { Male : 'Kwasi', Female : 'Akosua' },
             Monday : { Male : 'Kwado', Female : 'Adwoa' },
             Tuesday : { Male : 'Kwabena', Female : 'Abenna' },
             Wednesay: { Male : 'Kwaku', Female : 'Akua' },
             Thursady : { Male : 'Yaw', Female : 'Yaa' },
             Friday : { Male : 'Kofi', Female : 'Afua' },
             Saturday: { Male : 'Kwame', Female : 'Ama' },

}
var displayval = document.getElementById('showmssg');
 function displayVisitor(e)
 {

    console.log("ydrdtdtyy");

 }           

console.log(names);


Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

/* where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % ) */
