$(function(){

$('.input-range-bar').on('input change', function(){
	$('.input-range-box').val($('.input-range-bar').val());
});

$('.input-range-box').on('keyup change', function(){
    $('.input-range-bar').val($('.input-range-box').val());
});

/*$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #94A14E), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
});*/

});

