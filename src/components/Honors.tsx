import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DownloadIcon from '@mui/icons-material/Download';

const Honors = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="honors"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
              },
            }}
          >
            Honors & Awards
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              backgroundColor: 'transparent',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 4,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmojiEventsIcon sx={{ color: '#FFFFFF', fontSize: 32 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  Best Research Project Award
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                  }}
                >
                  May 2023
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.7,
                  }}
                >
                  Awarded the Best Final Year Research Project for my work on "Dynamic Label Generator" at PROJECT-EXPO 2023.
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  href="/ResearchProjectAward.pdf"
                  download="ResearchProjectAward.pdf"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: 'rgba(95, 109, 90, 0.08)',
                    },
                  }}
                >
                  View Certificate
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Honors; 