var screen = document.querySelector('#screen');

var btn = document.querySelectorAll('.btn');

document.addEventListener('keyup',(e)=>{

	if(e.keyCode == "13"){

		screen.value=eval(screen.value.replaceAll('%', '*0.01'))

	}

})





for(item of btn) {

	item.addEventListener('click',(e)=>{

	  btntext = e.target.innerText;

	  

	  if(btntext =='x'){

		  btntext='*';

	  }

	  

	  if(btntext=='÷'){

		  btntext='/';		  

	  }

	  screen.value += btntext;

});

	}

	function sin(){

		screen.value = Math.sin(screen.value);

	}

	function cos(){

		screen.value = Math.cos(screen.value);

	}

	function tan(){

		screen.value = Math.tan(screen.value);

	}

	function pow(){

		screen.value = Math.pow(screen.value, 2);

	}

	function sqrt(){

		screen.value = Math.sqrt(screen.value, 2);

	}

	function log(){

		screen.value = Math.log(screen.value);

	}

	function pi(){

		screen.value = 3.14159265359;

	}

	function e(){

		screen.value = 2.71828182845; /*euler*/

	}

	

	

	

	function fact(){

		var i, num, f;

		f = 1 

		num = screen.value;          /*faktor*/

		for(i = 1; i <= num; i++){

			f = f * i;

		}

		

		i = i - 1;

		

		screen.value = f;

	}

	function backspc(){

		screen.value = screen.value.substr(0, screen.value.length - 1);

	}

	fu

	

	/* e=exponen

	   ac=AllClear

	   ce=ClearEntry

	   sin=sinus

	   cos=cosinus

	   tan=tangen

	   X!=faktorial*/
