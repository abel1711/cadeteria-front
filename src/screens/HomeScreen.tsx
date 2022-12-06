import { useEffect } from "react"
import { CssBaseline, Typography, Box, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { startGetDataPage } from '../redux/slices/data-page/data-pageThunks';
import { Card, CardServicios, NavbarHome } from "../components";

export const HomeScreen = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.dataPage)

  useEffect(() => {
    dispatch(startGetDataPage())
  }, [])

  return (
    <>
      <NavbarHome />
      <Container component={'main'} maxWidth='lg' style={{
        // backgroundColor: 'red'
      }}>
        <CssBaseline />

        <Grid container spacing={1} mt={2}>
          
          <Grid item  sm={6}>
            <Card
              titulo="¿Quienes Somos?"
              text={data.about}
            />
          </Grid>

          <Grid item  sm={6} >
            <Card
              titulo="Nuestra misión"
              text={data.mision}
            />
          </Grid>

          <Grid item  sm={6}>
            <Card
              titulo="Nuestros objetivos"
              text={data.objetivos}
            />
          </Grid>
          <Grid item  sm={6}>
            <CardServicios servicios={data.servicios}/>
          </Grid>


        </Grid>

      </Container>
    </>
  )
}
