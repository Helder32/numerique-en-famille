
$("#g10015").attr('data-toggle', 'modal').attr('data-target', '#modalQuickView').attr('class', 'animated').attr('class', 'pulse')

$("#text10025").attr('data-toggle', 'modal').attr('data-target', '#modalQuickView').attr('class', 'animated').attr('class', 'pulse')


$( "#path10013" ).hover(function() {
	$( "#path10013" ).addClass('animate');
	$( "#path10001" ).addClass('animate');
	
} )

$( "#path10013" ).mouseout(function() {
	$( "#path10013" ).removeClass('animate');
	$( "#path10001" ).removeClass('animate');

} )

$( "#text10025" ).hover(function() {
	$( "#path10013" ).addClass('animate');
	$( "#path10001" ).addClass('animate');
	
} )

$( "#text10025" ).mouseout(function() {
	$( "#path10013" ).removeClass('animate');
	$( "#path10001" ).removeClass('animate');

} )


function zoom(id, z_class){
	
	$( id ).hover(function() {
		$( id ).addClass(z_class);
		$( id ).addClass(z_class);
	
	} )

	$( id ).mouseout(function() {
		$( id ).removeClass(z_class);
		$( id ).removeClass(z_class);

	} )
}

zoom("#image10442","animate_lab");
zoom("#image10453","animate_cnp");
zoom("#path10467","animate_udaf");
zoom("#image10464","animate_ga");
zoom("#image10477","animate_smpl");


// $( "#image10442" ).hover(function() {
// 	$( "#image10442" ).addClass('animate_img');
// 	$( "#image10442" ).addClass('animate_img');
	
// } )

// $( "#image10442" ).mouseout(function() {
// 	$( "#image10442" ).removeClass('animate_img');
// 	$( "#image10442" ).removeClass('animate_img');

// } )

// $( "#image10453" ).hover(function() {
// 	$( "#image10442" ).addClass('animate_img');
// 	$( "#image10442" ).addClass('animate_img');
	
// } )

// $( "#image10453" ).mouseout(function() {
// 	$( "#image10442" ).removeClass('animate_img');
// 	$( "#image10442" ).removeClass('animate_img');

// } )

// $( "#image10467" ).hover(function() {
// 	$( "#image10442" ).addClass('animate_img');
// 	$( "#image10442" ).addClass('animate_img');
	
// } )

// $( "#image10467" ).mouseout(function() {
// 	$( "#image10442" ).removeClass('animate_img');
// 	$( "#image10442" ).removeClass('animate_img');

// } )

// $( "#image10464" ).hover(function() {
// 	$( "#image10442" ).addClass('animate_img');
// 	$( "#image10442" ).addClass('animate_img');
	
// } )

// $( "#image10464" ).mouseout(function() {
// 	$( "#image10442" ).removeClass('animate_img');
// 	$( "#image10442" ).removeClass('animate_img');

// } )

// $( "#image10477" ).hover(function() {
// 	$( "#image10442" ).addClass('animate_img');
// 	$( "#image10442" ).addClass('animate_img');
	
// } )

// $( "#image10477" ).mouseout(function() {
// 	$( "#image10442" ).removeClass('animate_img');
// 	$( "#image10442" ).removeClass('animate_img');

// } )



// MODAL
// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select').materialSelect();
	});