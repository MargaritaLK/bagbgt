console.log(' define bounding box');


const ext = {
  minx: 77782,
  miny: 456224,
  maxx: 78906,
  maxy: 456903
}



const TESTselection = {
  "featuretypes": ["waterdeel"],
  "format": "citygml",
  "geofilter": `POLYGON((${ext.minx} 593892, 217076 593892, 217076 597981, 213089 597981, 213089 593892))`
}

console.log(TESTselection);
