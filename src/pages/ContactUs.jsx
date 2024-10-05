import React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function ContactUs() {
    return (
        <Box>
            {/* Introducción de Contacto */}
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
                        Contáctanos
                    </Typography>
                    <Typography variant="h6" maxWidth="md" mx="auto">
                        Estamos aquí para ayudarte. Completa el formulario a continuación o contáctanos directamente.
                    </Typography>
                </Container>
            </Box>

            {/* Formulario de Contacto */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper sx={{ padding: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Envíanos un Mensaje
                            </Typography>
                            <TextField
                                fullWidth
                                label="Nombre"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Teléfono"
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Mensaje"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                Enviar Mensaje
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper sx={{ padding: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Información de Contacto
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> contacto@protech.com
                            </Typography>
                            <Typography variant="body1">
                                <strong>Teléfono:</strong> +1 (123) 456-7890
                            </Typography>
                            <Typography variant="body1">
                                <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Horarios:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Síguenos en nuestras redes sociales:
                            </Typography>
                            <Typography variant="body1">
                                Facebook | Twitter | Instagram
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
