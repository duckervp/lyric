import type { BoxProps } from '@mui/material/Box';

import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgBlur } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function Searchbar({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const handleClick = useCallback(() => {
    console.log('Search');
  }, []);

  return (
      <div>
        <Slide direction="down" in>
          <Box
            sx={{
              ...bgBlur({
                color: theme.vars.palette.background.default,
              }),
              zIndex: 99,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              px: { xs: 1.5, md: 3 },
              boxShadow: theme.customShadows.z8,
              height: {
                xs: 'var(--song-header-mobile-height)',
                md: 'var(--song-header-desktop-height)',
              },
              // borderRadius: 3,
              ...sx,
            }}
            {...other}
          >
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify width={20} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
              sx={{ fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClick} color="inherit">
              Search
            </Button>
          </Box>
        </Slide>
      </div>
  );
}
