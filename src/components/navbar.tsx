import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  WorkOutline as ExperienceIcon,
  SchoolOutlined,
  MailOutline,
  FileDownloadOutlined,
  HomeOutlined,
  Close as CloseIcon,
  PhoneAndroid,
  EmailOutlined,
} from '@mui/icons-material';

// Define the nav link type
type NavLink = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('home');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openDropdown: boolean = Boolean(anchorEl);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
      setMobileOpen(false);
    }
  };

  const handleMenuClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const navLinks: NavLink[] = [
    { id: 'home', label: 'Home', icon: <HomeOutlined /> },
    { id: 'experience', label: 'Experience', icon: <ExperienceIcon /> },
    { id: 'education', label: 'Education', icon: <SchoolOutlined /> },
  ];

  const drawer = (
    <Box
      sx={{
        width: 260,
        height: '100%',
        background: 'rgba(15, 12, 41, 0.95)',
        backdropFilter: 'blur(8px)',
        color: 'white',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box px={3}>
        {navLinks.map((link) => (
          <Box
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 1.5,
              px: 2,
              cursor: 'pointer',
              background: activeLink === link.id ? 'rgba(0, 201, 255, 0.15)' : 'transparent',
              borderLeft: activeLink === link.id ? '4px solid #00c9ff' : 'none',
              transition: '0.3s',
              '&:hover': {
                background: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            <Box sx={{ mr: 2, color: '#00c9ff' }}>{link.icon}</Box>
            <Typography variant="body1">{link.label}</Typography>
          </Box>
        ))}

        {/* Contact Info in Drawer */}
        <Box sx={{ pl: 4, pt: 2 }}>
          <Typography variant="body2" color="gray">
            <EmailOutlined sx={{ fontSize: 16, mr: 1 }} />
            fattahasabri@gmail.com
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            <PhoneAndroid sx={{ fontSize: 16, mr: 1 }} />
            +91-9876543210
          </Typography>
        </Box>

        {/* Download CV button */}
        <Box
          sx={{
            mt: 3,
            mx: 2,
            py: 1.5,
            px: 2,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #00c9ff, #92fe9d)',
            borderRadius: 2,
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 15px rgba(0, 201, 255, 0.3)',
            },
          }}
        >
          <FileDownloadOutlined sx={{ mr: 1, color: '#000' }} />
          <Typography variant="body1" fontWeight={600} color="#000" display="inline">
            Download CV
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          py: 2,
          fontSize: 12,
          color: 'rgba(255,255,255,0.6)',
          background: 'rgba(255,255,255,0.05)',
        }}
      >
        © {new Date().getFullYear()} Fattah Ahmad Sabri
      </Box>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!useScrollTrigger()}>
        <AppBar
          position="fixed"
          sx={{
            background: 'rgba(15, 12, 41, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 201, 255, 0.2)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src="/profile.jpg"
                sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  border: '2px solid #00c9ff',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: 1,
                }}
              >
                Fattah
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <Badge color="secondary" variant="dot" invisible={!mobileOpen}>
                    <MenuIcon />
                  </Badge>
                </IconButton>
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    startIcon={link.icon}
                    sx={{
                      mx: 1,
                      color: activeLink === link.id ? '#00c9ff' : 'white',
                      fontWeight: activeLink === link.id ? 700 : 500,
                      '&:hover': { color: '#92fe9d' },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}

                <Button
                  startIcon={<MailOutline />}
                  onClick={handleMenuClick}
                  sx={{
                    mx: 1,
                    color: activeLink === 'contact' ? '#00c9ff' : 'white',
                    fontWeight: activeLink === 'contact' ? 700 : 500,
                    '&:hover': { color: '#92fe9d' },
                  }}
                >
                  Contact
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={openDropdown}
                  onClose={handleMenuClose}
                  MenuListProps={{ sx: { backgroundColor: '#1c1c3a', color: 'white' } }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <EmailOutlined sx={{ mr: 1 }} />
                    fattahasabri@gmail.com
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <PhoneAndroid sx={{ mr: 1 }} />
                    +91-9284603453
                  </MenuItem>
                </Menu>

                <Button
                  variant="contained"
                  startIcon={<FileDownloadOutlined />}
                  sx={{
                    ml: 2,
                    borderRadius: 20,
                    px: 3,
                    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                    color: '#000',
                    fontWeight: 700,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
};

export default Navbar;
