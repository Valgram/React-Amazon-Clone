import { withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import React from 'react'

export const TypographyStyled = withStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
}))(Typography);
