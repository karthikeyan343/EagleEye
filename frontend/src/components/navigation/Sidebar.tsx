import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import logoSvg from '../../assets/logos/Logo1.png';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navItems = [
    { label: 'Home', icon: <HomeIcon />, href: '#hero' },
    { label: 'Products', icon: <SecurityIcon />, href: '#products' },
    { label: 'Services', icon: <SecurityIcon />, href: '#services' },
    { label: 'Featured Works', icon: <WorkOutlineIcon />, href: '#featured-works' },
    { label: 'Who We Are', icon: <InfoOutlinedIcon />, href: '#who-we-are' },
    { label: 'Contact', icon: <ContactMailOutlinedIcon />, href: '#contact' },
  ];

  const handleNav = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: '#0D0F15',
          color: '#FFFFFF',
          p: 2,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src={logoSvg}
          alt="Eagle Eye Solution"
          sx={{ height: 40, width: 'auto' }}
        />
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => handleNav(item.href)}
              sx={{
                borderRadius: '12px',
                '&:hover': { backgroundColor: 'rgba(0, 82, 255, 0.2)' },
              }}
            >
              <ListItemIcon sx={{ color: '#0052FF', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: '15px',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
