import type { Theme, SxProps } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';

import { Main } from './main';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export type LyricLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function LyricLayout({ sx, children, header }: LyricLayoutProps) {
  const theme = useTheme();

  // const [navOpen, setNavOpen] = useState(false);

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        null
      }
      /** **************************************
       * Sidebar
       *************************************** */
      sidebarSection={
        null
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-nav-vertical-width': '300px',
        '--layout-dashboard-content-pt': theme.spacing(0),
        '--layout-dashboard-content-pb': theme.spacing(0),
        '--layout-dashboard-content-px': theme.spacing(5),
      }}
      sx={{
        ...sx,
      }}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
