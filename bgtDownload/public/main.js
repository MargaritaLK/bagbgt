

getFeatureTypes()

const featureType = 'waterdeel'

//  :
// 93262, 1 437128, 4 : 93416, 7 437216, 8

// 93040, 2 437031, 4 : 93591, 6 437346, 7
// 91251 435271 : 96637 438351

const ext = {
  minx: 93262.1,
  miny: 437128.4,
  maxx: 93416.7,
  maxy: 437216.8
}



// const ext = {
//   minx: 79560.9,
//   miny: 454839.0,
//   maxx: 81083.7,
//   maxy: 455696.2
// }


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
