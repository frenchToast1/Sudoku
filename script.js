var life = 3; // starts by 3 lives
 document.getElementById("lifePoint").innerHTML = life //inside first html where life is labled


function checkSudoku(){
    life = life-1; //decrese life by 1
    document.getElementById("lifePoint").innerHTML = life // get life from first html(index.html) file
    var inputValue = document.getElementById("firstInput").value;
    var inputValue2 = document.getElementById("secondInput").value;
    var inputValue3 = document.getElementById("thirdInput").value;
    var inputValue4 = document.getElementById("forthInput").value;
    var inputValue5 = document.getElementById("fifthInput").value;
    var inputValue6 = document.getElementById("sixthInput").value;
    var inputValue7 = document.getElementById("aInput").value;
    var inputValue8 = document.getElementById("bInput").value;
    var inputValue9 = document.getElementById("cInput").value;
    var inputValue10 = document.getElementById("dInput").value;
    var inputValue11 = document.getElementById("eInput").value;
    var inputValue12 = document.getElementById("fInput").value;
    var inputValue13 = document.getElementById("gInput").value;
    var inputValue14 = document.getElementById("hInput").value;
    var inputValue15 = document.getElementById("iInput").value;
    var inputValue16 = document.getElementById("jInput").value;
    var inputValue17 = document.getElementById("kInput").value;
    var inputValue18 = document.getElementById("lInput").value;
    var inputValue19 = document.getElementById("mInput").value;
    var inputValue20 = document.getElementById("nInput").value;
    var inputValue21 = document.getElementById("oInput").value;
    var inputValue22 = document.getElementById("pInput").value;
    var inputValue23 = document.getElementById("qInput").value;
    var inputValue24 = document.getElementById("rInput").value;
    var inputValue25 = document.getElementById("sInput").value;
    var inputValue26 = document.getElementById("tInput").value;
    var inputValue27 = document.getElementById("uInput").value;
    var inputValue28 = document.getElementById("vInput").value;
    var inputValue29 = document.getElementById("wInput").value;
    var inputValue30 = document.getElementById("xInput").value;
    var inputValue31 = document.getElementById("yInput").value;
    var inputValue32 = document.getElementById("zInput").value;
    var inputValue33 = document.getElementById("aaInput").value;
    var inputValue34 = document.getElementById("abInput").value;
    var inputValue35 = document.getElementById("acInput").value;
    var inputValue36 = document.getElementById("adInput").value;
    var inputValue37 = document.getElementById("aeInput").value;
    var inputValue38 = document.getElementById("afInput").value;
    var inputValue39 = document.getElementById("agInput").value;
    var inputValue40 = document.getElementById("ahInput").value;
    var inputValue41 = document.getElementById("aiInput").value;
    var inputValue42 = document.getElementById("ajInput").value;
    var inputValue43 = document.getElementById("akInput").value;
    var inputValue44 = document.getElementById("alInput").value;
    var inputValue45 = document.getElementById("amInput").value;
    var inputValue46 = document.getElementById("anInput").value;
    var inputValue47 = document.getElementById("aoInput").value;
    var inputValue48 = document.getElementById("apInput").value;
    var inputValue49 = document.getElementById("aqInput").value;
    var inputValue50 = document.getElementById("arInput").value;
    var inputValue51 = document.getElementById("asInput").value;



    if (inputValue == "8" && inputValue2 == "2" && inputValue3 == "9" && inputValue4 == "1" && inputValue5 == "6" && inputValue6 == "4" 
    && inputValue7 == "7" && inputValue8 == "2" && inputValue9 == "3" && inputValue10 == "4" && inputValue11 == "8"
    && inputValue12 == "1" && inputValue13 == "3" && inputValue14 == "4" && inputValue15 == "2" && inputValue16 == "5"
    && inputValue17 == "7" && inputValue18 == "5" && inputValue19 == "9" && inputValue20 == "7" && inputValue21 == "1"
    && inputValue22 == "4" && inputValue23 == "2" && inputValue24 == "2" && inputValue25 == "6" && inputValue26 == "5"
    && inputValue27 == "7" && inputValue28 == "9" && inputValue29 == "1" && inputValue30 == "3" && inputValue31 == "9" 
    && inputValue32 == "4" && inputValue33 == "8" && inputValue34 == "5" && inputValue35 == "9" && inputValue36 == "1"
    && inputValue37 == "5" && inputValue38 == "3" &&  inputValue39 == "7" && inputValue40 == "4" && inputValue41 == "2"
    && inputValue42 == "8" && inputValue43 == "7" && inputValue44 == "6" && inputValue45 == "3" && inputValue46 == "3"
    && inputValue47 == "4" && inputValue48 == "5" && inputValue49 == "2" && inputValue50 == "6" && inputValue51 == "1")
    {
        alert('win!')
        life = 3;
        location.replace('start.html') // when game is a win it will reopen start page
    } 
    else
    {
        alert("lose")
        if (life == 0){
            alert ("TRY AGAIN!")

            life = 3;
            location.replace('start.html')
        
    }
    }
        

}
