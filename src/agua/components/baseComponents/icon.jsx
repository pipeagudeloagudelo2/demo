import React from 'react';
import { Link } from 'react-router-dom';

function Icon(props) {
    let style = { fontFamily: 'Material Icons' };

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
        style.width = '4vh';
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

    style.padding = '0px 0px 0px 0px';
    style.fontSize = props.fontSize ? props.fontSize : '4vh';
    const color = props.iconColor ? '#' + props.iconColor : props.color ? '#' + props.color : '#888888';
    style.color = color;

    const content = props.icon ? props.icon : props.content;

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (props.destination) {
        style.textDecoration = 'none';
        if (props.href) {
            return (
                <Link id={props.id} onClick={() => openInNewTab(props.href)} className={props.style} style={style} to={props.destination}>
                    {content}
                </Link>
            );
        } else {
            return (
                <Link id={props.id} className={props.style} style={style} to={props.destination}>
                    {content}
                </Link>
            );
        }
    } else {
        if (props.href) {
            return (
                <span id={props.id} onClick={() => openInNewTab(props.href)} className={props.style} style={style} >
                    {content}
                </span>
            );
        } else {
            return (
                <span id={props.id} className={props.style} style={style} >
                    {content}
                </span>
            );
        }
    }
}

export default Icon;
                