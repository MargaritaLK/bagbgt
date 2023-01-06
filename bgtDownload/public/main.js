

getFeatureTypes()

initMapboxJS()


const featureType = 'waterdeel'

// const ext = {
//   minx: NaN,
//   miny: NaN,
//   maxx: NaN,
//   maxy: NaN,
// }


document.getElementById('useSelection').addEventListener('click', async event => {
  let bbox_string = document.getElementById("extend").innerHTML;
  let bbox = bbox_string.split(",")
    ext.minx = +bbox[0]
    ext.miny = +bbox[1]
    ext.maxx= +bbox[2]
    ext.maxy =  +bbox[3]
    console.log(ext);

    // omzetten naar RD
})




const ext = {
  minx: 79560.9,
  miny: 454839.0,
  maxx: 81083.7,
  maxy: 455696.2
}


const BGTselection = {
  "featuretypes": [featureType],
  "format": "citygml",
  "geofilter": `POLYGON((${ext.minx} ${ext.miny}, ${ext.maxx} ${ext.miny}, ${ext.maxx} ${ext.maxy}, ${ext.minx} ${ext.maxy}, ${ext.minx} ${ext.miny}))`
}

bgtDownloadSteps(BGTselection)



// const BGTselection = {
//   "featuretypes": ["waterdeel"],
//   "format": "citygml",
//   "geofilter": "POLYGON((213089 593892, 217076 593892, 217076 597981, 213089 597981, 213089 593892))"
// }
