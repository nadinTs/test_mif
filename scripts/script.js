
$(document).ready(function() {
    var eyeParent = $('#js_eye'), eye = eyeParent.find('#js_eye-tracker');
    var x1 = eyeParent.offset().left + 60, y1 = eyeParent.offset().top + 60;

    var r = 55, x, y, x2, y2, isEyeProcessed = false;
    $('body').mousemove(function (e) {
        if (!isEyeProcessed) {
            isEyeProcessed = true;
            var x2 = e.pageX, y2 = e.pageY;

            y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
            x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;


            eye.css({
                marginTop: (y - y1) + 'px',
                marginLeft: (x - x1) + 'px'
            });
            isEyeProcessed = false;
        }
    });
});


//(function(){
//    var times = 0;
//    var eye = document.querySelector('.eye__animation');
//
//    var count = getComputedStyle('eye');
//    function go() {
//        if (times > 1){
//            eye.style.transitionDelay = 'running'
//        } else {
//
//        }
//    }
//})();