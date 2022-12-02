import axios from 'axios';
import { useState, useEffect } from 'react';



const NFTCard = (props) => {
  const [nftList, setNftList] = useState(null)
  const config = {
    headers: {
      Authorization: '8262818e-945a-4b6e-b76e-48de492682ff'
  }
  };

  useEffect(() => {
    axios.get('https://api.nftport.xyz/v0/nfts', config)
        .then(response => {
            console.log(response.data.nfts);
            setNftList(response.data.nfts);
        })
}, [])



  return (
    <div className='hugger'>
      {
        nftList ? nftList.filter(nft => nft.metadata?.image).map((nft) => {
          return (
            <div className="card-main-container">
              <>
                <h3>{nft.metadata?.name}</h3>
              </>
              <div className="img-container">
                <img src={nft.metadata?.image} alt="nft" />
              </div>
              <div className="description-div">
                <span>{nft.metadata?.description}</span>
              </div>
              <>
              <a href={nft.metadata_url}>
                <button>SEE DETAILS</button>
              </a>
              </>
            </div>
          )
        })
        : ''
      }
    </div>
  )
}
export default NFTCard;