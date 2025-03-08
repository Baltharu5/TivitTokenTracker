
  
var treasures = document.getElementById("treasures")
var addT = document.getElementById("AddT")
var remT = document.getElementById("RemoveT")

var clues = document.getElementById("clues")
var addC = document.getElementById("AddC")
var remC = document.getElementById("RemoveC")

var foods = document.getElementById("foods")
var addF = document.getElementById("AddF")
var remF = document.getElementById("RemoveF")

var am = document.getElementById("am")
var addAM = document.getElementById("AddAM")
var remAM = document.getElementById("RemoveAM")

var ap = document.getElementById("ap")
var addAP = document.getElementById("AddAP")
var remAP = document.getElementById("RemoveAP")

var draw = document.getElementById("Draw")
var etb = document.getElementById("ETB")

var votes = document.getElementById("votes")
var addV = document.getElementById("AddV")
var remV = document.getElementById("RemoveV")

var tt = document.getElementById("tt")

var y = Number(am.value)





//Treasures
treasures.value ="0"

addT.addEventListener("click", treasureAdd);
remT.addEventListener("click", treasureREM);


  function treasureAdd(){ 
    var count = Number(treasures.value) + 1 * (2 ** Number(ap.value))
  treasures.value = count;
}

  function treasureREM(){ 
    var count = Number(treasures.value) - 1
  if (Number(count) < 0) {
	  
  } else	{
		treasures.value = count;
	}
}

//Clues
clues.value ="0"

addC.addEventListener("click", clueAdd);
remC.addEventListener("click", clueREM);


  function clueAdd(){ 
    var count = Number(clues.value) + 1 * (2 ** Number(ap.value))
  clues.value = count;
}

  function clueREM(){ 
    var count = Number(clues.value) - 1
	if (Number(count) < 0) {
	  
  } else	{
		clues.value = count;
	}
}

//Foods
foods.value ="0"

addF.addEventListener("click", foodAdd);
remF.addEventListener("click", foodREM);


  function foodAdd(){ 
    var count = Number(foods.value) + 1 * (2 ** Number(ap.value))
  foods.value = count;
}

  function foodREM(){ 
    var count = Number(foods.value) - 1
  if (Number(count) < 0) {
	  
  } else	{
		foods.value = count;
	}
}

//AM
am.value ="0"

 

addAM.addEventListener("click", amAdd);
remAM.addEventListener("click", amREM);


  function amAdd(){ 
    var count = Number(am.value) + 1
  am.value = count;
  
}

  function amREM(){ 
    var count = Number(am.value) - 1
  if (Number(count) < 0) {
	  
  } else	{
		am.value = count;
	}
  
}

//AP
ap.value ="0"

addAP.addEventListener("click", apAdd);
remAP.addEventListener("click", apREM);


  function apAdd(){ 
    var count = Number(ap.value) + 1
  ap.value = count;
}

  function apREM(){ 
    var count = Number(ap.value) - 1
  
  if (Number(count) < 0) {
	  
  } else	{
		ap.value = count;
	}
}

//votes
votes.value ="5"

addV.addEventListener("click", voteAdd);
remV.addEventListener("click", voteREM);


  function voteAdd(){ 
    var count = Number(votes.value) + 1
  votes.value = count;
}

  function voteREM(){ 
    var count = Number(votes.value) - 1
  votes.value = count;
}


//Draw

draw.addEventListener("click", drawCard)

  function drawCard(){ 
  
  if (Number(treasures.value) < 2 || Number(clues.value) < 1 ) {
	  window.alert("Not Enough Treasures/Clues")
  } else	{
	var t = Number(treasures.value) - 2
    var c = Number(clues.value) - 1
      treasures.value = t;
      clues.value = c;
	}

}



//ETB

etb.addEventListener("click", enter)

function enter(){
	if (Number(am.value) === 0) {
	
  } else {
	  
	  	var am1 = Number(am.value)
		var ap1 = Number(ap.value)

		var t = Number(treasures.value)
		var c = Number(clues.value)
		var f = Number(foods.value)
		var v = Number(votes.value)

		var num = 3 ** (am1-1) * 2 ** ap1 * v

		treasures.value = t + num
		clues.value = c + num
		foods.value = f + num
		tt.innerHTML = num*3
    
  }
  
}






