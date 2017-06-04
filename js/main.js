(function () {
	var contador = 0;

	var cargarPagina = function () {
		$("#to-do-form").submit(agregarToDo);
		$("#message").keyup(validarContenido);
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "jumbotron" });
		//var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");

		var identificador = "marcador-" + contador;

		// Personalizamos elementos
		// $postContenedor.addClass("jumbotron");
		//$postCheck.id = identificador;
		// $postCheck.type = "checkbox";
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		//$postCheck.click(eliminarToDo);

		// Agregarlos al DOM
		//$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);

		// Agregarlo a un elemento existente para visualizarlo
		// contenedor.appendChild(postContenedor);
		$contenedor.prepend($postContenedor);

		// Borrar contenido de textarea
		$mensajeContenedor.val("");
		$botonAgregar.attr("disabled", true);

		// bind, apply, call

		contador++;
	};

	var eliminarToDo = function () {
		$(this).parent().remove();
	};

	var validarContenido = function () {
		var $addButton = $("#add-button");
		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};

	// Cuando carga la página
	$(document).ready(cargarPagina);
})();

