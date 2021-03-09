import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';

import { useFilterContext } from '../../context/FilterContext';

export const ButtonStyled2 = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(120, 166, 187)',
        color: 'white',
        height: '32px',
        '&:hover': {
            backgroundColor: 'rgb(31, 69, 87)',
        },
    },
}))(Button);

export const DropdownButton = () => {
    const { filtered_product, sort, updateSort } = useFilterContext();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const options = ['price (lowest)', 'price (highest)', 'name (a-z)', 'name (z-a)'];
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    return (
        <Grid>
            <ButtonGroup variant='contained' ref={anchorRef} aria-label='split button'>
                <ButtonStyled2 onClick={handleClick}>{options[selectedIndex]}</ButtonStyled2>
                <ButtonStyled2
                    color='primary'
                    size='small'
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label='select merge strategy'
                    aria-haspopup='menu'
                    onClick={handleToggle}
                  
                >
                    <ArrowDropDownIcon  />
                </ButtonStyled2>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id='split-button-menu'>
                                    {options.map((option, index) => (
                                        <MenuItem  key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Grid>
    );
};
// disabled={index === 2}
