const { azuki } = require('../init.js')
const axios = require('axios').default;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const fetchFromURL = async (url) => {
  try {
    return await axios.get(url);
  } catch (e){
    console.error(e)
  }
}
const main = async () => {
  const totalSupply = await azuki.methods.totalSupply().call()
  const attributes = {}
  for (let i = 0; i < 10000; i++) {
    let tokenId = i
    const tokenURI =  await azuki.methods.tokenURI(tokenId).call()
    const owner =   await azuki.methods.ownerOf(tokenId).call()
    const ownerData =   await azuki.methods.getOwnershipData(tokenId).call()
    const response = await fetchFromURL(tokenURI)
    const data = response.data
    let output = `${tokenId},"${data.name}", "${data.image}"`
    attributes[i] = {}
    for (const attr of data.attributes) {
      attributes[i][attr.trait_type] = attr.value
    }
    const types = ['Type','Hair','Ear','Neck','Clothing','Eyes','Mouth','Offhand','Background', 'Special']
    for (const type of types) {
      if (!attributes[i][type]) {
        output = `${output},""`
      } else {
        output = `${output},"${attributes[i][type]}"`
        // console.log(`${attributes[i][type]},`)
      }
    }
    output = `${output},${ownerData.addr},${ownerData.startTimestamp}`
    console.log(output)
    await sleep(50)
  }

}

main()

