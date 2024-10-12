let year=1900
if (year%100==0){
    if(year%400==0)
        console.log("Leap Year")
    else
    console.log("Not a Leap Year")
}
else if (year%4==0)
    console.log("Leap Year")
else
console.log("Not a Leap Year")