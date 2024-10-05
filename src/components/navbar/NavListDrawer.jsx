import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { Box } from "@mui/system";

export default function NavListDrawer({ navegationLinks, component, setOpen }) {
    return (
        <Box sx={{ width: 250, bgcolor: '#2e2e2e', color: 'white' }}>
            <nav>
                <List>
                    {navegationLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton
                                component={component}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ color: 'white' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>

    );
}