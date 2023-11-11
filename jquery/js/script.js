$(function()  {
  
        // Gérer le clic sur les liens de navigation
        $(".nav-link").click(function (event) {

            event.preventDefault();
    

            var index = $(this).data("index");
    

            $(".nav-link").removeClass("active");
            $(this).addClass("active");
    
            // Cacher images sauf correspondant à l'index
            $(".js-images img").removeClass("active");
            $(".js-images img[data-index='" + index + "']").addClass("active");
    
            // Cacher articles sauf correspondant à l'index
            $(".js-text article").removeClass("active");
            $(".js-text article[data-index='" + index + "']").addClass("active");
        });
    });
    