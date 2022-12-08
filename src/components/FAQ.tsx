import { Box } from '@mui/material';
import { CardAccordion, CardAccordionServicios } from './';
import { RespDataPage } from '../interfaces/interface';
import { CardAccordionCiudades } from './CardAccordionCiudades';

interface Props {
    data: RespDataPage;
}

export const FAQ = ({ data }: Props) => {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }
            }
        >

            <Box
                sx={{
                    maxWidth: 500,
                    marginTop: 3,
                    marginBottom: 3
                }}
            >

                <CardAccordion
                    titulo="¿Quienes Somos?"
                    text={data.about}
                />

                <CardAccordion
                    titulo="Nuestra misión"
                    text={data.mision}
                />

                <CardAccordion
                    titulo="Nuestros objetivos"
                    text={data.objetivos}
                />

                <CardAccordionServicios
                    servicios={data.servicios}
                />

                <CardAccordionCiudades
                    ciudades={data.ciudades}
                />
            </Box>
        </Box>
    )
}
