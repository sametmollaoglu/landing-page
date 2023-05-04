import Grid from '@mui/material/Grid';
import styles from '@component/styles/SecondPart.module.css';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

const svgIcon = (
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

export default function SecondPart() {
  const isClient = typeof window === 'object';

  return (
    <Grid className={styles.wrapper} container spacing={2}>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        item
        xs={12}
        md={5}
      >
        <Image
          src="second-part.svg"
          alt="Picture of the author"
          height={500}
          width={500}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <div>
          <Typography
            style={{
              textAlign:
                isClient && useMediaQuery('(max-width:850px)')
                  ? 'center'
                  : 'start',
            }}
            className={styles.title}
            gutterBottom
          >
            Mülk Sahipleri için KiraPratik
          </Typography>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem' }}>
          <Typography className={styles.text} gutterBottom>
            Kira takibi ve kira tahsilatı sorunları KiraPratik ile sona eriyor!
            <br></br>
            <br></br>
            Dijital kira takibi ve mülk yönetimi uygulaması KiraPratik tüm
            süreçleri dijital ortamda, kayıt altına alarak yönetir.
            <br></br>
            <br></br>
            Mülklerinizin ve kira gelirlerinizin durumunu ister mobil ister
            masaüstü tüm cihazlarınızdan dilediğiniz her an görüntüleyin.{' '}
            <br></br>
            <br></br>
          </Typography>
          <Typography
            className={styles.text}
            style={{ fontWeight: '600' }}
            gutterBottom
          >
            Finansal Raporlama, Akıllı Sözleşme Yönetimi, Hukuki Süreç Desteği,
            Tadilat ve Eşyalandırma, Kira Garantisi, Çağrı Merkezi Hizmeti,
            Önemli Gün Hatırlatmaları ve daha birçok hayatınızı kolaylaştıran
            mülk hizmetleri KiraPratik’te!
          </Typography>
        </div>

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="store.svg"
            alt="Picture of the author"
            height={60}
            width={250}
          />
        </div>

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href={'https://www.kirapratik.com.tr/hizmetlerimiz'}>
            <Button
              className={styles.button}
              variant="contained"
              startIcon={svgIcon}
              size="large"
            >
              KiraPratik Hakkında Daha Fazla Bilgi
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}
