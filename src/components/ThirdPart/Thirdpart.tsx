import { Grid, Typography, useMediaQuery } from '@mui/material';
import styles from '@component/styles/ThirdPart.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

export default function ThirdPart() {
  const isClient = typeof window === 'object';

  return (
    <Grid className={styles.wrapper} container>
      <Grid
        xs={12}
        md={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography className={styles.title} variant="h5" gutterBottom>
          Herkes için Hayatı Kolaylaştıran Çözümler
        </Typography>
      </Grid>

      <Grid
        style={{
          width: '75%',
          marginTop: '2rem',
          justifyContent: 'space-between',
        }}
        container
        spacing={2}
      >
        <Grid
          style={{
            paddingBottom:
              isClient && useMediaQuery('(max-width:850px)') ? '2rem' : '',
          }}
          xs={12}
          md={5}
        >
          <Card
            sx={{
              minWidth: 275,
              borderRadius: '20px',
              padding: '2rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ height: '3rem', width: '35%', objectFit: 'fill' }}
              image="third-part-aidatpratik.svg"
            />
            <CardContent>
              <Typography
                className={styles.text}
                gutterBottom
                variant="body1"
                component="div"
              >
                Site veya apartman yöneticisi misiniz? Gelir ve gider raporları,
                aidat ödemeleri ve takibi için dijital dünyanın avantajlarından
                yararlanın.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={5}>
          <Link href={'https://www.kirapratik.com.tr/cetele/'}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '20px',
                padding: '2rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{ height: '3rem', width: '35%', objectFit: 'fill' }}
                image="third-part-cetele.svg"
              />
              <CardContent>
                <Typography
                  className={styles.text}
                  gutterBottom
                  variant="body1"
                  component="div"
                >
                  Mülk yönetimi ve kira takibi için ihtiyacınız olan CRM
                  panelini kiracınızı dahil etmek zorunda kalmadan kendiniz
                  yönetebilirsiniz.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>

      <Grid
        style={{
          width: '75%',
          marginTop: '2rem',
          justifyContent: 'space-between',
        }}
        container
        spacing={2}
      >
        <Grid
          style={{
            paddingBottom:
              isClient && useMediaQuery('(max-width:850px)') ? '2rem' : '',
          }}
          xs={12}
          md={3}
        >
          <Link href={'https://www.kirapratik.com.tr/kp-panel/kira-sozlesmesi'}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '20px',
                padding: '1rem',
                paddingBottom: 0,
              }}
            >
              <div style={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{ height: '3rem', width: '30%', objectFit: 'fill' }}
                  image="third-part-kira-sozlesmesi.svg"
                />
                <Typography
                  className={styles.bottomCardTitle}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  Kira Sözleşmesi Oluştur
                </Typography>
              </div>
              <CardContent>
                <Typography
                  className={styles.text}
                  gutterBottom
                  variant="body2"
                  component="div"
                >
                  Kira Sözleşmesi Robotunu kullanarak dijital ortamda kira
                  sözleşmelerinizi hazırlayabilir ve kaydedebilirsiniz.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid
          style={{
            paddingBottom:
              isClient && useMediaQuery('(max-width:850px)') ? '2rem' : '',
          }}
          xs={12}
          md={3}
        >
          <Link href={'https://www.kirapratik.com.tr/kira-artis'}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '20px',
                padding: '1rem',
                paddingBottom: 0,
              }}
            >
              <div style={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{ height: '3rem', width: '30%', objectFit: 'fill' }}
                  image="third-part-calculate.svg"
                />
                <Typography
                  className={styles.bottomCardTitle}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  Kira Artış Oranı Hesaplama
                </Typography>
              </div>
              <CardContent>
                <Typography
                  className={styles.text}
                  gutterBottom
                  variant="body2"
                  component="div"
                >
                  Kira artış oranı hesaplama modülünü kullanarak seçtiğiniz ay
                  için güncel kira tutarını görüntüleyin.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href={'https://www.kirapratik.com.tr/is-ortagim/'}>
            <Card
              className={styles.isOrtagim}
              sx={{
                minWidth: 275,
                borderRadius: '20px',
                padding: '1rem',
                paddingBottom: 0,
              }}
            >
              <div style={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{ height: '3rem', width: '30%', objectFit: 'fill' }}
                  image="third-part-star.svg"
                />
                <Typography
                  className={styles.isOrtagimTitle}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  KiraPratik{' '}
                  {isClient && useMediaQuery('(max-width:850px)') ? (
                    ''
                  ) : (
                    <br></br>
                  )}
                  İş Ortağım
                </Typography>
              </div>
              <CardContent>
                <Typography
                  className={styles.isOrtagimText}
                  gutterBottom
                  variant="body2"
                  component="div"
                  color={'white'}
                >
                  KiraPratik uygulamasına dahil ettiğiniz her kontrat için gelir
                  elde edebilirsiniz. Gayrimenkul uzmanlarının favorisi.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
