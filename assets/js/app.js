

var mainBtn = document.getElementById("mainBtn");

var container = document.getElementById("container");

mainBtn.addEventListener("click", function(){
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "añadir tarea");
	input.classList.add("class", "input_principal");
	input.value;

	var btn = document.createElement("button");
	btn.setAttribute("id", "guardar");
	var text_btn = document.createTextNode("Guardar");

	container.appendChild(input);
	btn.appendChild(text_btn);
	container.appendChild(btn);

	var btn_save = document.getElementById("guardar");
	btn_save.addEventListener("click", function(){
	var container_user = document.createElement("div");
	var title_user = document.createElement("h3");
	var text_title_user = document.createTextNode(input.value);
	title_user.appendChild(text_title_user);
	container_user.appendChild(title_user);
	container.appendChild(container_user);


	var link = document.createElement('a');
	link.setAttribute("href", "#");
	var text_link = document.createTextNode('Añade una tarjeta');
	link.appendChild(text_link);
	container_user.appendChild(link);

	link.addEventListener("click", function(){
	var container_list_task = document.createElement("div");
	var textarea = document.createElement("input");
	textarea.setAttribute("type", "text");
	container_list_task.appendChild(textarea);
	container_user.appendChild(container_list_task);

	var btn_save_list_task = document.createElement("button");
	var text_btn_save_list_task = document.createTextNode("Guardar Tareas");
	btn_save_list_task.appendChild(text_btn_save_list_task);
	container_list_task.appendChild(btn_save_list_task);
		})
	})
	
})
		
	
