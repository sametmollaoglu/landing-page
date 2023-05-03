import { Grid, Typography, useMediaQuery } from '@mui/material';
import styles from '@component/styles/FourthPart.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardMedia from '@mui/material/CardMedia';
import { List, ListItem, ListItemText } from '@mui/material';

export default function FourthPart() {
  const [value, setValue] = React.useState('1');
  const items = [
    'Kira ödemesi yaklaştığında, kiracıya ödeme günü geldiği hatırlatılır.',
    'Kira ödemesinin gecikmesi halinde, KiraPratik tarafından kiracı ile çeşitli kanallardan iletişime geçilir ve sürecin çözüme kavuşturulması için çalışılır.',
    'Kiranın ödenmemesi durumunda hukuksal süreç KiraPratik tarafından üstlenilerek gerekli işlemler gerçekleştirilir.',
    'Kira artış dönemi geldiğinde, kira artışı sözleşmede yazan koşullarda otomatik olarak KiraPratik altyapısı ile gerçekleşir.',
    'Mülk içerisinde yapılan ve kiralayanın sorumluluğunda olan masraflar, kiracı tarafından KiraPratik uygulamasına girilir ve kiralayana onaya gönderilir. Kiralayanın onayının ardından ilgili masraf en yakın kira tutarından otomatik olarak düşülür.',
    'Kiralayan ile Kiracı, ister web ister mobil uygulama üzerinden kolayca birbirlerine mesaj gönderebilir, iletişimlerini dijital ortamda kayıtlı şekilde güvenle saklayabilir.',
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isClient = typeof window === 'object';

  return (
    <Grid style={{ padding: '0.5rem' }} container>
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
          Kira Ödeme ve Kira Takibi Nasıl Kullanılır?
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <Box sx={{ width: '90%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TabList
                classes={{
                  flexContainer: styles.customTabs,
                  indicator: styles.indicator,
                }}
                className={styles.tabList}
                style={{
                  width:
                    isClient && useMediaQuery('(max-width:600px)')
                      ? '90vw'
                      : '',
                }}
                centered
                onChange={handleChange}
              >
                <Tab
                  className={styles.tabTitle}
                  classes={{
                    selected: styles.selectedTab,
                  }}
                  style={{
                    fontSize:
                      isClient && useMediaQuery('(max-width:600px)')
                        ? '1rem'
                        : '',
                  }}
                  label="Ödeme Kolaylığı"
                  value="1"
                />
                <Tab
                  className={styles.tabTitle}
                  classes={{
                    selected: styles.selectedTab,
                  }}
                  style={{
                    fontSize:
                      isClient && useMediaQuery('(max-width:600px)')
                        ? '0.9rem'
                        : '',
                  }}
                  label="Akıllı Uygulamalar"
                  value="2"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid className={styles.wrapper} container spacing={2}>
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight:
                      isClient && useMediaQuery('(max-width:770px)')
                        ? ''
                        : '4rem',
                  }}
                  item
                  xs={12}
                  md={5}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    image="fourth-part-left.svg"
                  />
                </Grid>
                <Grid
                  style={{
                    marginTop:
                      isClient && useMediaQuery('(max-width:770px)')
                        ? '2rem'
                        : '',
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <div style={{ width: '90%' }}>
                    <Typography className={styles.itemOneTitle} gutterBottom>
                      Banka Entegrasyonu
                    </Typography>
                  </div>

                  <div style={{ width: '90%', marginTop: '2rem' }}>
                    <Typography className={styles.itemOneText} gutterBottom>
                      KiraPratik sistemi tarafından, sözleşme koşullarında
                      yazılan kira bedeli, istenirse anlaşmalı bankaların
                      <span style={{ fontWeight: 600 }}>“Fatura Ödeme”</span>
                      kanallarından sözleşme numarası ile sorgulanarak istenirse
                      de KiraPratik web uygulaması üzerinden
                      <span style={{ fontWeight: 600 }}>
                        banka kartı/kredi kartına peşin veya taksit
                      </span>
                      ile ödenebilir.
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem',
                  }}
                  item
                  xs={12}
                  md={10}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    image="fourth-part-left-bottom.svg"
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              value="2"
            >
              <List
                style={{
                  width: '100%',
                }}
              >
                {items.map((item, index) => (
                  <ListItem className={styles.itemTwoItem} key={index}>
                    <ListItemText primary={`\u2022 ${item}`} />
                  </ListItem>
                ))}
                <ListItem className={styles.itemTwoItem}>
                  <Typography>
                    • Hem kiralayan hem de kiracılar KiraPratik uygulamasında
                    tüm yıla ait kira ödemelerini ve alacaklarını
                    <span style={{ fontWeight: '600' }}>
                      kolay, düzenli ve hızlı bir şekilde görebilir,
                      raporlayabilir ve takip edebilir.
                    </span>
                  </Typography>
                </ListItem>
              </List>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
