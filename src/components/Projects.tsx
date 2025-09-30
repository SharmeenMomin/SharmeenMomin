import React from 'react';
import { Box, Container, Grid, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

const projects = [
  {
    title: 'Movie Ticketing System',
    description: 'Designed and developed a full-stack movie ticketing system enabling users to browse movies, view showtimes, and purchase tickets with a seamless booking experience.',
    image: '/movie-ticketing.jpg',
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'REST API'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Recipe Recommender',
    description: 'Developed an open-source feature-rich recipe recommender app leveraging ReactJS, NodeJS, and Firebase. Integrated Gemini API for real-time recipe searches powered by NLP.',
    image: '/recipe-recommender.jpg',
    technologies: ['React', 'Node.js', 'Firebase', 'Gemini API'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Fashion Recommender',
    description: 'Built a personalized outfit recommendation system using AI, Gemini API, and Google Authentication, providing clothing suggestions based on user preferences, weather, and culture.',
    image: '/fashion-recommender.jpg',
    technologies: ['React', 'Firebase', 'Gemini API', 'REST API'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Image Segmentation Using Edge Detection',
    description: 'Developed an image segmentation pipeline using Python and OpenCV, applying edge detection techniques on the Berkeley Segmentation Dataset.',
    image: '/image-segmentation.jpg',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Dynamic Label Generator',
    description: 'Developed a dynamic label design application with ReactJS and Spring Boot, enabling drag-and-drop customization. Improved efficiency by 66%.',
    image: '/label-generator.jpg',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST API'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'LogiScrape',
    description: 'Worked on data scraping using Python and Selenium. Integrated Google Cloud\'s BigQuery for seamless data storage and analysis.',
    image: '/logiscrape.jpg',
    technologies: ['Python', 'Selenium', 'BigQuery', 'DataFrame'],
    githubLink: '#',
    liveLink: '#',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= projects.length ? 0 : prevIndex + 2
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? Math.max(0, projects.length - 2) : prevIndex - 2
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 2);

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle 
          title="Projects" 
          subtitle="Check out some of my recent work"
        />

        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={4}>
            {visibleProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main + '20',
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main + '20',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              gap: 1,
            }}
          >
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === Math.floor(currentIndex / 2)
                    ? theme.palette.primary.main
                    : theme.palette.divider,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 