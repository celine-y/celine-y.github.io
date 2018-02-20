
           
        jQuery(document).ready(function($){
                jQuery('.disabled').on('click', function (ev){
                    console.log("ENTER");
                    ev.preventDefault();
                });
                var $win = $(window),
                    isTouch = !!('ontouchstart' in window),
                    clickEvent = isTouch ? 'tap' : 'click';

                (function(){
                    /**
                     * Calculate the slides width in percent based on the parent's width.
                     *
                     * @return {String}
                     */
                    function calculator(width){
                        var percent = '33.33%';

                        if (width <= 425) {
                            percent = '100%';
                        }
                        else if (width <= 768){
                            percent = '50%';
                        }

                        return percent;
                    };
                    $('.outside').each(function(){
                    // Global slider's DOM elements
                        var $carousel = $(this),
                            $frame = $('.frame', $carousel);
                        // Calling new mightySlider class
                        var slider = new mightySlider($frame, {
                            speed: 1000,
                            easing: 'easeOutExpo',
                            autoScale: 1,
                            viewport: 'fill',

                            // Navigation options
                            navigation: {
                                navigationType: 'basic',
                                activateOn: clickEvent,
                                slideSize: calculator($win.width())
                            },
                            
                            // Buttons options
                            buttons: {
                                prevPage: $('[id^=modern_prev]', this),
                                nextPage: $('[id^=modern_next]', this)
                            }
                        }).init();
                    // Register window :resize event callback
                    $win.resize(function(){
                        // Update slider options using 'set' method
                        slider.set({
                            navigation: {
                                slideSize: calculator($win.width())
                            }
                        });
                    });
                    
                    });
                })();
        });