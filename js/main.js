(function () {
	var contador = 140;
    $("#contador").text(contador);

	var cargarPagina = function () {
		$("#to-do-form").submit(agregarToDo);
		$("#message").keyup(validarContenido);
        $("#message").keyup(caractRest);
        $("#message").keyup(cambiarColor);
        
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
        
	};


	var validarContenido = function () {
		var $addButton = $("#add-button");
		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
		if($(this).val().trim().length > 140) {
            $("#contador").text(contador);
            contador--;
			$addButton.attr("disabled",true);
		} else if
            ($(this).val().trim().length > 0){
			$addButton.removeAttr("disabled");
		}else{
            $addButton.attr("disabled", true);   
        }
	};
     var caractRest = function () {

        var caractMenos = 0;
        var maxCaract = 140;

        caractMenos = $("#message").val().length;

        var totalCaract = maxCaract - caractMenos;

        $("#contador").text(totalCaract);
  };
  
  var cambiarColor = function() {
        var $imprCont = $("#contadorId");
        if($(this).val().trim().length > 129) {
          $imprCont.css("color", "red");
        } else if ($(this).val().trim().length > 119) {
          $imprCont.css("color", "orange");
        }
  };
        
	// Cuando carga la página
	$(document).ready(cargarPagina);
})();

