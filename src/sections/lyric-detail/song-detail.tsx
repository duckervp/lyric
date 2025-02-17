import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { RouterLink } from 'src/routes/components';

import { fToNow } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export type SongDetailProps = {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
  artist: string;
  lyric: string;
  releasedAt: string | number | null;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  song?: SongDetailProps;
};

type DetailedTitleProps = {
  title?: string;
  songTitle?: string;
};

export function SongDetail({ title, subheader, song, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader
        title={<SongDetailHeader title={title} songTitle={song?.title} />}
        subheader={subheader}
        sx={{ mb: 1 }}
      />

      <Scrollbar sx={{ minHeight: 605, maxHeight: 500 }}>
        <Box sx={{ minWidth: 640 }}>
          <SongItemDetail song={song} />
        </Box>
      </Scrollbar>

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
}

// ----------------------------------------------------------------------
function SongDetailHeader({ title, songTitle }: DetailedTitleProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
      <Link component={RouterLink} href="/" color="inherit" variant="h4">
        {title}
      </Link>
      <Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />
      <Typography variant="h5">{songTitle}</Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function SongItemDetail({ sx, song, ...other }: BoxProps & { song?: SongDetailProps }) {
  return (
    <Box>
      <Box
        sx={{
          py: 2,
          px: 3,
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          ...sx,
        }}
        {...other}
      >
        <Avatar
          variant="rounded"
          alt={song?.title}
          src={song?.coverUrl}
          sx={{ width: 48, height: 48, flexShrink: 0 }}
        />

        <ListItemText
          primary={song?.title}
          secondary={song?.description}
          primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
          secondaryTypographyProps={{ mt: 0.5, noWrap: true, component: 'span' }}
        />

        <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
          {fToNow(song?.releasedAt)}
        </Box>
      </Box>
      <Box
        sx={{
          py: 2,
          px: 3,
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          ...sx,
        }}
        {...other}
      >
        <Typography variant="body1">{song?.lyric}</Typography>
      </Box>
    </Box>
  );
}
