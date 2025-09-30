import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import ApiIcon from '@mui/icons-material/Api';
import TerminalIcon from '@mui/icons-material/Terminal';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DevicesIcon from '@mui/icons-material/Devices';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease-in-out',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.primary.light}05 100%)`,
    borderRadius: theme.shape.borderRadius,
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `1px solid ${theme.palette.primary.light}30`,
    borderRadius: theme.shape.borderRadius,
    zIndex: -1,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    '&::before': {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.light}10 100%)`,
    },
    '&::after': {
      border: `1px solid ${theme.palette.primary.light}50`,
    },
    '& .icon-container': {
      transform: 'scale(1.1) rotate(5deg)',
      '&::before': {
        transform: 'rotate(225deg)',
        opacity: 0.2,
      },
    },
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  position: 'relative',
  transition: 'all 0.3s ease-in-out',
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
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    position: 'relative',
    zIndex: 1,
    fontSize: '2rem',
  },
}));

const skills = [
  {
    icon: <CodeIcon />, title: 'Languages', items: [
      'C', 'Java', 'SQL', 'Python'
    ]
  },
  {
    icon: <WebIcon />, title: 'Web Development', items: [
      'HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Ruby on Rails'
    ]
  },
  {
    icon: <DataObjectIcon />, title: 'Databases', items: [
      'SQL Server', 'MySQL', 'PostgreSQL', 'Django', 'NoSQL'
    ]
  },
  {
    icon: <CloudIcon />, title: 'Cloud Services', items: [
      'Google Cloud Platform (GCP)'
    ]
  },
  {
    icon: <ApiIcon />, title: 'Tools/Technologies', items: [
      'Spring Boot', 'REST APIs', 'Docker', 'Postman', 'Confluence', 'Jira', 'Slack', 'PyTest', 'Pandas', 'DataFrame', 'OpenCV', 'ScikitLearn', 'Matplotlib', 'Tableau', 'Gemini API', 'BigQuery', 'PubSub', 'UiPath', 'Playwright', 'Cucumber'
    ]
  },
  {
    icon: <DevicesIcon />, title: 'Operating Systems', items: [
      'Windows', 'Mac', 'Linux (Unix)'
    ]
  },
];

const Skills: React.FC = () => {
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
      id="skills"
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
              Skills
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.title}>
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillCard>
                    <IconContainer className="icon-container">
                      {skill.icon}
                    </IconContainer>
                    <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {skill.items.map((item) => (
                        <Typography
                          key={item}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: 'inline-block',
                            mr: 1,
                            mb: 1,
                            '&:not(:last-child)::after': {
                              content: '"•"',
                              ml: 1,
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 