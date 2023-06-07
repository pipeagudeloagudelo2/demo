import React from 'react';
import Layer from '../components/baseComponents/layer.jsx';
import Text from '../components/baseComponents/text.jsx';
import TextInput from '../components/customCode/textInput.jsx';
import SimpleButton from '../components/customCode/simpleButton.jsx';
import DefaultButton from '../components/customCode/defaultButton.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

function Login1(props) {
    

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        
<Layer id="login1-1"  href={props.href}  
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'1.0245901639344255vh'} shadowOffsetX={'0px'}shadowOffsetY={'0px'}shadowColor={'aaaaaa'}shadowBlur={'10'}
    backgroundColor={'FFFFFF'}
  valueheight={'350px'}
 valuewidth={'420px'}
 >
<Layer id="layer-1"    
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
 shadowOffsetX={'0px'}shadowOffsetY={'0px'}shadowColor={'AAAAAA'}shadowBlur={'0'}
    backgroundColor={'FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'301px'}
 >
<Text id="text-1" content="¡Hola! Ingresa tu teléfono, e-mail o usuario"    
  textAlign={'textAlign=left'}
 fontSize={'18pt'}
 textWeight={'fontWeight=bold'}
  color={'171717'}
  valueheight={'60px'}
 valuewidth={'calc100%'}
 />
<Layer id="layer-9"    
  
     backgroundColor={'transparent'}
  valueheight={'29px'}
 valuewidth={'100px'}
 ></Layer>
<Layer id="layer-6"    
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'98px'}
 valuewidth={'calc100%'}
 >
<Text id="text-2" content="Teléfono, correo o usuario"    
  
 fontSize={'10pt'}
 
 margin-bottom={'5px'} 
 color={'888888'}
  valueheight={'fit-content'}
 valuewidth={'calc100%'}
 />
<TextInput label={"Type..."} width={"300"} variant={"outlined"} primaryColor={"2c91fc"} neutralColor={"444444"} bodyColor={"222222"} hoverColor={"2c91fc"} fontSize={"1rem"} fontFamily={"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}  onClick={() => openInNewTab(props.url_textinput1)} />
</Layer>
<Layer id="layer-3"    
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'50px'}
 valuewidth={'180px'}
 >
<SimpleButton type={"primary"} label={"Click me!"} backgroundColor={"FFFFFF"} bodyColor={"FFFFFF"} primaryColor={"4096FF"} borderColor={"D9D9D9"} borderRadius={"6"} fontSize={"14"} marginTop={"0px"} marginBottom={"0px"} marginLeft={"0px"} marginRight={"0px"}  onClick={() => openInNewTab(props.url_simplebutton1)} />
<DefaultButton type={"default"} label={"Click me!"} backgroundColor={"FFFFFF"} bodyColor={"4F4F4F"} primaryColor={"4096FF"} borderColor={"D9D9D9"} borderRadius={"6"} fontSize={"14"} marginTop={"0px"} marginBottom={"0px"} marginLeft={"0px"} marginRight={"0px"}  onClick={() => openInNewTab(props.url_defaultbutton1)} />
</Layer>
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(Login1);