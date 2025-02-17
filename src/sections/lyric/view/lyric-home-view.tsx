import Grid from '@mui/material/Unstable_Grid2';

import { DashboardContent } from 'src/layouts/lyric';

import { Songs } from '../songs';

import type { SongItemProps } from '../songs';

const vietnameseSongs: SongItemProps[] = [
  {
    id: '1',
    title: 'Hẹn Một Mai',
    coverUrl: 'https://example.com/hen-mot-mai.jpg',
    description: 'Bài hát nhẹ nhàng, sâu lắng của Bùi Anh Tuấn.',
    artist: 'Bùi Anh Tuấn',
    releasedAt: '2016',
  },
  {
    id: '2',
    title: 'Có Chàng Trai Viết Lên Cây',
    coverUrl: 'https://example.com/co-chang-trai.jpg',
    description: 'Một bản nhạc trữ tình đầy cảm xúc.',
    artist: 'Phan Mạnh Quỳnh',
    releasedAt: '2018',
  },
  {
    id: '3',
    title: 'Em Gì Ơi',
    coverUrl: 'https://example.com/em-gi-oi.jpg',
    description: 'Bản hit sôi động của Jack & K-ICM.',
    artist: 'Jack, K-ICM',
    releasedAt: '2019',
  },
  {
    id: '4',
    title: 'Sóng Gió',
    coverUrl: 'https://example.com/song-gio.jpg',
    description: 'Bản ballad cảm xúc do Jack & K-ICM thể hiện.',
    artist: 'Jack, K-ICM',
    releasedAt: '2019',
  },
  {
    id: '5',
    title: 'Hãy Trao Cho Anh',
    coverUrl: 'https://example.com/hay-trao-cho-anh.jpg',
    description: 'Sơn Tùng M-TP kết hợp cùng rapper nổi tiếng Snoop Dogg.',
    artist: 'Sơn Tùng M-TP, Snoop Dogg',
    releasedAt: '2019',
  },
  {
    id: '6',
    title: 'Nơi Này Có Anh',
    coverUrl: 'https://example.com/noi-nay-co-anh.jpg',
    description: 'Ca khúc ngọt ngào dành cho các cặp đôi.',
    artist: 'Sơn Tùng M-TP',
    releasedAt: '2017',
  },
  {
    id: '7',
    title: 'Buồn Làm Chi Em Ơi',
    coverUrl: 'https://example.com/buon-lam-chi-em-oi.jpg',
    description: 'Một ca khúc đầy tâm trạng của Hoài Lâm.',
    artist: 'Hoài Lâm',
    releasedAt: '2020',
  },
  {
    id: '8',
    title: 'Chúng Ta Của Hiện Tại',
    coverUrl: 'https://example.com/chung-ta-cua-hien-tai.jpg',
    description: 'Bản tình ca nhẹ nhàng của Sơn Tùng M-TP.',
    artist: 'Sơn Tùng M-TP',
    releasedAt: '2020',
  },
  {
    id: '9',
    title: 'Yêu Là Cưới',
    coverUrl: 'https://example.com/yeu-la-cuoi.jpg',
    description: 'Bản hit vui nhộn của Phát Hồ & X2X.',
    artist: 'Phát Hồ, X2X',
    releasedAt: '2021',
  },
  {
    id: '10',
    title: 'Rồi Tới Luôn',
    coverUrl: 'https://example.com/roi-toi-luon.jpg',
    description: 'Ca khúc sôi động mang phong cách miền Tây.',
    artist: 'Nal',
    releasedAt: '2021',
  },
];

// ----------------------------------------------------------------------

export function LyricHomeView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid xs={12} md={12} lg={8}>
          <Songs title="Lyrics" list={vietnameseSongs} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
