import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Searchbar } from '../searchbar';
import { AnalyticsNews } from '../analytics-news';

// ----------------------------------------------------------------------

export function LyricHomeView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <Searchbar />
          <AnalyticsNews title="Lyrics" list={_posts.slice(0, 5)} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
