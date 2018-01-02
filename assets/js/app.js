
/*formulario */
document.getElementById("schedule").onclick =fuction(){
	document.getElementById("schedule").className= "hide";
	document.getElementById("draft").className="show";
	document.getElementById("list").focus(); 
}

/* ocultar formulario */

document.getElementById("period").onclick()=function(){
	document.getElementById("draft").className="hide";
	document.getElementById("schedule").className="show";
}

/*agregar texto*/
document.getElementById("makeList").onclick=fuction(){
	var list=document.getElementById("list").value;
	document.getElementById("list").value="";
	var newList=document.createElement("div");
	var secondSection=document.getElementById("secondSection");
	var paragraph=document.createElement("p");
	var nodoText=document.createTextNode("list");
	var add = document.createElement('a');
	add.setAtribute('href','#');
	var text Add=document.createTextNode('añadir tarjeta')
}
	paragraph.appenChild(nodoText);
	newList.appenChild(paragraph);
	newList.className="section";
	add.appenChild(textAdd);
	add.className="card";
	newList.appenChild(add);
	/*añade un elemento antes de otro elemento*/
	secondSection.insertBefore(newList,secondSection.firstChild);

	/*text area*/
	add.addEventListener('click',function(){
		var textarea=document.createElement('textarea');
		var button= document.createElement('button');
		var add1= document.createElement('a');
		add1.setAtribute('href','#');
		var textAdd =document.createTextNode('añadir');
		var time =document.createElement('a')
		time.setAtribute('href'.'#');
		var times=document.createElement('i');//para cancelar
		var times.classList.add("fa","fa-times,times");
			/*Añadiendo*/
	})
	button.appenChild(add1)
		add1.appenChild(textAdd);
		newList.appenChild(textarea);
		newList.appenChild(button)
		newList.appenChild(time);
		time.appenChild(time);
		button.className="add";
		textarea.className="text";
		//ocultar btn de agregar tarjeta
		add.className = "hide";
		//se remueve el text area cuando no se ocupe;

		time.addEventListener("click",function(){
		var nodes = newList.childNodes;
		var nodeChange.remove();
	})
		//añadir hacia abajo

		add1.addEventListener('click',function(){
			//childnodes selecciona todos los hijos de newList
			var nodeChange = newList.childNodes;
			//obtenemos el antepenultimo nodo que corresponde al elemento que queremos cambiar 
			// el último es el icono, el penultimo es el boton y el ante penultimo el text area que estamos creando
			var nodeChange  = nodes[nodes.length - 3];
			//se cambia la clase al textarea que se agrega
			nodeChange.className="text2";
			nodeChange.disabled= "true";
			var textarea =document.createElement('textarea');

			textarea.className = "text";

			newList.insertBefore(textarea,button);

		}
		
	
