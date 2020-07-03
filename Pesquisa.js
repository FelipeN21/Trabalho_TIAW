function Pesquisar()
{
 var texto = document.getElementById('texto').value;
 var lista = document.getElementById('historico');
 var adicionar = true; 
 var opt = document.createElement('option')

 for(i=0; i < lista.options.lenght;i++)
 {
     if(texto == lista.options[i].value)
     {
         adicionar = false;
     }
     if(adicionar == true)
     {
     opt.value = texto;
     lista.appendChild(opt);
     }
 }
}

$(document).ready(function () {

	// if user clicked on button, the overlay layer or the dialogbox, close the dialog	
	$('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {		
		$('#dialog-overlay, #dialog-box').hide();		
		return false;
	});
	
	// if user resize the window, call the same function again
	// to make sure the overlay fills the screen and dialogbox aligned to center	
	$(window).resize(function () {
		
		//only do it if the dialog box is not hidden
		if (!$('#dialog-box').is(':hidden')) popup();		
	});	
	
	
});

//Popup dialog
function popup(message) {
		
	 
	var maskHeight = $(document).height();  
	var maskWidth = $(window).width();
	var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
	var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
	$('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
	$('#dialog-message').html(message);
			
}