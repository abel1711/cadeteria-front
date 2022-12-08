import { Typography, List, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Servicio } from '../interfaces';

interface Props {
    servicios: Servicio[]
}

export const CardAccordionServicios = ({ servicios }: Props) => {
    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                    variant="h6" component="span"
                >Nuestros Servicios</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="span"
                    aria-labelledby="nested-list-subheader"
                >
                    {
                        servicios.map(({ titulo, texto }) => (
                            <ListItemText
                                key={titulo}
                                primary={titulo}
                                secondary={
                                    titulo === 'Tramites'
                                        ? <List
                                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                                            component="span"
                                            aria-labelledby="nested-list-subheader"
                                            >{texto.split(',').map(item => (
                                                <ListItemText secondary={item} key={item} />
                                            ))}
                                            </List>
                                        : texto} />

                        ))
                    }

                </List>
            </AccordionDetails>
        </Accordion>
    )
}
