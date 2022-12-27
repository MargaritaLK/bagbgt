

async function getFeatureTypes() {
  const base_url = `https://api.pdok.nl/lv/bgt/download/v1_0/dataset`
  const response = await fetch(base_url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
    }
  })
  const responseJson = await response.json()
  const featuretypes = responseJson.timeliness
  const featuretypesList = []
  const featureList = document.getElementById('featureList')
  featuretypes.forEach(elem => {
    featuretypesList.push(elem.featuretype);
    const feature = document.createElement('div')
    feature.classList.add('feature-element')
    feature.setAttribute("id", elem.featuretype)
    feature.textContent = `${elem.featuretype} -`
    featureList.append(feature)
  })
}

getFeatureTypes()


const featureType = 'vegetatieobject'


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
