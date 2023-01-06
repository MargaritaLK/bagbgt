
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
