//UI Logic...
$("form").submit(function(event){
  event.preventDefault();
  $("#results").text(romanize($("#userNumber").val()));
});

//Backend Logic...
function romanize(aNumber){
  var romanNumber="";
  var count=0;
  if (aNumber <= 3999) {
    for(var i=1;i<=parseInt(aNumber/1000);i++) {
      romanNumber+="M";
      count=i;
    }
    aNumber-=1000*count;
    count=0;
    if (aNumber>=900) {
      romanNumber+="CM";
      aNumber-=900;
    }
    for(var i=1;i<=parseInt(aNumber/500);i++) {
      romanNumber+="D";
      count=i;
    }
    aNumber-=500*count;
    count=0;
    if (aNumber>=400) {
      romanNumber+="CD";
      aNumber-=400;
    }
    for(var i=1;i<=parseInt(aNumber/100);i++) {
      romanNumber+="C";
      count=i;
    }
    aNumber-=100*count;
    count=0;
    if (aNumber>=90) {
      romanNumber+="XC";
      aNumber-=90;
    }
    for(var i=1;i<=parseInt(aNumber/50);i++) {
      romanNumber+="L";
      count=i;
    }
    aNumber-=50*count;
    count=0;
    if (aNumber>=40) {
      romanNumber+="XL";
      aNumber-=40;
    }
    for(var i=1;i<=parseInt(aNumber/10);i++) {
      romanNumber+="X";
      count=i;
    }
    aNumber-=10*count;
    count=0;
    if (aNumber>=9) {
      romanNumber+="IX";
      aNumber-=9;
    }
    for(var i=1;i<=parseInt(aNumber/5);i++) {
      romanNumber+="V";
      count=i;
    }
    aNumber-=5*count;
    count=0;
    if (aNumber>=4) {
      romanNumber+="IV";
      aNumber-=4;
    }
    for(var i=1;i<=parseInt(aNumber/1);i++) {
      romanNumber+="I";
      count=i;
    }
    aNumber-=1*count;
    count=0;
  } else {
    romanNumber=("Sorry, too many people died... tomorrow it's your turn!");
  }
  return romanNumber;
}
