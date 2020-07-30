
$(document).ready(function(){

    $("a.scroll").on('click', function(event){


        var hash = this.hash;


        $('html, body').animate({ scrollTop: $(hash).offset().top - 68 }, 800, function(){});
        
    });
});