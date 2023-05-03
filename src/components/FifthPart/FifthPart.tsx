import { Grid, Typography, useMediaQuery } from '@mui/material';
import styles from '@component/styles/FifthPart.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function FifthPart() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const articles = [
    {
      text: 'Kontrat ve Masraf Yönetimi Ekranları',
    },
    { text: 'Kredi Kartı ile Kira Ödeme' },
    {
      text: 'Hatırlatma ve SMS Bildirimleriı',
    },
    {
      text: 'Mülk Yönetimi ve Asistanlık Hizmetleri',
    },
    {
      text: 'Borç Uyarı Çağrı Merkezi Desteği',
    },
    {
      text: 'Hukuki İşlemlerin Takibi',
    },
    {
      text: 'Noter Onaylı İhtarname',
    },
    {
      text: 'İcra Takibiı',
    },
    {
      text: 'Tadilat ve Eşyalandırma',
    },
    {
      text: 'Kira Garantisi',
    },
  ];
  const cards = [
    {
      title: 'YÖNETİM',
      monthlyPrice: '200',
      annualyPrice: '2000',
      image: 'yonetim-image.svg',
      monthlySaving: 'Tasarruflu Fiyatlar için Yıllık Ödeme Planını Seçin',
      annualySaving: 'Yıllık Plan ile 400TL Tasarruf Edin',
      content: [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      button: 'Üye Ol ve Satın Al',
    },
    {
      title: 'YASAL',
      monthlyPrice: '300',
      annualyPrice: '3000',
      image: 'yasal-image.svg',
      monthlySaving: 'Tasarruflu Fiyatlar için Yıllık Ödeme Planını Seçin',
      annualySaving: 'Yıllık Plan ile 600TL Tasarruf Edin',
      content: [true, true, true, true, true, true, true, true, false, false],
      button: 'Üye Ol ve Satın Al',
    },
    {
      title: 'KİRA GARANTİSİ',
      image: 'kira-garantisi-image.svg',
      percentage: '%12',
      monthlySaving: 'Yıllık Kira Gelirinizi Garanti Altına Alın',
      annualySaving: 'Yıllık Kira Gelirinizi Garanti Altına Alın',
      content: [true, true, true, true, true, true, true, true, true, true],
      button: 'Teklif Al',
    },
  ];

  const [innerWidth, setInnerWidth] = React.useState(
    typeof window != 'undefined' ? window.innerWidth : ''
  );
  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
          KiraPratik’li Olmak için <br />
          <span style={{ fontWeight: 400 }}>Mülkünüze Uygun Planı Seçin</span>
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
                borderColor: 'white',
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
                centered
                onChange={handleChange}
                style={{
                  width:
                    isClient && useMediaQuery('(max-width:600px)')
                      ? '90vw'
                      : '',
                }}
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
                  label="Aylık"
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
                  label="Yıllık"
                  value="2"
                />
              </TabList>
            </Box>
            <TabPanel
              style={
                value == '2'
                  ? { display: 'none' }
                  : {
                      display: 'flex',
                      flexDirection:
                        isClient && useMediaQuery('(max-width:850px)')
                          ? 'column'
                          : 'row',
                    }
              }
              value="1"
            >
              {cards.map((item, index) => (
                <Grid
                  xs={12}
                  md={12}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 0,
                  }}
                  container
                  spacing={2}
                >
                  <Grid xs={innerWidth < '600' ? 12 : 8} md={10}>
                    <Card className={styles.cardWrapper}>
                      <CardContent
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          textAlign={'center'}
                          gutterBottom
                          variant="caption"
                          component="div"
                          className={styles.cardTop}
                          style={{ color: '#637381' }}
                        >
                          {item.title}
                        </Typography>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '1rem',
                          }}
                        >
                          <Typography
                            style={{ marginRight: '1rem' }}
                            gutterBottom
                            variant="h4"
                            component="div"
                            className={styles.cardTop}
                          >
                            {!item.percentage && value == '1'
                              ? item.monthlyPrice
                              : !item.percentage && value == '2'
                              ? item.annualyPrice
                              : item.percentage}
                          </Typography>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="caption"
                              component="div"
                              className={styles.cardTop}
                              style={
                                item.percentage
                                  ? { display: 'none' }
                                  : { color: '#637381', display: 'block' }
                              }
                            >
                              TL
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="caption"
                              component="div"
                              className={styles.cardTop}
                              style={
                                item.percentage
                                  ? { display: 'none' }
                                  : { color: '#637381', display: 'block' }
                              }
                            >
                              {value == '1' ? '/aylık' : '/yıllık'}
                            </Typography>
                          </div>
                        </div>
                        <Typography
                          textAlign={'center'}
                          gutterBottom
                          variant="caption"
                          component="div"
                          className={styles.cardPriceBottom}
                        >
                          {value == '1'
                            ? item.monthlySaving
                            : item.annualySaving}
                        </Typography>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          sx={{
                            height: '30%',
                            width: '30%',
                            objectFit: 'fill',
                          }}
                          image={item.image}
                        />
                        <List>
                          {articles.map((content, index) => (
                            <ListItem key={index}>
                              {item.content[index] && (
                                <ListItemIcon classes={{ root: styles.icon }}>
                                  <CheckIcon />
                                </ListItemIcon>
                              )}
                              <ListItemText
                                classes={{ primary: styles.items }}
                                style={
                                  !item.content[index]
                                    ? { marginLeft: '2.5rem', color: 'gray' }
                                    : {}
                                }
                                className={styles.items}
                                primary={content.text}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                      <CardActions
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          className={
                            item.percentage
                              ? styles.lastCardButton
                              : styles.cardButton
                          }
                          variant="contained"
                          size="small"
                        >
                          {item.button}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              ))}
            </TabPanel>
            <TabPanel
              style={{
                display: 'flex',
                flexDirection:
                  isClient && useMediaQuery('(max-width:850px)')
                    ? 'column'
                    : 'row',
              }}
              value="2"
            >
              {cards.map((item, index) => (
                <Grid
                  xs={12}
                  md={12}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 0,
                  }}
                  container
                  spacing={2}
                >
                  <Grid xs={innerWidth < '600' ? 12 : 8} md={10}>
                    <Card className={styles.cardWrapper}>
                      <CardContent
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          textAlign={'center'}
                          gutterBottom
                          variant="caption"
                          component="div"
                          className={styles.cardTop}
                          style={{ color: '#637381' }}
                        >
                          {item.title}
                        </Typography>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '1rem',
                          }}
                        >
                          <Typography
                            style={{ marginRight: '1rem' }}
                            gutterBottom
                            variant="h4"
                            component="div"
                            className={styles.cardTop}
                          >
                            {!item.percentage && value == '1'
                              ? item.monthlyPrice
                              : !item.percentage && value == '2'
                              ? item.annualyPrice
                              : item.percentage}
                          </Typography>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="caption"
                              component="div"
                              className={styles.cardTop}
                              style={
                                item.percentage
                                  ? { display: 'none' }
                                  : { color: '#637381', display: 'block' }
                              }
                            >
                              TL
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="caption"
                              component="div"
                              className={styles.cardTop}
                              style={
                                item.percentage
                                  ? { display: 'none' }
                                  : { color: '#637381', display: 'block' }
                              }
                            >
                              {value == '1' ? '/aylık' : '/yıllık'}
                            </Typography>
                          </div>
                        </div>
                        <Typography
                          textAlign={'center'}
                          gutterBottom
                          variant="caption"
                          component="div"
                          className={styles.cardPriceBottom}
                        >
                          {value == '1'
                            ? item.monthlySaving
                            : item.annualySaving}
                        </Typography>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          sx={{
                            height: '30%',
                            width: '30%',
                            objectFit: 'fill',
                          }}
                          image={item.image}
                        />
                        <List>
                          {articles.map((content, index) => (
                            <ListItem key={index}>
                              {item.content[index] && (
                                <ListItemIcon classes={{ root: styles.icon }}>
                                  <CheckIcon />
                                </ListItemIcon>
                              )}
                              <ListItemText
                                classes={{ primary: styles.items }}
                                style={
                                  !item.content[index]
                                    ? { marginLeft: '2.5rem', color: 'gray' }
                                    : {}
                                }
                                className={styles.items}
                                primary={content.text}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                      <CardActions
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          className={
                            item.percentage
                              ? styles.lastCardButton
                              : styles.cardButton
                          }
                          variant="contained"
                          size="small"
                        >
                          {item.button}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              ))}
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
