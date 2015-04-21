// JavaScript Document
$(document).ready(function(e) {
//comentario: ñ document.addEventListener("deviceready",function(){ 
$('#btndatos').on ('click',function(){
	 //alert('hola...gracias estamos agradecidos..:)');
	 $('body').pagecontainer("change","#datos", { transition:"flip"});
	
});// click btndatos
$('#btnresultado').on ('click',function(){
	  $('body').pagecontainer("change","#resultado", { transition:"flip"});
	  
		  
		  var imc;
		  var peso=$('#txtpeso').val();
		  var talla =$('#txttalla').val();
		  alert(peso);
		  alert(talla);
		  imc=(peso/(talla*talla));
		  $('#imc').text('nombre '  +$('#txtnombre'). val() + imc);// estamos aqui concatenando//juntar las cosas
		  
		  });// click btndatos
// }); 
});
