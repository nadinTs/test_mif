//angular.module('app', []).controller('', function(){
//
//});
$(document).ready(function() {
// сам глаз и "зрачок":
    var eyeParent = $('#js_eye'), eye = eyeParent.find('#js_eye-tracker');
// координаты центра глаза:
    var x1 = eyeParent.offset().left + 60, y1 = eyeParent.offset().top + 60;
// радиус окружности вращения и др. переменные:

    var r = 55, x, y, x2, y2, isEyeProcessed = false;
// вешаем обработчик события на передвежение мыши:
    $('body').mousemove(function (e) {
        if (!isEyeProcessed) {
            isEyeProcessed = true;
// координаты курсора:
            var x2 = e.pageX, y2 = e.pageY;

// используем полученные формулы и рассчитываем координаты зрачка:
            y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
            x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;

            //console.log(x , y);

// применяем координаты:
            eye.css({
                marginTop: (y - y1) + 'px',
                marginLeft: (x - x1) + 'px'
            });
            isEyeProcessed = false;
        }
    });
});

function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,100,100);
    return true;
}
function dragEnter(ev) {
    event.preventDefault();
    return true;
}
function dragOver(ev) {
    event.preventDefault();
}