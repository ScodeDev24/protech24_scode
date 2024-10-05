import React from 'react';
import { Box, Typography, Container, Card, CardContent, Avatar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Item({ children }) {
    return (
        <Paper
            sx={{
                padding: 2,
                textAlign: 'center',
                bgcolor: '#1e1e1e', // Un color de fondo más oscuro para los items
                color: 'white' // Asegúrate de que el texto sea blanco o un color claro
            }}
        >
            {children}
        </Paper>
    );
}

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function AboutUs() {
    return (
        <Box>
            {/* Introducción de la Empresa */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    textAlign: 'center'
                }}
            >
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Sobre Nosotros
                    </Typography>
                    <Typography variant="h6" maxWidth="md" mx="auto">
                        En Seguridad ProTech, nos especializamos en brindar soluciones de seguridad avanzadas para hogares y empresas.
                        Con más de 10 años de experiencia, ofrecemos protección completa con tecnología de punta.
                    </Typography>
                </Container>
            </Box>

            {/* Nuestra Misión y Valores */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'white', mb: 4 }}>
                    Nuestra Misión y Valores
                </Typography>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <SecurityIcon color="primary" fontSize="large" />
                            <Typography variant="h6" gutterBottom>
                                Seguridad
                            </Typography>
                            <Typography variant="body2">
                                Nuestro objetivo principal es garantizar la seguridad de nuestros clientes con soluciones eficientes y confiables.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <ThumbUpIcon color="primary" fontSize="large" />
                            <Typography variant="h6" gutterBottom>
                                Confiabilidad
                            </Typography>
                            <Typography variant="body2">
                                Nos esforzamos por ofrecer servicios en los que nuestros clientes puedan confiar, respaldados por nuestra experiencia y compromiso.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <AccessTimeIcon color="primary" fontSize="large" />
                            <Typography variant="h6" gutterBottom>
                                Innovación
                            </Typography>
                            <Typography variant="body2">
                                Siempre a la vanguardia de la tecnología, mejoramos continuamente nuestros sistemas y métodos para brindar soluciones de última generación.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
            {/* Marcas */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
                    Nuestras Marcas de Confianza
                </Typography>
                <ImageList
                    sx={{
                        width: '100%',
                        height: 'auto',
                        transform: 'translateZ(0)',
                        bgcolor: '#2e2e2e',
                    }}
                    gap={12} // Espacio entre las imágenes
                >
                    {itemData.map((item) => {
                        const cols = item.featured ? 2 : 1;
                        const rows = item.featured ? 2 : 1;

                        return (
                            <ImageListItem key={item.img} cols={cols} rows={rows}>
                                <img
                                    {...srcset(item.img, 250, 200, rows, cols)}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover', // Asegura que la imagen ocupe todo el espacio
                                    }}
                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${item.title}`}
                                        >
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>

            </Box>
            {/* Equipo */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'white', mb: 4 }}>
                    Nuestro Equipo
                </Typography>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Avatar
                                    alt="John Doe"
                                    src="/john.jpg" // Cambia por las imágenes reales
                                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                                />
                                <Typography variant="h6">John Doe</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    CEO & Fundador
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Avatar
                                    alt="Jane Smith"
                                    src="/jane.jpg" // Cambia por las imágenes reales
                                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                                />
                                <Typography variant="h6">Jane Smith</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Gerente de Operaciones
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Agrega más miembros del equipo según sea necesario */}
                </Grid>
            </Container>

            {/* Cifras Clave */}
            <Box sx={{ bgcolor: '#1e1e1e', color: 'white', padding: 4, mt: 4 }}>
                <Container>
                    <Typography variant="h4" gutterBottom textAlign="center">
                        Nuestra Trayectoria en Números
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4, textAlign: 'center' }}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography variant="h3" color="primary">+100</Typography>
                            <Typography variant="body2">Proyectos Completados</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography variant="h3" color="primary">+50</Typography>
                            <Typography variant="body2">Empresas Protegidas</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography variant="h3" color="primary">10 Años</Typography>
                            <Typography variant="body2">De Experiencia</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://www.tecnoseguro.com/media/xt-adaptive-images/480/media/k2/items/cache/03f59fdd2e12085da20c58ca95e46273_XL.webp',
        title: 'Hikvision',
        featured: true,
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSuX_mlNQwOfN-_RkOeenf4qXc6Da8jjMIQ&s',
        title: 'Teclam',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaw249yPtkxgxWZUaYrNKtVhOcXvLuqXgHiYNLt7FmgQvGwB9Cek6NCjUMWsLzdJBIJs&usqp=CAU',
        title: 'ZkTeco',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vCfYiAM118ndNeEjQ6qA1uiDd2Z52FAeWw&s',
        title: 'EZVIZ',
    },
    {
        img: 'https://getvectorlogo.com/wp-content/uploads/2019/02/dsc-digital-security-controls-vector-logo.png',
        title: 'DSC',
        featured: true,
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png',
        title: 'dahua',
    },
];
