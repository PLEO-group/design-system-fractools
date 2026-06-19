import React from 'react';

const labelColor = '#736E8C';

const cardStyle = {
    width: '172px',
    flexShrink: 0,
    cursor: 'pointer',
};

const swatchStyle = {
    width: '100%',
    height: '108px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease, background-color 200ms ease-in-out',
};

const labelStyle = {
    margin: '10px 0 0',
    color: labelColor,
    fontSize: '16px',
    lineHeight: '18px',
};

const hexStyle = {
    margin: '2px 0 0',
    color: '#A6A1B8',
    fontSize: '16px',
    lineHeight: '18px',
};

export const ColorSwatch = ({ token, fullName=false }) => {
    const backgroundColor = !token.isPlaceholder ? token.value : '#f5f4fa';
    const borderColor = token.isPlaceholder ? '1px dashed #c7c1d8' : 'none';
    const titleText = token.isPlaceholder ? token.name : `Token: ${token.name} | HEX: ${token.value}`;
    const name = fullName
        ? token.name
        : token.name.replace(/^--color-/, '').replace(/^--/, '').replace(' (Brak)', '');
    const hexValue = token.value ? token.value.toUpperCase() : '';

    return (
        <div style={cardStyle} title={titleText}>
            <div
                style={{
                    ...swatchStyle,
                    backgroundColor: backgroundColor,
                    border: borderColor,
                }}
            />
            <p style={labelStyle}>
                {name}
            </p>
            {hexValue && (
                <p style={hexStyle}>
                    {hexValue}
                </p>
            )}
        </div>
    );
};
