


function initMapboxJS() {


  mapboxgl.accessToken = 'pk.eyJ1IjoibG91aXNlZmxvdyIsImEiOiJjbDB6NWtwcm8xcjc5M2psemkxNmI5bXZlIn0.IWD87cn4j2hWcKicvicKPQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [5.387200, 52.155],
    zoom: 7
  });


  const draw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
      polygon: true,
      trash: true
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    defaultMode: 'draw_polygon'
  });
  map.addControl(draw);

  map.on('draw.create', updateArea);
  map.on('draw.delete', updateArea);
  map.on('draw.update', updateArea);


  function updateArea(e) {
    const data = draw.getAll();
    const extend = document.getElementById('extend');
    if (data.features.length > 0) {
      const bbox = turf.bbox(data)
      extend.innerHTML = `${bbox}`;
    } else {
      extend.innerHTML = '';
      if (e.type !== 'draw.delete')
        alert('Click the map to draw a polygon.');
    }
  }


}
