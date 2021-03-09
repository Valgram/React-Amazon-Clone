import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
export const TypographyStyled2 = withStyles((theme) => ({
    root: {
        fontSize: '13px',
        lineHeight: '0.7',
    },
}))(Typography);
