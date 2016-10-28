var data = [
    {'h3':'True Barbeque', 'img':'img/cow.png', 'desc':'Come see our amazing cow! He\'s SOOOOO good! Pellentesque odio nisi, euismod in, pharetra a, ultricies.'},
    {'h3':'News Update', 'desc':'Dancing chicken dies in tragiv blacksmithing accident. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.'},
    {'h3':'Our Friends', 'desc':['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']}
];

    $(document).ready(function () {

        // ---- FlexSlider ---- //

        $('.flexslider').flexslider({
            animation: 'slide',
            controlsContainer: '.flexslider'
        });

        // ---- Footer JSON Function ---- //
        // Could be further abstracted with a function that checks if there are multiple data types in the description
        $('.footer').prepend('<ul>');
        for (var i = 0; i < data.length; i++) {
            var h3 = data[i].h3;
            var img = '';
            var desc = '';
            if (data[i].img) { var img = "<img src='" + data[i].img + "'/>"; }
            if (data[i].desc) {
                var desc = data[i].desc;
                if (typeof (desc) == 'object') { // Checks to see if 'desc' is an array
                    $('.footer > ul').append('<li><h3>' + h3 + '</h3>' + img + '<ul></ul></li>');
                    for (var j = 0; j < desc.length; j++) {
                        $('.footer > ul > li > ul').append('<li>' + desc[j] + '</li>');
                    }
                }
                else {
                    $('.footer > ul').append('<li><h3>' + h3 + '</h3>' + img + desc + '</li>');
                }
            }
        }
    });