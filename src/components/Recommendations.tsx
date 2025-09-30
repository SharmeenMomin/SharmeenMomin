import React from 'react';
import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const recommendations = [
  {
    name: 'Dharanendra L V',
    title: 'Software Engineer @Falabella India || Ex TCW Intern @GFG || Geek of the Month(September 2021)',
    date: 'May 17, 2024',
    relation: 'worked with Sharmeen on the same team',
    content: 'I had a pleasure of working alongside Sharmeen at Falabella and I can confidently say that she is an exceptional individual with a strong passion for technology and a dedication to excellence. One of Sharmeen\'s greatest strengths is her ability to collaborate effectively within a team, she demonstrated a proactive attitude and a willingness to learn and adapt in fast-paced environments. I have no doubt that Sharmeen will continue to excel in her career as a software engineer, and I strongly recommend her for any future endeavors.'
  },
  {
    name: 'Naveen M D',
    title: 'Lead Engineer at Falabella India',
    date: 'May 17, 2024',
    relation: 'managed Sharmeen directly',
    content: 'I had the pleasure of working closely with Sharmeen as her Lead Engineer at Falabella India. Sharmeen is a highly skilled engineer with a strong foundation in Problem solving . Her attention to detail and analytical mindset were instrumental in stabilising the stock transfer order project especially the INBOUND flow. Sharmeen used to proactively take up issues observed in production env and solved the same without much of intervention from other team members, which significantly ensured the smooth flow of INBOUND business. Beyond technical proficiency, She is a valuable team player who readily collaborates with colleagues to overcome challenges and achieve objectives. I particularly admire Sharmeen\'s adaptability nature, which sets her apart as a standout engineer. During her internship when asked to work on a new technology and a new problem domain she was ready to take up the challenge and was quite impressive with what she delivered. I wholeheartedly recommend Sharmeen as an engineer and I am confident that she will excel where ever she goes.'
  }
];

const Recommendations = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="recommendations"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
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
            Recommendations
          </Typography>

          <Grid container spacing={4}>
            {recommendations.map((recommendation, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 4,
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 24,
                      left: 24,
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      opacity: 0.2,
                    }}
                  />
                  <Box sx={{ pl: 4, pt: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                      }}
                    >
                      {recommendation.content}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          backgroundColor: theme.palette.primary.main,
                          color: '#FFFFFF',
                          fontSize: '1.2rem',
                          fontWeight: 600,
                        }}
                      >
                        {recommendation.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                          }}
                        >
                          {recommendation.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.primary.main,
                            mb: 0.5,
                          }}
                        >
                          {recommendation.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.text.secondary,
                            display: 'block',
                          }}
                        >
                          {recommendation.date} • {recommendation.relation}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Recommendations; 