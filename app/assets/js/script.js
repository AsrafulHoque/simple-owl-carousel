/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});

$(document).ready(function(){
  
    $('.blog-wrapper').owlCarousel({
        items : 3,
        rewind: true,
        loop:true,
        margin:30,
        autoplay : true,
        autoplayHoverPause: true,
        nav: $(window).width() > 1300 ? true : false,
        smartSpeed : 1000,
        autoplayTimeout : 2000,
        nav:true,
        navText : ['<span class="ni ni-chevron-left"></span>','<span class="ni ni-chevron-right"></span>'],

        responsive:{
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
        }
    })
})

/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

