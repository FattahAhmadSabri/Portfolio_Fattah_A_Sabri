import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface WelcomePageProps {
  profileImage?: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ profileImage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark}, ${theme.palette.info.dark}, ${theme.palette.success.dark})`,
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        color: 'white',
        px: 6,
        py: 8, // increased padding to shift content slightly up
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, transparent 20%, black 150%)',
          opacity: 0.7,
          zIndex: 0
        }
      }}
    >
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.5)',
            boxShadow: '0 0 20px 5px rgba(255,255,255,0.8)',
            animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
            '@keyframes pulse': {
              '0%': { transform: 'scale(0.8)', opacity: 0.7 },
              '100%': { transform: 'scale(1.5)', opacity: 0.3 }
            },
            zIndex: 0
          }}
        />
      ))}

      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          maxWidth: isMobile ? '100%' : '55%',
          textAlign: isMobile ? 'center' : 'left',
          pr: isMobile ? 0 : 6,
          mb: isMobile ? 4 : 0,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            textShadow: '0px 4px 10px rgba(0,0,0,0.3)',
            lineHeight: 1.2
          }}
        >
          Fattah Ahmad Sabri
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 400,
            color: theme.palette.grey[200],
            fontStyle: 'italic',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
            mb: 3
          }}
        >
          Backend Developer | API Architect | Technical Problem Solver
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: 600,
            mb: 4,
            textShadow: '0px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          I specialize in building robust backend infrastructures, scalable APIs, and efficient data flows.
          My work blends performance with clean code, and I aim to solve real-world problems with clarity and precision.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: 50,
            px: 6,
            py: 1.5,
            fontWeight: 700,
            letterSpacing: '0.1em',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderWidth: 2
            }
          }}
        >
          EXPLORE PORTFOLIO
        </Button>
      </Box>

      {/* Image & Quote Section */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: isMobile ? '100%' : '40%',
          gap: 3
        }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src={profileImage || '/image/fas.jpeg'}
          alt="Fattah Ahmad Sabri"
          sx={{
            width: isMobile ? '80%' : '80%',
            maxWidth: 300,
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '24px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)'
            }
          }}
        />

        {/* Stylish Quote */}
        <Box sx={{ textAlign: 'center', maxWidth: 340 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontStyle: 'italic',
              color: theme.palette.grey[100],
              lineHeight: 1.6,
              textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
            }}
          >
            “The backend is the <span style={{ color: '#90caf9' }}>brain</span> — it must be
            <span style={{ color: '#a5d6a7' }}> smart</span>, 
            <span style={{ color: '#ffcc80' }}> efficient</span>, and 
            <span style={{ color: '#f48fb1' }}> quiet</span>.
            A great backend doesn’t seek attention — it just works and scales with precision.”
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: theme.palette.grey[300],
              fontStyle: 'normal',
              mt: 1,
              display: 'block',
              textShadow: '0px 1px 3px rgba(0,0,0,0.3)'
            }}
          >
             Fattah Ahmad Sabri
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;
