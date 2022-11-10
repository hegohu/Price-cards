$(document).ready(function(){

	$('.estandar-premium a').click(function(){
		$('.switch-btn').toggleClass('on');

		if($('#switch-btn').attr('class') == 'switch-btn on'){
			$('.tabla-precios-cont').toggleClass('rotando-tabla');
		} else{
			$('.tabla-precios-cont').toggleClass('rotando-tabla');
		}

	});


});