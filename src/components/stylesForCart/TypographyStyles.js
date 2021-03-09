import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const TypographyStyled1 = withStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        fontSize: '26px',
    },
}))(Typography);
export const TypographyStyled2 = withStyles((theme) => ({
    root: {
        fontSize: '15px',
    },
}))(Typography);
export const TypographyStyled3 = withStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
}))(Typography);
export const TypographyStyled4 = withStyles((theme) => ({
    root: {
        fontSize: '20px',
        margin: '20px',
    },
}))(Typography);
export const TypographyStyled5 = withStyles((theme) => ({
    root: {
        color: 'rgb(120, 166, 187)',
        fontSize: '25px',
        fontWeight: 'bold',
    },
}))(Typography);

export const TypographyStyled6 = withStyles((theme) => ({
    root: {
        color: 'rgb(31, 69, 87)',
        fontSize: '13px',
        fontWeight: 'bold',
    },
}))(Typography);
