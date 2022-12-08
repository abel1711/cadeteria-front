import { useEffect } from "react"
import { CssBaseline, Typography, Box, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { startGetDataPage } from '../redux/slices/data-page/data-pageThunks';
import { FAQ, NavbarHome } from "../components";

export const HomeScreen = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.dataPage)

  useEffect(() => {
    dispatch(startGetDataPage())
  }, [])

  return (
    <>
      <NavbarHome />
      <Container component={'main'} maxWidth='lg' >

        <FAQ data={data}/>

      </Container>
    </>
  )
}
