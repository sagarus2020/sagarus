$("#colombia").click(function(event){
	$("#contenedor").load("selecciones/colombia.html");
});

$("li a").click(function(event){
	event.preventDefault();
	if($(this).data('seleccion')!=null){
		$('contenedor').load('selecciones/'+$(this).data('seleccion')+'.html');
	}
});
