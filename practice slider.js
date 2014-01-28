repeater = setInterval(function() {
}, 1);
function LFSlider() {
    // this.repeater =  setInterval(function(){}, 1);
    this.current_slide = Object(1);
    this.options = {
        'domId': 'lfSlider',
        'width': 950,
        'height': 480,
        'number_slides': 4
    };
    this.setup = function(ops) {
        this.options = ops;
    };
    this.play = function() {
        (function(scope) {
            repeater = setTimeout(function() {
                scope.goNext();
            }, 6000);
        })(this);
    };
    this.goNext = function() {
        clearInterval(repeater);
        var oldSlide = this.current_slide * 1;
        this.current_slide = (this.current_slide >= this.options['number_slides']) ? 1 : this.current_slide + 1;
        // console.log(this.current_slide+'!'+oldSlide);
        jQuery('#slide_text_' + oldSlide).animate({
            'opacity': '0',
            'top': '-2000'
        }, 2000);
        jQuery('#slide_text_' + this.current_slide).animate({
            'opacity': '1',
            'top': '0'
        }, 2000);

        jQuery('#slide_img_' + this.current_slide).css('left', 4000);
        jQuery('#slide_img_' + this.current_slide).animate({
            'opacity': '1',
            'left': '0'
        }, 2000);

        jQuery('#slide_img_' + oldSlide).animate({
            'opacity': '0',
            'left': '-4000'
        }, 2000);
        this.play();
    };
    this.goPrev = function() {
        clearInterval(repeater);
        var oldSlide = this.current_slide * 1;
        this.current_slide = (this.current_slide == 1) ? this.options['number_slides'] : this.current_slide - 1;
        //  console.log(this.current_slide+'!'+oldSlide);
        jQuery('#slide_text_' + oldSlide).animate({
            'opacity': '0',
            'top': '-2000'
        }, 2000);
        jQuery('#slide_text_' + this.current_slide).animate({
            'opacity': '1',
            'top': '0'
        }, 2000);

        jQuery('#slide_img_' + this.current_slide).css('left', -2000);
        jQuery('#slide_img_' + this.current_slide).animate({
            'opacity': '1',
            'left': '0'
        }, 2000);

        jQuery('#slide_img_' + oldSlide).animate({
            'opacity': '0',
            'left': '4000'
        }, 2000);

        this.play();
    };
}
var lfSlider = new LFSlider();
jQuery(document).ready(function() {
    lfSlider.goNext();

});