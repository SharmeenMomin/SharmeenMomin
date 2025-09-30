import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const StyledGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: theme.spacing(4),
  width: '100%',
  '& > *': {
    gridColumn: 'span 12',
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 6',
    },
  },
}));

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Get In Touch
          </Typography>
          <StyledGrid>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(107, 70, 193, 0.1)',
                  transform: 'translateY(-5px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                Let's Connect
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I'm currently looking for opportunities in software engineering.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://www.linkedin.com/in/sharmeen-momin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/SharmeenMomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="mailto:sharmeenmomin24@gmail.com"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(107, 70, 193, 0.1)',
                  transform: 'translateY(-5px)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: 'primary.main',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: 'primary.main',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: 'primary.main',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ 
                    mt: 2,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </StyledGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 