import React from 'react';
import { Box, Container, Typography, Paper, Divider, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: 'transparent',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3px',
    height: '100%',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    opacity: 0.8,
  },
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}05`,
    transform: 'translateX(8px)',
  },
}));

const SectionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  '& .icon-container': {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: theme.palette.primary.main,
      opacity: 0.1,
      transform: 'rotate(45deg)',
      transition: 'all 0.3s ease-in-out',
    },
  },
  '&:hover .icon-container::before': {
    transform: 'rotate(225deg)',
    opacity: 0.2,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    position: 'relative',
    zIndex: 1,
    fontSize: '1.8rem',
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '2px',
    background: theme.palette.primary.light,
    opacity: 0.3,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: -4,
    top: 8,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    opacity: 0.8,
  },
}));

const About: React.FC = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}30, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 6,
                color: 'primary.main',
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  borderRadius: '2px',
                },
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
            <Box sx={{ mb: 8, textAlign: 'center' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  maxWidth: '800px', 
                  mx: 'auto',
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  position: 'relative',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    width: '40px',
                    height: '2px',
                    background: theme.palette.primary.main,
                    opacity: 0.3,
                    top: '50%',
                  },
                  '&::before': {
                    left: 'calc(50% - 200px)',
                  },
                  '&::after': {
                    right: 'calc(50% - 200px)',
                  },
                }}
              >
                As a detail-oriented student with strong work ethics, I wish to collaborate,
                learn, and contribute towards projects that shape the world of technology.
                I'm actively seeking opportunities in software engineering where
                I can apply my skills, grow as a developer, and help build transformative solutions.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <StyledPaper>
                  <SectionTitle>
                    <div className="icon-container">
                      <SchoolIcon />
                    </div>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
                      Education
                    </Typography>
                  </SectionTitle>
                  <TimelineItem sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        North Carolina State University
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Master of Computer Science
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        Expected Graduation: May 2026 | GPA: 3.6/4
                      </Typography>
                    </Box>
                  </TimelineItem>
                  <Divider sx={{ my: 2 }} />
                  <TimelineItem>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        KLS Gogte Institute of Technology, India
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Bachelor of Engineering in Computer Science
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        GPA: 9.2/10
                      </Typography>
                    </Box>
                  </TimelineItem>
                </StyledPaper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                <StyledPaper>
                  <SectionTitle>
                    <div className="icon-container">
                      <WorkIcon />
                    </div>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
                      Experience
                    </Typography>
                  </SectionTitle>
                  <TimelineItem sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BusinessIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        Elsevier, United States
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Software Engineer Intern
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        June 2025 - Aug 2025
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4 }}>
                      <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        <li>Developed and integrated a UI automation framework using Playwright and Cucumber, implementing Gherkin-based test scenarios to streamline regression testing.</li>
                        <li>Collaborated in Agile sprints with cross-functional teams, implementing behavior driven development (BDD) based scenarios.</li>
                        <li>Generated automated HTML reports using cucumber-html-reporter, improving test coverage tracking and reducing manual testing effort.</li>
                        <li>Collaborated with QA engineers to optimize testing speed, consistency, and efficiency across multiple sprints.</li>
                      </Typography>
                    </Box>
                  </TimelineItem>
                  <Divider sx={{ my: 2 }} />
                  <TimelineItem sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BusinessIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        Falabella, India
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Associate Back End Software Engineer
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        Aug 2023 - May 2024
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4 }}>
                      <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        <li>Developed and maintained backend microservices orchestrating 1000+ daily stock transfers</li>
                        <li>Implemented scalable logistics solutions using Java Spring Boot and Google Cloud Pubsub</li>
                        <li>Achieved 92% unit test coverage using JUnit with Mockito</li>
                        <li>Collaborated with teams across 4 countries using GitLab and Agile methodologies</li>
                      </Typography>
                    </Box>
                  </TimelineItem>
                  <Divider sx={{ my: 2 }} />
                  <TimelineItem sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BusinessIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        Falabella, India
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Software Engineer Intern
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        Feb 2023 - July 2023
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4 }}>
                      <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        <li>Developed dynamic label design app improving efficiency by 60-66%</li>
                        <li>Automated web data scraping using Python & Selenium</li>
                        <li>Awarded Best Final Year Research Project at Project-Expo 2023</li>
                      </Typography>
                    </Box>
                  </TimelineItem>
                  <Divider sx={{ my: 2 }} />
                  <TimelineItem>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <BusinessIcon sx={{ color: 'primary.light', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                        Conpriquo Solutions, India
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ ml: 4, mb: 1 }}>
                      Software Engineer Intern
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: 'primary.light', mr: 1, fontSize: '1rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        Sept 2022 - Dec 2022
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4 }}>
                      <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        <li>Designed and implemented Inventory management systems</li>
                        <li>Developed RESTful API with 85% unit test coverage</li>
                        <li>Optimized e-commerce operations for local businesses</li>
                      </Typography>
                    </Box>
                  </TimelineItem>
                </StyledPaper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 