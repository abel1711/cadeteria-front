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
                {
                    servicios.map(({ titulo, texto }) => (

                        <Accordion key={titulo}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    variant="body1" component="span"
                                >{titulo}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    variant="subtitle2" component="p"
                                >{texto}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }

            </AccordionDetails>
        </Accordion>
    )
}
