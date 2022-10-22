

var LM 



var favoritePlaces = [
    {content:'<strong>#1: usa Home Sweet Home!<strong>', coordinates:{lat:41.837546,lng:-88.0146821}, iconImagePath:"one.png"},
   
]; 

var currentPlaceIndex = 0;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 10

function initstart() {
    console.log('map')
    
}

function initMap() {

    

    
    LM = new google.maps.Map(document.getElementById('ID'), {
        center: {lat:0,lng:0},zoom: 3});

        var marker1 = new google.maps.Marker({position:{lat:37.0902,lng:-95.7129}, map:LM});
        marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow = new google.maps.InfoWindow({content:'United States'});
        marker1.addListener('click', function() {
            infoWindow.open(LM, marker1);
        });
        
       

    Score(score);
    SetHint("hint")
    
    google.maps.event.addListener(LM,'idle', function () {
    
        updateGame();
    });
}



function Score() {
    document.getElementById("lol-id").value = score;
}


function SetHint(hint) {
    document.getElementById("lol2-id").value = hint;  
    
};



function updateGame() {
    console.log('UpdateGame()');
    var zoomLevel = LM.getZoom();


    var inBounds = false;
    SetHint("OUT OF BOUNDS");
    
    if (inBounds == false){
        SetHint("You are not in BOUNDS");
    }


   
    if (LM.getBounds().contains(currentPlace.coordinates)) {
        inBounds = true;
        SetHint("INBOUNDS", zoomLevel)
        //rquirement 3.something
    }
    
   
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}


