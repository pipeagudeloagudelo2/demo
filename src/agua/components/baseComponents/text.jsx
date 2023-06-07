import React from 'react';
import { Link } from 'react-router-dom';

function Text(props) {
    let style = {};
    if (props['margin-top']) style.marginTop = props['margin-top'];
    if (props['margin-bottom']) style.marginBottom = props['margin-bottom'];
    if (props['margin-right']) style.marginRight = props['margin-right'];
    if (props['margin-left']) style.marginLeft = props['margin-left'];
    if (props.valuewidth) {
        if (props.valuewidth.indexOf('flexGrow') !== -1) {
            const info = props.valuewidth.split('=');
            style[info[0]] = info[1];
        } else if (props.valuewidth.indexOf('calc100%') !== -1) {
            let margin = '';
            const otherMargin = style.marginRight ? ' + ' : '';
            if (style.marginRight) margin += style.marginRight + otherMargin;
            if (style.marginLeft) margin += style.marginLeft;
            style.width = margin === '' ? '100%' : 'calc(100% - (' + margin + '))';
        } else {
            style.width = props.valuewidth;
        }
    } else {
        style.width = '18vw';
    }

    if (props.valueheight) {
        if (props.valueheight.indexOf('flexGrow') !== -1) {
            const info = props.valueheight.split('=');
            style[info[0]] = info[1];
        } else if (props.valueheight.indexOf('calc100%') !== -1) {
            let margin = '';
            const otherMargin = style.marginRight ? ' + ' : '';
            if (style.marginTop) margin += style.marginTop + otherMargin;
            if (style.marginBottom) margin += style.marginBottom;
            style.height = margin === '' ? '100%' : 'calc(100% - (' + margin + '))';
        } else {
            style.height = props.valueheight;
        }
    } else {
        style.height = '4vh';
    }

    const fontFamily = props.fontFamily ? props.fontFamily : '-apple-system, system-ui, BlinkMacSystemFont, \'Roboto\', sans-serif';
    style.fontFamily = fontFamily;
    const fontSize = props.fontSize ? props.fontSize : '18pt';
    style.fontSize = fontSize;
    const color = props.color ? '#' + props.color : props.backgroundColor ? '#' + props.backgroundColor : '#888888';
    style.color = color;

    if (props.textWeight) {
        const info = props.textWeight.split('=');
        style[info[0]] = info[1];
    } else {
        style.fontWeight = 'normal';
    }
    if (props.textAlign) {
        const info = props.textAlign.split('=');
        style.textAlign = info[1];
    } else {
        style.textAlign = 'left';
    }

    const content = props.text ? props.text : props.content;

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (props.destination) {
        if (props.href) {
            return (
                <Link to={props.destination} onClick={() => openInNewTab(props.href)} style={{ textDecoration: 'none' }}>
                    <div id={props.id} className={props.style} style={style} >
                        {content}
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={props.destination} style={{ textDecoration: 'none' }}>
                    <div id={props.id} className={props.style} style={style} >
                        {content}
                    </div>
                </Link>
            );
        }
    } else {
        if (props.href) {
            return (
                <div id={props.id} onClick={() => openInNewTab(props.href)} className={props.style} style={style} >
                    {content}
                </div>
            );
        } else {
            return (
                <div id={props.id} className={props.style} style={style} >
                    {content}
                </div>
            );
        }
    }
}

export default Text;
                