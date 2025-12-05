import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { RouterLink } from 'src/routes/components';

import { fToNow } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { Searchbar } from './searchbar';

// ----------------------------------------------------------------------

export type SongItemProps = {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
  artist: string;
  releasedAt: string | number | null;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: SongItemProps[];
};

type TitleProps = {
  title?: string;
};

export function Songs({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={<LyricHeader title={title} />} subheader={subheader} sx={{ mb: 1 }} />

      <Scrollbar sx={{ minHeight: 405, maxHeight: 500 }}>
        <Box sx={{ minWidth: 640 }}>
          {list.map((song) => (
            <SongItem key={song.id} item={song} />
          ))}
        </Box>
      </Scrollbar>

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------
function LyricHeader({ title }: TitleProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
      <Typography variant="h4">{title}</Typography>
      <Searchbar />
    </Stack>
  );
}

// ----------------------------------------------------------------------

function SongItem({ sx, item, ...other }: BoxProps & { item: Props['list'][number] }) {
  return (
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
        alt={item.title}
        src={item.coverUrl}
        sx={{ width: 48, height: 48, flexShrink: 0 }}
      />

      <ListItemText
        primary={
          <Link component={RouterLink} href={item.title} color="inherit">
            {item.title}
          </Link>
        }
        secondary={item.artist}
        primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
        secondaryTypographyProps={{ mt: 0.5, noWrap: true, component: 'span' }}
      />

      <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
        {fToNow(item.releasedAt)}
      </Box>
    </Box>
  );
}
