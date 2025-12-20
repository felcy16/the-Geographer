//Choosing basemaps using radio buttons
let map = L.map('map').setView([ 12, 76.80 ], 10);
let currentBasemap
currentBasemap=L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
                attribution: "© OpenStreetMap contributors © CARTO",
                    });
currentBasemap.addTo(map);    
function radioIfElse(){
            //setting variables for each radio button
            var openstreet = document.getElementById("openstreet");
            var satellite = document.getElementById("satellite");
            var topo = document.getElementById("topo");
            //radio button checking using if-else
            if(openstreet.checked==true){
                currentBasemap=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             });
            currentBasemap.addTo(map);
            }
            else if(satellite.checked==true){
                currentBasemap=L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',{
                 maxZoom: 20,
                 subdomains:['mt0','mt1','mt2','mt3'],
                 attribution: '&copy; Google Maps'
             });
             currentBasemap.addTo(map);  
            }
            else if(topo.checked==true){
                currentBasemap=L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                        maxZoom: 17,
                        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    });
                currentBasemap.addTo(map);
            }
        }