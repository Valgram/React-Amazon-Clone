import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import React from 'react';

export const TypographyStyled3 = withStyles((theme) => ({
    root: {
        fontSize: '13px',
        lineHeight: '0.7',
        paddingTop: '7px',
    },
}))(Typography);
