
var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[-26.5,-25], [1021.5,1023]];
var image = L.imageOverlay('static/lib/images/LovePark.jpg', bounds).addTo(map);

map.fitBounds(bounds);

var vidIcon = L.icon({
    iconUrl: 'static/lib/images/vid3.png'
});

L.marker([370, 408], {
  icon: vidIcon
}).addTo(map).bindPopup("<img src='static/lib/images/wenning.gif' alt='bovaNam' height='300' width='400'>");

L.marker([380, 870], {
  icon: vidIcon
}).addTo(map).bindPopup("<img src='static/lib/images/wenning2.gif' alt='bovaNam' height='300' width='400'>");

L.marker([900, 800], {
  icon: vidIcon
}).addTo(map).bindPopup("<img src='static/lib/images/corcoran.gif' alt='bovaNam' height='300' width='400'>");

L.marker([180, 375], {
  icon: vidIcon
}).addTo(map).bindPopup("<img src='static/lib/images/suciu.gif' alt='bovaNam' height='300' width='400'>");






