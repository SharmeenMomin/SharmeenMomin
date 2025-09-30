import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Elsevier, United States',
    period: 'June 2025-Aug 2025',
    description: [
      'Developed and integrated a UI automation framework using Playwright and Cucumber, implementing Gherkin-based test scenarios to streamline regression testing.',
      'Collaborating in Agile sprints with cross-functional teams, implementing behavior driven development (BDD) based scenarios.',
      'Generated automated HTML reports using cucumber-html-reporter, improving test coverage tracking and reducing manual testing effort.',
      'Collaborated with QA engineers to optimize testing speed, consistency, and efficiency across multiple sprints.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Falabella India',
    period: '2023',
    description: [
      'Optimized backend microservices for logistics and developed scalable systems',
      'Implemented data-driven solutions for E-commerce challenges',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Conpriquo Solutions',
    period: '2022',
    description: [
      'Built inventory management systems for e-commerce businesses',
      'Developed RESTful APIs and implemented efficient data structures',
      'Integrated third-party services and payment gateways',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Reputes Business Solutions',
    period: '2021',
    description: [
      'Implemented data analysis and visualization strategies',
      'Created automated reporting systems using Python and SQL',
      'Optimized database queries and improved data processing efficiency',
    ],
  },
];

const Experience = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              color: theme.palette.primary.main,
              textAlign: 'center',
            }}
          >
            Experience
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {experiences.map((exp, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.palette.primary.main}20`,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {exp.company} | {exp.period}
                </Typography>
                <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                  {exp.description.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body1"
                      sx={{ mb: 1, color: theme.palette.text.secondary }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 