ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [49.816067, 73.078805],
            zoom: 17,
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([49.816067, 73.078805], {
        });
		myMap.geoObjects.add(myPlacemark);

}