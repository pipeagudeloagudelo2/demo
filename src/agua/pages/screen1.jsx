import React from 'react';
import Layer from '../components/baseComponents/layer.jsx';
import Text from '../components/baseComponents/text.jsx';
import CountrySelect from '../components/customCode/countrySelect.jsx';
import SimpleButton from '../components/customCode/simpleButton.jsx';
import TextInput from '../components/customCode/textInput.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        bodyColor_Default: state.Default.bodyColor ? state.Default.bodyColor : state.Default.bodyColor, 

    }
}

function Screen1({bodyColor_Default}) {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className="Screen1"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'space-between',
alignItems:'space-between', overflowY:'scroll',
            }}
        >
            
<Layer id="layer-2"    
  
     backgroundColor={'i1686116026841.png'}  valueheight={'flexGrow=1'}
 valuewidth={'calc100%'}
 >
<Layer id="landingpagemovie-1"    
 
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'flexGrow=1'}
 valuewidth={'calc100%'}
 >
<Layer id="header"    
orientation={'flexDirection=row'}  
     backgroundColor={'transparent'}
  valueheight={'86px'}
 valuewidth={'100vw'}
 >
<Layer id="layer-2"    
 
primaryAxisAlign={'justifyContent=center'} 
   padding-left={'50px'} 
  backgroundColor={'transparent'}
  valueheight={'calc100%'}
 valuewidth={'flexGrow=1'}
 >
<Text id="text-1" content="Insert Your Favorite Streaming Platforme"    
  
 fontFamily={'Pacifico'}
 fontSize={'34pt'}
 textWeight={'fontWeight=bold'}
  color={'F44336'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3" destination="/Screen2"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
   padding-left={'3vw'} 
padding-right={'40px'} 
  backgroundColor={'transparent'}
  valueheight={'10vh'}
 valuewidth={'fit-content'}
 >
<CountrySelect label={"Choose a country"} width={"300"} defaultValue={"-1"} primaryColor={"2c91fc"} neutralColor={"444444"} bodyColor={"222222"} hoverColor={"2c91fc"} fontSize={"1rem"} fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}   />
<Layer id="layer-35"    
  
     backgroundColor={'transparent'}
  valueheight={'calc100%'}
 valuewidth={'15px'}
 ></Layer>
<SimpleButton type={"primary"} label={"Click me!"} backgroundColor={"FFFFFF"} bodyColor={"FFFFFF"} primaryColor={"4096FF"} borderColor={"D9D9D9"} borderRadius={"6"} fontSize={"14"} marginTop={"0px"} marginBottom={"0px"} marginLeft={"0px"} marginRight={"0px"}   />
</Layer>
</Layer>
<Layer id="body"    
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.0999999999999996vh'}    margin-top={'30px'} 
 backgroundColor={'transparent'}
  valueheight={'70%'}
 valuewidth={'90%'}
 >
<Layer id="layer-8"    
 
primaryAxisAlign={'justifyContent=center'} 
   padding-left={'9px'} 
  backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'80%'}
 >
<Layer id="layer-9"    
  
 shadowOffsetX={'0px'}shadowOffsetY={'0px'}shadowColor={'000000'}shadowBlur={'0'}
    backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-4" content="Movies, series and more"   backgroundColor={bodyColor_Default} 
  
 fontFamily={'Pacifico'}
 fontSize={'48pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-10"    
 
primaryAxisAlign={'justifyContent=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-5" content="Whatch everything you want, whenever you want, wherever you want!"   backgroundColor={bodyColor_Default} 
  
 fontFamily={'OpenSansCondensed'}
 fontSize={'20pt'}
 
 margin-top={'50px'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-11"    
 
primaryAxisAlign={'justifyContent=flex-end'} 
    margin-top={'15px'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-6" content="Enter your email to create or restart your membership"   backgroundColor={bodyColor_Default} 
  
 fontFamily={'OpenSansCondensed'}
 fontSize={'14pt'}
 
 margin-bottom={'5px'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-12"    
orientation={'flexDirection=row'} 
secondaryAxisAlign={'alignItems=center'} 
   padding-top={'20px'} 
padding-left={'2px'} 
 margin-top={'20px'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<TextInput label={"Type..."} width={"300"} variant={"outlined"} primaryColor={"2c91fc"} neutralColor={"444444"} bodyColor={"222222"} hoverColor={"2c91fc"} fontSize={"1rem"} fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}   />
<Layer id="layer-20"    
orientation={'flexDirection=row'}  
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'15px'}
 ></Layer>
<Layer id="layer-34"    
  
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<SimpleButton type={"primary"} label={"Click me!"} backgroundColor={"FFFFFF"} bodyColor={"FFFFFF"} primaryColor={"4096FF"} borderColor={"D9D9D9"} borderRadius={"6"} fontSize={"14"} marginTop={"0px"} marginBottom={"0px"} marginLeft={"0px"} marginRight={"0px"}   />
</Layer>
</Layer>
</Layer>
</Layer>
</Layer>
</Layer>
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen1);
            