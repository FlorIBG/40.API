	var contadorTarjetas = 1;
//Función que al presionar el botón agregar lista2 da inputs
function agregarLista () {
	var divCaja = document.createElement("div");
	divCaja.className = "acomodarListas";
	var input = document.createElement("input"); 	//para crear el input
	input.setAttribute("placeholder","Ingresa nombre de la lista")//placeholder
	input.className = "form-control";
	var contenedor = document.getElementById("inputLista");	//para decir en donde tiene que poner el input
	divCaja.appendChild(input);	//para que aparezca el input en la pantalla
	var boton = document.createElement("button");//para crear el boton de agregar nombre de la lista
	boton.className = "btn btn-info";//clases bootstrap
	var texto = document.createTextNode("Guardar");	//para agregar el texto del boton
	boton.appendChild(texto);	//crea el texto del boton
	divCaja.appendChild(boton);
	contenedor.appendChild(divCaja);//crea el boton
	boton.onclick = function () { //Función para cuando se presione el botón guardar, para hacer una nueva lista
		input.style.display = "none";
		boton.style.display = "none";
		divCaja.style.display= "none";
		var divGuardarNombreDeLista = document.createElement("div");
		divGuardarNombreDeLista.className = "nombreLista";
		var div = document.createElement("div"); //creo un elemento div
		var divValue = input.value; //guarda lo que hay en el input de arriba
		var titulo = document.createTextNode(divValue); //crea el nodo de texto del input de arriba
		div.appendChild(titulo); //le dices al div que va a guardar el texto del input
		var anadirTarjeta = document.createElement("button");// boton para añadir tarjeta
		var textoSegundoBoton = document.createTextNode("Añadir una tarjeta");//texto del boton añadir tarjeta
		divGuardarNombreDeLista.appendChild(div);//dices que el contenedor de la función de arriba va a contener lo que se escribió en el input de arriba
		contenedor.appendChild(divGuardarNombreDeLista);
		anadirTarjeta.appendChild(textoSegundoBoton);//el botón de añadir tarjeta contiene un nodo de texto
		anadirTarjeta.className = "display btn btn-info";//clase del botón para que quedé abajo de la tarjeta
		divGuardarNombreDeLista.appendChild(anadirTarjeta);//el contenedor debe mostrar el botón añadir tarjeta
		divGuardarNombreDeLista.addEventListener("drop",soltar);
		divGuardarNombreDeLista.addEventListener("dragover",arrastrarSobre);
		divGuardarNombreDeLista.addEventListener("dragleave",dejarDeArrastrar);
		anadirTarjeta.onclick = function () { //función que se activa al presionar el botón añadir lista
			var textarea = document.createElement("textarea");//crea un textarea para ingresar la lista de tareas
			textarea.setAttribute("textarea","autofocus");//atributo de textarea para que tenga un autofocus
			divGuardarNombreDeLista.appendChild(textarea);//el contenedor muestra el textarea en el HTML
			var botonGuardar = document.createElement("button");//para crear un botón de guardar para la lista de tareas
			botonGuardar.className = "btn btn-info";//clases bootstrap
			var textoBotonGuardar = document.createTextNode("Guardar");//nodo de texto del botón guardar
			botonGuardar.appendChild(textoBotonGuardar);//se indica al botón que va a tener un nodo de texto
			divGuardarNombreDeLista.appendChild(botonGuardar);//se indica al contenedor que va a tener un botón de guardar
			botonGuardar.onclick = function () { //Función que se ejecuta al presionar el botón guardar
				function allowDrop (ev) {
					ev.preventDefault();
				}
				textarea.style.display = "none";
				botonGuardar.style.display = "none";
				var divTarjetas = document.createElement("div");
				var divtarea = document.createElement("p");//crea una tarea de la lista
				divTarjetas.style.display = "block";
				divTarjetas.style.border = "solid";
				divTarjetas.style.borderColor = "purple";
				divTarjetas.style.width = "100%";
				var divValue = textarea.value;//guarda el texto que se ingresó en el textarea
				var tareas = document.createTextNode(divValue);//crea el nodo de texto de lo que se ingresó en el textarea
				divtarea.appendChild(tareas);//imprime lo que se escribió en el textarea
				divTarjetas.appendChild(divtarea)
				divGuardarNombreDeLista.appendChild(divTarjetas);
				divTarjetas.setAttribute("draggable","true");
				divTarjetas.setAttribute("id","divGuardarNombreDeLista.1"+contadorTarjetas);
				divTarjetas.addEventListener("dragstart",arrastrar);
				divTarjetas.addEventListener("dragend",terminarDeArrastrar);
				contadorTarjetas++;
			}
		}
	}
	function arrastrar (e) {
		e.dataTransfer.setData("text",e.target.id);//para que se mueva la tarjeta
	}
	function arrastrarSobre (e) {
		e.preventDefault ();//para decir que la tarjeta se mueve. Quita los candados para que los demás elementos del HTML acepte que se están moviendo
	}
	function soltar (e) {
		var idArrastrar = e.dataTransfer.getData("text");
		var tarjetaArrastrada = document.getElementById(idArrastrar);
		this.insertBefore(tarjetaArrastrada,this.childNodes[2]);
		this.classList.add("efectosDeTransiciones");
	}
	function terminarDeArrastrar (e) {
		this.style.opacity = null;
	}
	function dejarDeArrastrar (e) {
		this.style.backgroundColor = "#C1AAC9";
		this.classList.remove("efectosDeTransiciones");
	}
}