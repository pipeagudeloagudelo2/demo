import React from 'react';
import { Link } from 'react-router-dom';

function Image(props) {
    let style = {objectFit: 'contain'};

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
            const otherMargin = style.marginRight? ' + ':'';
            if (style.marginRight) margin += style.marginRight + otherMargin;
            if (style.marginLeft) margin += style.marginLeft;
            style.width = margin === '' ? '100%':'calc(100% - ('+margin+'))';
        } else {
            style.width = props.valuewidth;
        }
    } else {
        style.width = '28vw';
    }

    if (props.valueheight) {
        if (props.valueheight.indexOf('flexGrow') !== -1) {
            const info = props.valueheight.split('=');
            style[info[0]] = info[1];
        } else if (props.valueheight.indexOf('calc100%') !== -1) {
            let margin = '';
            const otherMargin = style.marginRight? ' + ':'';
            if (style.marginTop) margin += style.marginTop + otherMargin;
            if (style.marginBottom) margin += style.marginBottom;
            style.height = margin === '' ? '100%':'calc(100% - ('+margin+'))';
        }  else {
            style.height = props.valueheight;
        }
    } else {
        style.height = '11vw';
    }
    const image = props.src !== 'default' ? props.src.indexOf('/') != -1 ? props.src : '../../assets/' + props.src : 'https://i.ibb.co/5ndGgWv/image-43.png';

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (props.destination) {
        if (props.href) {
            return (
                <Link to={props.destination} style={{ textDecoration: 'none' }}>
                    <img id={props.id} onClick={() => openInNewTab(props.href)} className={props.style} alt={props.name} src={image} style={style} />
                </Link>
            );
        } else {
            return (
                <Link to={props.destination} style={{ textDecoration: 'none' }}>
                    <img id={props.id} className={props.style} alt={props.name} src={image} style={style} />
                </Link>
            );
        }
    } else {
        if (props.href) {
            return (
                <img id={props.id} onClick={() => openInNewTab(props.href)} className={props.style} alt={props.name} src={image} style={style} />
            );
        } else {
            return (
                <img id={props.id} className={props.style} alt={props.name} src={image} style={style} />
            );
        }
        
    }
}

export default Image;
                