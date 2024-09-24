
var a=Number(prompt("Enter time in 24-hour format (example, 1900 for 7 PM):"));

if(a>=0 && a<1200 ){
    alert("GOOD MORNING")
}
else if(a>=1200 && a<1700 ){
    alert("GOOD AFETRNOON")
}
else if(a>=1700 && a<2100 ){
    alert("GOOD EVENING")
}
else if(a>=2100 && a<2359 ){
    alert("GOOD NIGHT")
}
else if(a>=0 && a<=1200 ){
    alert("GOOD MORNING")
}
else alert("ERROR")



