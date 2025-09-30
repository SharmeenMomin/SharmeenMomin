import React from 'react';
import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  color: theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                Sharmeen Momin
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '540px',
                  color: theme.palette.text.secondary,
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                A Full-Stack Software Engineer & CS Grad Student at NC State University.
              </Typography>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="/SharmeenMominResume.pdf"
                download="SharmeenMomin_Resume.pdf"
                sx={{
                  backgroundColor: theme.palette.action.active,
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Download Resume
              </Button>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              width: { xs: '100%', md: 'auto' }
            }}>
              <Avatar
                src="/Sharmeen.jpeg"
                alt="Sharmeen Momin"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 