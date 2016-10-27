//Función que al presionar el botón agregar lista da inputs
function agregarLista () {
	var div = document.createElement("div");
	div.className = "acomodarListas";
	var input = document.createElement("input"); 	//para crear el input
	input.setAttribute("placeholder","Ingresa nombre de la lista")//placeholder
	input.className = "form-control";
	var contenedor = document.getElementById("inputLista");	//para decir en donde tiene que poner el input
	div.appendChild(input);	//para que aparezca el input en la pantalla
	var boton = document.createElement("button");//para crear el boton de agregar nombre de la lista
	boton.className = "btn btn-info";//clases bootstrap
	var texto = document.createTextNode("Guardar");	//para agregar el texto del boton
	boton.appendChild(texto);	//crea el texto del boton
	div.appendChild(boton);
	contenedor.appendChild(div);//crea el boton
	boton.onclick = function () { //Función para cuando se presione el botón guardar, para hacer una nueva lista
		input.style.display = "none";
		boton.style.display = "none";
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
		anadirTarjeta.onclick = function () { //función que se activa al presionar el botón añadir lista
			var textarea = document.createElement("textarea");//crea un textarea para ingresar la lista de tareas
			textarea.setAttribute("textarea","autofocus");//atributo de textarea para que tenga un autofocus
			contenedor.appendChild(textarea);//el contenedor muestra el textarea en el HTML
			var botonGuardar = document.createElement("button");//para crear un botón de guardar para la lista de tareas
			botonGuardar.className = "btn btn-info";//clases bootstrap
			var textoBotonGuardar = document.createTextNode("Guardar");//nodo de texto del botón guardar
			botonGuardar.appendChild(textoBotonGuardar);//se indica al botón que va a tener un nodo de texto
			contenedor.appendChild(botonGuardar);//se indica al contenedor que va a tener un botón de guardar
			botonGuardar.onclick = function () { //Función que se ejecuta al presionar el botón guardar
				textarea.style.display = "none";
				botonGuardar.style.display = "none";
				var li = document.createElement("li");//crea una tarea de la lista
				var liValue = textarea.value;//guarda el texto que se ingresó en el textarea
				var tareas = document.createTextNode(liValue);//crea el nodo de texto de lo que se ingresó en el textarea
				li.appendChild(tareas);//imprime lo que se escribió en el textarea
				contenedor.appendChild(li);//muestra en el HTML lo que se ingresó en el textarea
			}
		}
	}
}