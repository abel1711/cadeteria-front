import React from 'react';
import { Typography, List, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Servicio } from '../interfaces';

interface Props {
    servicios: Servicio[]
}

export const CardServicios = ({ servicios }: Props) => {
    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                    variant="h6" component="h1"
                >Nuestros Servicios</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* <Typography variant="body1" component="p"> */}
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                        component="div"
                        aria-labelledby="nested-list-subheader"
                    >
                        {
                            servicios.map(({ titulo, texto }) => (
                                <div key={titulo}>
                                    <ListItemIcon>
                                        {/* <SendIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={titulo}
                                        secondary={
                                            titulo === 'Tramites'
                                                ? <ul>{texto.split(',').map(item => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                                </ul>
                                                : texto} />
                                </div>

                            ))
                        }

                    </List>
                {/* </Typography> */}
            </AccordionDetails>
        </Accordion>
    )
}
