document.getElementById('map-pin').addEventListener('click', function () {

    var latitude = 50.91863414414366;
    var longitude = 13.342826521182461;

    var mapsUrl = 'https://maps.google.com/maps?q=' + latitude + ',' + longitude;

    window.open(mapsUrl, '_blank');
});

