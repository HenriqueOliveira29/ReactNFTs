import React from 'react'

const Main = () => {
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
                <div className='punkDetails' style={{}}></div>
            </div>
        </div>
    )
}

export default Main
