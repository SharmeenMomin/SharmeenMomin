import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTheme } from '@mui/material/styles';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 2 }}
        >
          {description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {technologies.map((tech, techIndex) => (
            <Typography
              key={techIndex}
              component="span"
              sx={{
                display: 'inline-block',
                mr: 1,
                mb: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: theme.palette.primary.main + '20',
                color: theme.palette.primary.main,
                fontSize: '0.875rem',
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <LaunchIcon />
          </IconButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard; 