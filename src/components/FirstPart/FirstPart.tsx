import Grid from '@mui/material/Grid';
import styles from '@component/styles/FirstPart.module.css';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { CardMedia, useMediaQuery } from '@mui/material';
import Link from 'next/link';

const joinIcon = (
  <Icon
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Image
      src="first-part-join-button.svg"
      alt="Picture of the author"
      objectFit="cover"
      height={20}
      width={20}
    />
  </Icon>
);

const paymentIcon = (
  <Icon
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Image
      src="first-part-payment-button.svg"
      alt="Picture of the author"
      objectFit="cover"
      height={20}
      width={20}
    />
  </Icon>
);

export default function FirstPart() {
  const isClient = typeof window === 'object';

  return (
    <Grid className={styles.wrapper} container spacing={2}>
      <Grid
        xs={12}
        md={7}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '80%' }}>
          <Typography
            textAlign={
              isClient && useMediaQuery('(max-width:600px)')
                ? 'center'
                : 'start'
            }
            variant={
              isClient && useMediaQuery('(max-width:600px)') ? 'h4' : 'h3'
            }
            gutterBottom
          >
            Mülk Sahibi ve Kiracılar için
          </Typography>
        </div>
        <div style={{ width: '80%' }}>
          <Typography
            fontWeight={700}
            textAlign={
              isClient && useMediaQuery('(max-width:600px)')
                ? 'center'
                : 'start'
            }
            variant={
              isClient && useMediaQuery('(max-width:600px)') ? 'h4' : 'h3'
            }
            gutterBottom
          >
            Kolay İletişim
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            width: '80%',
            justifyContent:
              isClient && useMediaQuery('(max-width:770px)') ? 'center' : '',
            marginTop: '3rem',
          }}
        >
          <Link href={'https://www.kirapratik.com.tr/kp-panel/uye-ol'}>
            <Button
              className={styles.joinButton}
              variant="contained"
              style={{ marginRight: '2rem' }}
              startIcon={joinIcon}
              size={
                isClient && useMediaQuery('(max-width:600px)')
                  ? 'small'
                  : 'large'
              }
            >
              Hemen Katıl
            </Button>
          </Link>
          <Link href={'https://www.kirapratik.com.tr/kp-panel/kira-ode'}>
            <Button
              className={styles.paymentButton}
              variant="contained"
              startIcon={paymentIcon}
              size="large"
            >
              Kira Öde
            </Button>
          </Link>
        </div>
      </Grid>

      <Grid
        xs={12}
        md={5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ height: '100%', width: '90%', objectFit: 'fill' }}
          image="first-part.svg"
        />
      </Grid>
    </Grid>
  );
}
