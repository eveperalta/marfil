 $(document).ready(function() {
    $('.carousel').carousel({interval: 7000});
  });

 // JavaScript for label effects only
	$(window).load(function(){
		$(".input-effect input").val("");
		
		$(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})
	});

	$("#checkAll").click(function () {
    $(".check").prop('checked', $(this).prop('checked'));
});