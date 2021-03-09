import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Amazon__logo from '../assets/amazon__logo.png';
import { useUserContext } from '../context/UserContext';
import { useCartContext } from '../context/CartContext';
import CartButton from '../components/CartButton';
//Drawer
import { DrawerHeader } from './HeaderComponents/DrawerHeader';
//Input
import { InputHeader } from './HeaderComponents/InputHeader';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { TypographyStyled } from './stylesForHeader/TypographyStyled';
import { TypographyStyled2 } from './stylesForHeader/TypographyStyled2';
import { TypographyStyled3 } from './stylesForHeader/TypographyStyled3';

function Header() {
    const { loginWithRedirect, myUser, logout } = useUserContext();
    const { clearCart } = useCartContext();
    return (
        <AppBar position='static' style={{ backgroundColor: '#030c1bf6' }}>
            <Toolbar>
                <Grid lg={12} item container spacing={1} alignItems='center' justify='space-around'>
                    <Grid>
                        <Link to='/'>
                            <div className='img__container'>
                                <img src={Amazon__logo} alt='amazon__logo' width='40px' />
                            </div>
                        </Link>
                    </Grid>
                    <Hidden smDown>
                        <Grid item lg={1.5}>
                            <div className='location__container'>
                                <div>
                                    <LocationOnOutlinedIcon />
                                </div>
                                <div>
                                    <TypographyStyled2>Hola</TypographyStyled2>
                                    <TypographyStyled>Elige tu dirección</TypographyStyled>
                                </div>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item lg={6} md={7} sm={7} xs={6}>
                        <InputHeader />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={1.8}>
                            {myUser ? (
                                <div className='options__container'>
                                    <TypographyStyled
                                        onClick={() => {
                                            clearCart();

                                            logout({ returnTo: window.location.origin });
                                        }}
                                    >
                                        Cerrar sesión
                                    </TypographyStyled>
                                </div>
                            ) : (
                                <div className='options__container'>
                                    <TypographyStyled3 onClick={loginWithRedirect}>Hola, Identificate</TypographyStyled3>
                                    <TypographyStyled>Cuenta y Listas</TypographyStyled>
                                </div>
                            )}
                        </Grid>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={0}>
                            <div className='options__container'>
                                <TypographyStyled3>Devoluciones</TypographyStyled3>
                                <TypographyStyled>y pedidos</TypographyStyled>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid>
                        <CartButton />
                    </Grid>
                    <Grid>
                        <DrawerHeader />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
