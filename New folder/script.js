var life = 3; // starts by 3 lives
 document.getElementById("lifePoint").innerHTML = life //inside first html where life is labled


function checkSudoku(){
    life = life-1; //decrese life by 1
    document.getElementById("lifePoint").innerHTML = life // get life from first html file
    var inputValue = document.getElementById("firstInput").value;
    var inputValue2 = document.getElementById("secondInput").value;
    if (inputValue == "8" && inputValue2 == "2")
    {
        alert('win!')
        life = 3;
        location.replace('start.html')
    } 
    else
    {
        alert("lose")
        if (life == 0){
            alert ("no more")

            life = 3;
            location.replace('start.html')
        
    }
    }
        

}
