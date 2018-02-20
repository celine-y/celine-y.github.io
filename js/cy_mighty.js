jQuery(document).ready(function($) {
    (function(){
        // Global slider's DOM elements
        var $example = $('#example'),
            $frame = $('.frame', $example);

        // Calling mightySlider via jQuery proxy
        $frame.mightySlider({
            speed: 1000,
            easing: 'easeOutExpo',
            viewport: 'fit',
            
            // Navigation options
            navigation: {
                slideSize: '100%',
                keyboardNavBy: 'slides'
            },

            // Dragging options
            dragging: {
                swingSpeed:    0.1
            },

            // Pages options
            pages: {
                activateOn: 'click'
            },

            // Commands options
            commands: {
                pages: 1,
                buttons: 1
            }
        });
    })();
});