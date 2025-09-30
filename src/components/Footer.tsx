import React from 'react';
import { Box, Container, Typography, Link, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 0),
  backgroundColor: 'background.paper',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}30, transparent)`,
  },
}));

const SocialLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'inline-flex',
  alignItems: 'center',
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.light,
    transform: 'translateY(-2px)',
  },
}));

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {currentYear} Sharmeen Momin. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <SocialLink
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href="mailto:your.email@example.com"
              aria-label="Email"
            >
              <EmailIcon />
            </SocialLink>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 