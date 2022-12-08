import { Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    ciudades : string[];
}

export const CardAccordionCiudades = ({ciudades}:Props) => {

  return (
    <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <Typography
            variant="h6" component="span"
        >Zona de trabajo</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="span"
            aria-labelledby="nested-list-subheader"
        >
            {
                ciudades.map(( ciudad ) => (
                    <ListItemText
                        key={ciudad}
                        primary={`${ciudad.split(',')[0]} - ${ciudad.split(',')[1]}`}
                    />

                ))
            }

        </List>
    </AccordionDetails>
</Accordion>
  )
}
