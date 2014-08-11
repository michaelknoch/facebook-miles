window.getPPI = function () {
    // create an empty element
    var div = document.createElement("div");
    // give it an absolute size of one inch
    div.style.width = "1cm";
    // append it to the body
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    // read the computed width
    var ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
    // remove it again
    body.removeChild(div);
    // and return the value
    return parseFloat(ppi);
};


window.onFacebookScroll = function () {
    var distance = 0;
    var distancecount = 0;
    var lastScrollTop = 0;
    var _dist = 0;
    var resolution = getPPI();

    $(window).scroll(function (event) {

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            distance = distance + (st - lastScrollTop);

        } else {
            distance = distance - (st - lastScrollTop);
        }
        lastScrollTop = st;
        console.info(distance);


        if(distancecount > 10000) {
            console.error('distancecount');


            window.notify(distance);
            _dist += distancecount;
            distancecount = 0;

        } else {
            console.log('distance', distance);
            console.log('distancecount', distancecount);
            console.log('_dist', _dist);
            distancecount = distance - _dist;
        }
    });
    window.checkpoint = function(px) {

    };

};