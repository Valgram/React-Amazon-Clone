import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { info__conocenos, info__gana__dinero, metodos__pagos, info__ayuda, info__languages } from '../constants/info';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Amazon__logo from '../assets/amazon__logo.png';
import '../components/CSS/footer.css';

const TypographyStyled = withStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: 'white',
        paddingTop: '40px',
        paddingBottom: '20px',
    },
}))(Typography);
const TypographyStyled2 = withStyles((theme) => ({
    root: {
        fontSize: '13px',
        color: 'white',
        paddingBottom: '10px',
    },
}))(Typography);

const TypographyStyled3 = withStyles((theme) => ({
    root: {
        fontSize: '11px',
        color: 'white',
    },
}))(Typography);

const TypographyStyled4 = withStyles((theme) => ({
    root: {
        fontSize: '11px',
        color: 'white',
        fontWeight: 'bold',
    },
}))(Typography);

const TypographyStyled5 = withStyles((theme) => ({
    root: {
        fontSize: '10px',
        color: 'white',
    },
}))(Typography);

export const Footer = () => {
    return (
        <main className='container__footer'>
            <article>
                <button>Volver arriba</button>
            </article>
            <div className='inner-container' style={{ backgroundColor: 'rgb(31, 69, 87)' }}>
                <Container maxWidth='md'>
                    <Grid lg={12} item container justify='space-around' className='container__footer__info'>
                        <Grid item lg={2} md={2} sm={5} xs={12} className='container__section'>
                            <TypographyStyled> Conocenos</TypographyStyled>
                            {info__conocenos.map((info) => {
                                const { id, title } = info;
                                return (
                                    <article key={id} className='section__options'>
                                        <TypographyStyled2>{title}</TypographyStyled2>
                                    </article>
                                );
                            })}
                        </Grid>
                        <Grid item lg={2} md={2} sm={5} xs={12} className='container__section'>
                            <TypographyStyled>Gana dinero con nosotros</TypographyStyled>
                            {info__gana__dinero.map((info) => {
                                const { id, title } = info;
                                return (
                                    <article key={id} className='section__options'>
                                        <TypographyStyled2>{title}</TypographyStyled2>
                                    </article>
                                );
                            })}
                        </Grid>
                        <Grid item lg={2} md={2} sm={5} xs={12} className='container__section'>
                            <TypographyStyled>Métodos de pago Amazon</TypographyStyled>
                            {metodos__pagos.map((info) => {
                                const { id, title } = info;
                                return (
                                    <article key={id} className='section__options'>
                                        <TypographyStyled2>{title}</TypographyStyled2>
                                    </article>
                                );
                            })}
                        </Grid>
                        <Grid item lg={2} md={2} sm={5} xs={12} className='container__section'>
                            <TypographyStyled>¿Necesitas ayuda?</TypographyStyled>
                            {info__ayuda.map((info) => {
                                const { id, title } = info;
                                return (
                                    <article key={id} className='section__options'>
                                        <TypographyStyled2>{title}</TypographyStyled2>
                                    </article>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Container>

                <Divider />
                <Grid>
                    <Container maxWidth='sm'>
                        <article className='container__logo' style={{ textAlign: 'center' }}>
                            <img src={Amazon__logo} alt='amazon__logo' width='40px' />
                        </article>

                        <Grid lg={12} item container justify='center' className='container__languages'>
                            {info__languages.map((language) => {
                                const { id, title } = language;
                                return (
                                    <Grid item key={id} className='languages'>
                                        <TypographyStyled3>{title}</TypographyStyled3>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container>
                </Grid>
            </div>
            <main style={{ backgroundColor: '#030c1bf6' }}>
                <Container maxWidth='md'>
                    <Grid item lg={12} container direction='row' justify='space-between' alignItems='center' className='container__other__options'>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Amazon Music</TypographyStyled4>
                            <TypographyStyled5>
                                Transmite millones
                                <br /> de canciones
                            </TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>IberLibro</TypographyStyled4>
                            <TypographyStyled5>Libros, arte & artículos de colección</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Amazon Web Services</TypographyStyled4>
                            <TypographyStyled5>Libros, arte & artículos de colección</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Book Depository</TypographyStyled4>
                            <TypographyStyled5>Libros, con entregas gratis en todo el mundo</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Kindle Direct Publishing</TypographyStyled4>
                            <TypographyStyled5>Publica tu libro en papel y digital de manera independiente</TypographyStyled5>
                        </Grid>
                    </Grid>

                    <Grid item lg={12} container direction='row' justify='space-between' alignItems='center' className='container__second__options'>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Prime Now</TypographyStyled4>
                            <TypographyStyled5>Entrega en 1 hora En miles de productos</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Productos Reacondicionados</TypographyStyled4>
                            <TypographyStyled5>Precios bajos en productos revisados por Amazon</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Shopbop</TypographyStyled4>
                            <TypographyStyled5>
                                Marcas <br />
                                de moda de diseño
                            </TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Amazon Business</TypographyStyled4>
                            <TypographyStyled5>Servicio para clientes de empresa</TypographyStyled5>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={12} className='other__options'>
                            <TypographyStyled4>Amazon Second Chance</TypographyStyled4>
                            <TypographyStyled5>Donar, intercambiar, dar una segunda vida</TypographyStyled5>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <main style={{ backgroundColor: '#030c1bf6' }} className='container__use__terms'>
                <Container maxWidth='md'>
                    <Grid container item lg={12} justify='space-evenly' className='use__terms'>
                        <Grid item lg={0} md={0} className='options'>
                            <TypographyStyled3>Condiciones de Uso y Venta</TypographyStyled3>
                        </Grid>
                        <Grid lg={0} md={0} sm={0} className='options'>
                            <TypographyStyled3>Avisa de privacidad</TypographyStyled3>
                        </Grid>
                        <Grid lg={0} md={0} sm={0} className='options'>
                            <TypographyStyled3>Área legal</TypographyStyled3>
                        </Grid>
                        <Grid lg={0} md={0} sm={0} className='options'>
                            <TypographyStyled3>Cookies</TypographyStyled3>
                        </Grid>

                        <Grid lg={0} md={0} sm={0} className='options'>
                            <TypographyStyled3>Publicidad basada en intereses</TypographyStyled3>
                        </Grid>
                        <Grid lg={0} md={0} sm={0} className='copyright'>
                            <TypographyStyled3> © 1996-2020, Amazon.com, Inc. o afiliados. Todos los derechos reservados.</TypographyStyled3>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </main>
    );
};
