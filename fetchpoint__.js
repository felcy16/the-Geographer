/// for point file


// // Modal close functionality
// const modal = document.getElementById('imageModal');
// const modalImg = document.getElementById('modalImg');
// const closeBtn = document.getElementsByClassName('close')[0];

// closeBtn.onclick = function() {
//     modal.style.display = 'none';
// };

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// };

// // Function to show full image in modal
// window.onclick = function showFullscreen(imagePath) {
//             modal.style.display = 'block';
//             modalImg.style.maxWidth = '90%';
//             modalImg.src = imagePath;
//         };
//  fresh codes
fetch('output_locations.geojson', {
    cache: 'no-store'  // Don't use cached version
})
    .then(r => r.json())
    .then(geojson => {
        const totalPhotos = geojson.features.length;
        document.getElementById("totalPhotos").textContent = totalPhotos;
        L.geoJSON(geojson, {
          pointToLayer: function(_feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 5,
                  color: '#1916ddff',
                  weight: 1.5,
                  fillColor: '#fe136dff',
                  fillOpacity: 0.5,
                  size: 8
                  //shape: 'square'
              });
            },
            onEachFeature: function(feature, layer) {
                // Get filename from GeoJSON properties
                let Photo_no = feature.properties.Photo_no;
                
                // Construct image path from folder
                let imagePath = './Photos/' + Photo_no;

                //set image path as a varaible
                
                // Create popup with image
                let popupContent = `
                    <div>
                        <h3>${Photo_no}<br>${feature.properties.Date} ${feature.properties.Time}</h3>
                        <img class="popup-image"
                          src="${imagePath}" 
                          alt="${Photo_no}" 
                          style= "width: 300px; cursor: pointer;"
                          onclick= "window.showFullscreen('${imagePath}')">
                        <p>Latitude: ${feature.properties.Latitude}<br>
                        Longitude: ${feature.properties.Longitude}<br></p>
                        <p>Altitude: ${feature.properties.Altitude} meters</p>
                    </div>
                `;
                
                layer.bindPopup(popupContent);
                
            }
        }).addTo(map);
    });
