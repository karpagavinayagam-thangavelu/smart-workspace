// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import { SnackbarProvider } from 'notistack'
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import { authTheme } from './themes/authTheme';
import useAuthVerifier from './components/AuthVerifier';
import { useEffect } from 'react';
import AppRoutes from './Routes';

export function App() {
  const {trackToPages} = useAuthVerifier();
  useEffect(() => {
    trackToPages();
  },[trackToPages]);
  return (
    <ThemeProvider theme={authTheme}>
      <SnackbarProvider>
      <div className={styles['auth-page']}>
        <Grid container>
          <Grid item md={8} xs={12}></Grid>
          <Grid item md={4} xs={12} justifyContent={"center"}>
            <Box className={styles["auth-main-section"]} >
            <Typography variant='h3' align='center' color={"primary"}>Smart Apps</Typography>
            <Typography variant='body1' align='center'  color={"primary"}>Login here to view apps</Typography>
            <AppRoutes/>
            </Box>
          </Grid>
        </Grid>
      </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
