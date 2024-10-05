import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AlarmIcon from '@mui/icons-material/Alarm';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

// Componente Item para usar en Grid
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

export default function Home() {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                    py: 8
                }}
            >
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Bienvenido a Seguridad ProTech
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Protección de hogares y empresas con la mejor tecnología en seguridad electrónica.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
                        Solicita una Cotización
                    </Button>
                </Container>
            </Box>

            {/* Servicios Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'white', mb: 4 }}>
                    Nuestros Servicios
                </Typography>
                <Grid container spacing={4}>
                    {/* Servicio 1 */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <CameraAltIcon fontSize="large" color="primary" />
                            <Typography variant="h6" gutterBottom>
                                Instalación de Cámaras de Seguridad
                            </Typography>
                            <Typography variant="body2">
                                Contamos con cámaras de alta calidad para el monitoreo 24/7, adaptadas a cualquier tipo de negocio o residencia.
                            </Typography>
                        </Item>
                    </Grid>
                    {/* Servicio 2 */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <AlarmIcon fontSize="large" color="primary" />
                            <Typography variant="h6" gutterBottom>
                                Sistemas de Alarmas
                            </Typography>
                            <Typography variant="body2">
                                Sistema de alarmas con notificaciones en tiempo real para proteger lo que más te importa.
                            </Typography>
                        </Item>
                    </Grid>
                    {/* Servicio 3 */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Item>
                            <SecurityIcon fontSize="large" color="primary" />
                            <Typography variant="h6" gutterBottom>
                                Seguridad Perimetral
                            </Typography>
                            <Typography variant="body2">
                                Soluciones avanzadas para la seguridad perimetral, desde sensores hasta barreras físicas.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Container>

            {/* Beneficios Section */}
            <Box sx={{ bgcolor: '#1e1e1e', color: 'white', padding: 4 }}>
                <Container>
                    <Typography variant="h4" gutterBottom textAlign="center">
                        ¿Por qué Elegirnos?
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Item>
                                <SecurityIcon color="primary" fontSize="large" />
                                <Typography variant="h6" gutterBottom>
                                    Protección Total
                                </Typography>
                                <Typography variant="body2">
                                    Ofrecemos soluciones integrales para la protección de tu hogar o negocio, garantizando seguridad 24/7.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Item>
                                <CameraAltIcon color="primary" fontSize="large" />
                                <Typography variant="h6" gutterBottom>
                                    Tecnología Avanzada
                                </Typography>
                                <Typography variant="body2">
                                    Utilizamos equipos de última generación para garantizar una vigilancia eficiente y confiable.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Item>
                                <AlarmIcon color="primary" fontSize="large" />
                                <Typography variant="h6" gutterBottom>
                                    Respuesta Inmediata
                                </Typography>
                                <Typography variant="body2">
                                    Sistemas que envían alertas en tiempo real para una acción rápida ante cualquier amenaza.
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
