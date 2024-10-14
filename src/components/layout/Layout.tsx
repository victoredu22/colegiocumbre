import React from "react";
import theme from "../../global/MainTheme";
import { Grid } from "@mui/material";

import styles from "../../styles/Layout.module.css";
import { Navbar } from "../Navbar";

import { ThemeProvider } from "@mui/material/styles";

export interface LayoutInterface {
  children: React.ReactNode | null;
  route?: string;
  title?: string;
}

const Layout: React.FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid className={styles.app_wrapper}>
          <Grid
            className={styles.main_container}
            sx={{
              marginTop: { xs: "20px", sm: "60px", md: "2%" },
            }}
          >
            {children}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Layout;
