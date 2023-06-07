import React from 'react';
import Layer from '../components/baseComponents/layer.jsx';
import Text from '../components/baseComponents/text.jsx';
import CountrySelect from '../components/customCode/countrySelect.jsx';
import SimpleButton from '../components/customCode/simpleButton.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

function LandingPageNav(props) {
    

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        
<Layer id="landingpagenav-1"  href={props.href}  
orientation={'flexDirection=row'}  
     backgroundColor={'transparent'}
  valueheight={'86px'}
 valuewidth={'calc100%'}
 >
<Layer id="layer-2"    
 
primaryAxisAlign={'justifyContent=center'} 
   padding-left={'50px'} 
  backgroundColor={'transparent'}
  valueheight={'calc100%'}
 valuewidth={'flexGrow=1'}
 >
<Text id="text-1" content="Your favorite streaming platform"    
  
 fontFamily={'Pacifico'}
 fontSize={'34pt'}
 textWeight={'fontWeight=bold'}
  color={'F44336'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3"    
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
   padding-right={'40px'} 
  backgroundColor={'transparent'}
  valueheight={'calc100%'}
 valuewidth={'500px'}
 >
<CountrySelect label={"Choose a country"} width={"300"} defaultValue={"-1"} primaryColor={"2c91fc"} neutralColor={"444444"} bodyColor={"222222"} hoverColor={"2c91fc"} fontSize={"1rem"} fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}  onClick={() => openInNewTab(props.url_countryselect1)} />
<Layer id="layer-16"    
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'0.48302107728337235vh'}     backgroundColor={'4096FF'}
  valueheight={'55px'}
 valuewidth={'150px'}
 >
<SimpleButton type={"primary"} label={"Click me!"} backgroundColor={"FFFFFF"} bodyColor={"FFFFFF"} primaryColor={"4096FF"} borderColor={"D9D9D9"} borderRadius={"6"} fontSize={"14"} marginTop={"0px"} marginBottom={"0px"} marginLeft={"0px"} marginRight={"0px"}  onClick={() => openInNewTab(props.url_simplebutton1)} />
</Layer>
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(LandingPageNav);