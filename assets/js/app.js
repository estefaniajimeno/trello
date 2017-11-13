var btnAdd = document.getElementById("btnAdd");
var contenedor= document.getElementById("contenedor");

btn_principal.addEventListener("click",function() {
	
	var input = document.createElement("input");
	
	
	input.setAtributte("type","text");
	input.setAtributte("placeholder","añade tarea");
	input.classList.add("class","input_principal");
	input.value;	

var btn = document.createElement("button");
//añadiendo id al boton creado para hacer un addEvenListener del boton guardar
	btn.setAtributte("id", "guardar");
	var text_btn=document.createTextNode("Guardar");

	contenedor.appendChild(input);
	btn.appendChild(text_btn);
	contenedor.appendChild(btn);

	var btn_guardar = document.getElementById("guardar");
	btn_guardar.addEventListener("click",function)(){
		var contenedor_usuario=document.createElement("div");
		var titulo_usuario=document.createElement("h4");
		var text_titulo_usuario=document.createTextNode(input.value);
		titulo_usuario.appendChild(text_titulo_usuario);
		contenedor_usuario.appendChild(titulo_usuario);
		contenedor.appendChild(contenedor_usuario);

	})
	