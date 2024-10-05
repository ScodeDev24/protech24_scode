import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Navbar from "./Components/navbar/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

const navegationLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About Us",
    path: "/about_us",
    icon: <BusinessIcon />,
  },
  {
    title: "Contact us",
    path: "/contact_us",
    icon: <ContactMailIcon />,
  },
];

export default function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        padding: 0,
        margin: 0,
      }}
    >
      <Navbar navegationLinks={navegationLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about_us"
            element={<AboutUs />}
          />
          <Route
            path="/contact_us"
            element={<ContactUs />}
          />
        </Routes>
      </Container>
    </Box>
  );
}