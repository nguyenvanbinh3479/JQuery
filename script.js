$('a').click(function(){
	var test = $('.abc').attr('href');
	$('.abc').addClass('cde');
	$('.abc').text(test);
	$('.abc').removeClass('cde');
	$('.abc').toggleClass('cde');
	$('.abc').slideToggle('cde');
	$('.abc').slideUp('cde');
	$('.abc').slideDown('cde');
	$(this).addClass('abc');





})


///

 <script type="text/javascript">
 	$(function(){
    $('.icon-menu').click(function(){
        $('.menu-sp').toggleClass('open');
    });
});
      
   </script>