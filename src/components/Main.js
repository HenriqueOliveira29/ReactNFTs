import React, {useState, useEffect} from 'react'
import instagramLogo from '../../src/assets/owner/instagram.png'
import twitterLogo from '../../src/assets/owner/twitter.png'
import moreIcon from '../../src/assets/owner/more.png'
import './Main.css'
import PunkList from './PunkList'

const Main = ({selectedPunk , punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]) 

    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    },[punkListData, selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                        className="selectedPunk" 
                        src={activePunk.image_original_url} 
                        alt=''></img>
                    </div>
                </div>
                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                        <span className='itemNumber'>#{activePunk.token_id}</span>
                    </div>
                    
                
                <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img src={activePunk.owner.profile_img_url} alt='' /> 
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div>
                                    {activePunk.owner.address}
                                </div>
                                <div className='ownerHandle'>
                                    @HenriqueOliveira
                                </div>
                            </div>
                            <div className='ownerLinks'>
                                <div className='ownerLink'>
                                    <img src={instagramLogo} alt=''></img>
                                </div>
                                <div className='ownerLink'>
                                    <img src={twitterLogo} alt=''></img>
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
