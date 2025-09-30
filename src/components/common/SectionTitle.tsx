import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 700,
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
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mt: 3 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle; 