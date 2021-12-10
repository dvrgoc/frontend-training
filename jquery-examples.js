(function($){
    console.clear();
    //Init some code
    console.log($)

    $(document).ready(function () {
        console.log('document ready event', Date.now());
    });

    $(window).on('load', function () {
        console.log('window load event', Date.now());
    }).on('resize', function () {
        // console.log(this);
        console.log('window resize event', this.outerWidth, this.outerHeight);
    });

    $('section').each(function (index, section) {
        // console.log(section);
        // console.log(this);
        console.log($(section).find('h2').text().toUpperCase());
    });

    function h2ClickHandler() {
        console.log('using named function')
        // console.log($(this));
        $(this).text(Date.now());
        $(this).next().toggle();
    }
    $('h2').on('click', h2ClickHandler);

    $('h2').on('click', function () {
        console.log('using anonymous function')
        // console.log($(this));
        $(this).text(Date.now());
        $(this).next().toggle();
    });

    /*
   document.getElementById('selector')
    //    ===
    $('#selector')

    document.querySelectorAll('.classname')
    //    ===
    $('.selector')
     */
})(jQuery);