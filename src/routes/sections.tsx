import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { LyricLayout } from 'src/layouts/lyric';

// ----------------------------------------------------------------------
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export const LyricHomePage = lazy(() => import('src/pages/lyric-home'));
export const LyricDetailPage = lazy(() => import('src/pages/lyric-detail'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <LyricLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </LyricLayout>
      ),
      children: [
        { element: <LyricHomePage />, index: true },
        { path: ':slug', element: <LyricDetailPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
