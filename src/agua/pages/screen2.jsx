import React from 'react';
import LandingPageNav from '../layouts/landingPageNav.jsx';
import Layer from '../components/baseComponents/layer.jsx';
import Login1 from '../layouts/login1.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

function Screen2({}) {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className="Screen2"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'flex-start',
alignItems:'flex-start', overflowY:'scroll',
            }}
        >
            
<LandingPageNav  />
<Layer id="layer-28"    
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'GIF alternativo.gif'}  valueheight={'flexGrow=1'}
 valuewidth={'calc100%'}
 >
<Login1  />
</Layer>
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen2);
            