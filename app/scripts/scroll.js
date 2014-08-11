meters = localStorage.getItem('meters') || 0;

window.showMeters = function () {
    $('.meters').remove();
    $('.rightColumnWrapper').append('<div style="padding: 12px; background: #fff; border: 1px solid; border-color: #e5e6e9 #dfe0e4 #d0d1d5; -webkit-border-radius: 3px; margin-top: 10px;" class="meters"><h2 style="color: #3b5998">You already scrolled ' + meters + ' meters</h2></div>');
};

if (meters != 0) {
    showMeters();
}

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


        if (distancecount / resolution > 100) {
            checkpoint();

            _dist += distancecount;
            distancecount = 0;

        } else {
            distancecount = distance - _dist;
        }
    });
    window.checkpoint = function () {

        localStorage.setItem('meters', meters);

        meters++;
        showMeters();

    };


};