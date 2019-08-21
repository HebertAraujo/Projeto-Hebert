
/*ANIMAÇÃO PARA SUBIR OU DESCER*/	
/código para uso do jquery/	

			$(document).ready(function(){
			$("#flip").click(function(){
			$("#panel").slideDown(1000);});


			$("#flip2").click(function(){
			$("#panel").slideUp(1000);});

			//Animação que faz os 2
			$("#flip3").click(function(){
			$("#panel").slideToggle(1000);});

			});
	/*----------------SUBIR E DESCER----------------------------------*/	

	$("#flip3").click(function(){
 										
	    $("#panel").slideToggle("slow");
	  });
	 
	/*---------------FADEOUT----------------------------------*/
	$(document).ready(function(){
	$("b1").click(function(){
		$("#div1").fadeOut()
		$("#div2").fadeOut()
		$("#div3").fadeOut()
	

	$("b2").click(function(){
		$("#div1").fadeIn()
		$("#div2").fadeIn("slow")
		$("#div3").fadeIn(3000)
	});

  });

});
	
/*----------------Appned----------------------------------*/
$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn3").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn4").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});

/*----------------Accordion----------------------------------*/

 $( function() {
    $( "#accordion" ).accordion();
  } );