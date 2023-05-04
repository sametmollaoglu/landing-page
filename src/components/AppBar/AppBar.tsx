import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from '@component/styles/AppBar.module.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import Link from 'next/link';

export default function DrawerAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const [anchorElPayment, setAnchorElPayment] =
    React.useState<HTMLElement | null>(null);

  const handlePopoverOpenPayment = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPayment(event.currentTarget);
  };

  const handlePopoverClosePayment = () => {
    setAnchorElPayment(null);
  };

  const sefa = () => {
    console.log('sefa');
  };

  const open = Boolean(anchorEl);
  const openPayment = Boolean(anchorElPayment);

  const firstCard = [
    {
      image: 'popover-kirapratik.svg',
      title: 'KiraPratik',
      text: 'Türkiye’nin ilk kira takip platformu.',
      url: 'https://www.kirapratik.com.tr/',
    },
    {
      image: 'popover-aidatpratik.svg',
      title: 'AidatPratik',
      text: 'Site ve bina yöneticileri için yönetim platformu.',
      url: '',
    },
    {
      image: 'popover-cetele.svg',
      title: 'Çetele',
      text: 'Çok sayıda mülkü tek ekranda görüntüleyin ve yönetin.',
      url: '',
    },
  ];
  const secondCard = [
    {
      image: 'popover-kira-sozlesmesi-olustur.svg',
      title: 'Kira Sözleşmesi Oluştur',
      text: 'Elektronik kira sözleşmesi robotu şimdi yayında.',
      url: 'https://www.kirapratik.com.tr/kp-panel/kira-sozlesmesi',
    },
    {
      image: 'popover-kira-artis.svg',
      title: 'Kira Artış Oranı Hesapla',
      text: 'Seçtiğiniz ay için güncel kira tutarını görüntüleyin.',
      url: 'https://www.kirapratik.com.tr/kira-artis',
    },
    {
      image: 'popover-kredi-karti.svg',
      title: 'Kredi Kartı ile Kira Öde',
      text: 'kirapratik.com’da kredi kartı ile kira ödeyin!',
      url: 'https://www.kirapratik.com.tr/kp-panel/kira-ode',
    },
    {
      image: 'popover-banka-entegrasyonu.svg',
      title: 'Banka Entegrasyonu',
      text: 'Sekiz büyük bankanın mobil uygulamasından fatura öder gibi kira ödemenizi gerçekleştirebilirsiniz.',
      url: 'https://www.kirapratik.com.tr/nasil',
    },
  ];
  const thirdCard = [
    {
      image: 'popover-is-ortagim.svg',
      title: 'İş Ortağım',
      text: 'KiraPratik ekosistemine dahil edilen her kontrat için kazanç sağlama imkanı. Gayrimenkul uzmanlarının favorisi.',
      url: 'https://www.kirapratik.com.tr/is-ortagim/',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="sticky" component="nav">
        <Toolbar className={styles.toolbar}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Image
              src="kirapratik-logo.svg"
              alt="Picture of the author"
              width={200}
              height={50}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              className={styles.button}
              sx={{
                color: '#fff',
                marginRight: '1rem',
              }}
            >
              Ürünler
            </Button>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              onMouseLeave={handlePopoverClose}
            >
              <Grid
                md={12}
                style={{ width: '100vw', padding: '1rem' }}
                container
              >
                <Grid md={12}>
                  <Typography variant="body2" className={styles.popoverTitle}>
                    Herkes için Hayatı Kolaylaştıran Çözümler
                  </Typography>
                </Grid>
                <Grid style={{ marginTop: '1rem' }} md={4}>
                  {firstCard.map((item, index) => (
                    <Link href={item.url}>
                      <Card
                        elevation={0}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={sefa}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          sx={{
                            height: '2rem',
                            minWidth: '10%',
                            maxWidth: '10%',
                            objectFit: 'fill',
                          }}
                          image={item.image}
                        />
                        <CardContent>
                          <div>
                            <Typography style={{ fontWeight: '700' }}>
                              {item.title}
                            </Typography>
                            <Typography>{item.text}</Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </Grid>
                <Grid md={4}>
                  {secondCard.map((item, index) => (
                    <Link href={item.url}>
                      <Card
                        elevation={0}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={sefa}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          sx={{
                            height: '2rem',
                            minWidth: '10%',
                            maxWidth: '10%',
                            objectFit: 'fill',
                          }}
                          image={item.image}
                        />
                        <CardContent>
                          <div>
                            <Typography style={{ fontWeight: '700' }}>
                              {item.title}
                            </Typography>
                            <Typography>{item.text}</Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </Grid>
                <Grid md={4}>
                  {thirdCard.map((item, index) => (
                    <Link href={item.url}>
                      <Card
                        elevation={0}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={sefa}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          sx={{
                            height: '2rem',
                            minWidth: '10%',
                            maxWidth: '10%',
                            objectFit: 'fill',
                          }}
                          image={item.image}
                        />
                        <CardContent>
                          <div>
                            <Typography
                              style={{ fontWeight: '700', color: '#1B8AF0' }}
                            >
                              {item.title}
                            </Typography>
                            <Typography>{item.text}</Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}{' '}
                </Grid>
              </Grid>
            </Popover>

            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              Paketler
            </Button>

            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              KiraPratik Nasıl Kullanılır?
            </Button>

            <Button
              aria-owns={openPayment ? 'mouse-over-popover-payment' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpenPayment}
              onMouseLeave={handlePopoverClosePayment}
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              Ödeme Yap
            </Button>
            <Popover
              id="mouse-over-popover-payment"
              sx={{
                pointerEvents: 'none',
              }}
              open={openPayment}
              anchorEl={anchorElPayment}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClosePayment}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, width: '100vw' }}>
                I use Popover.
              </Typography>
            </Popover>

            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              İçerik
            </Button>
            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              İletişim
            </Button>
            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              Giriş Yap
            </Button>
            <Button
              className={styles.button}
              sx={{ color: '#fff', marginRight: '1rem' }}
            >
              EN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
