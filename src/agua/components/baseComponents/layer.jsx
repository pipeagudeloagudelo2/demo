import React from 'react';
import { Link } from 'react-router-dom';

function Layer(props) {
    let style = { display: 'flex', overflow: 'hidden', flexShrink: 0 };

    if (props['margin-top']) style.marginTop = props['margin-top'];
    if (props['margin-bottom']) style.marginBottom = props['margin-bottom'];
    if (props['margin-right']) style.marginRight = props['margin-right'];
    if (props['margin-left']) style.marginLeft = props['margin-left'];
    if (props.valuewidth) {
        if (props.valuewidth.indexOf('flexGrow') !== -1) {
            const info = props.valuewidth.split('=');
            style[info[0]] = info[1];
            style.flexShrink = 1;
        } else if (props.valuewidth.indexOf('calc100%') !== -1) {
            let margin = '';
            const otherMargin = style.marginRight ? ' + ' : '';
            if (style.marginLeft) margin += style.marginLeft + otherMargin;
            if (style.marginRight) margin += style.marginRight;
            style.width = margin === '' ? '100%' : 'calc(100% - (' + margin + '))';
        } else {
            style.width = props.valuewidth;
        }
    } else {
        style.width = '100vw';
    }

    if (props.valueheight) {
        if (props.valueheight.indexOf('flexGrow') !== -1) {
            const info = props.valueheight.split('=');
            style[info[0]] = info[1];
            style.flexShrink = 1;
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
        style.height = '10vh';
    }
    if (props.backgroundColor && props.backgroundColor.indexOf('.') !== -1) {
        const url = props.backgroundColor.indexOf('/') != -1 ? props.backgroundColor : '../../assets/' + props.backgroundColor;
        style.backgroundImage = 'url("' + url + '")';
        style.backgroundRepeat = 'no-repeat';
        style.backgroundSize = 'cover';
        style.backgroundPosition = 'center';
    } else if (props.backgroundColor) {
        style.backgroundColor = '#' + props.backgroundColor;
    } else {
        style.backgroundColor = 'transparent';
    }
    if (props['padding-top'] || props['padding-bottom'] || props['padding-right'] || props['padding-left']) style.boxSizing = 'border-box';
    if (props['padding-top']) style.paddingTop = props['padding-top'];
    if (props['padding-bottom']) style.paddingBottom = props['padding-bottom'];
    if (props['padding-right']) style.paddingRight = props['padding-right'];
    if (props['padding-left']) style.paddingLeft = props['padding-left'];
    if (props.radiusAbsolute) style.borderRadius = props.radiusAbsolute;
    const shadowOffsetX = props.shadowOffsetX ? props.shadowOffsetX : '0px';
    const shadowOffsetY = props.shadowOffsetY ? props.shadowOffsetY : '0px';
    const blur = props.shadowBlur ? props.shadowBlur + 'px' : '0px';
    const shadowColor = props.shadowColor ? props.shadowColor : 'FFFFFF';
    if (props.shadowOffsetX || props.shadowOffsetY || props.shadowBlur || props.shadowColor) style.boxShadow = shadowOffsetX + ' ' + shadowOffsetY + ' ' + blur + ' #' + shadowColor;

    if (props.primaryAxisAlign) {
        const info = props.primaryAxisAlign.split('=');
        style.justifyContent = info[1];
    } else {
        style.justifyContent = 'flex-start';
    }

    if (props.secondaryAxisAlign) {
        const info = props.secondaryAxisAlign.split('=');
        style.alignItems = info[1];
    } else {
        style.alignItems = 'flex-start';
    }

    if (props.orientation) {
        style.flexDirection = 'row';
    } else {
        style.flexDirection = 'column';
    }

    if (props.scrollable) {
        const info = props.scrollable.split('=');
        style.flexShrink = 1;
        style[info[0]] = info[1];
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (props.destination) {
        style.textDecoration = 'none';
        if (props.href) {
            return (
                <Link to={props.destination} id={props.id} onClick={() => openInNewTab(props.href)}  className={props.style} style={style} >
                    {props.children}
                </Link>
            );

        } else {
            return (
                <Link to={props.destination} id={props.id} className={props.style} style={style} >
                    {props.children}
                </Link>
            );
        }
    } else {
        if (props.href) {
            return (
                <div id={props.id}  onClick={() => openInNewTab(props.href)}  className={props.style} style={style} >
                    {props.children}
                </div>
            );
        } else {
            return (
                <div id={props.id} className={props.style} style={style} >
                    {props.children}
                </div>
            );
        }
    }
}

export default Layer;
                