import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    titulo: string;
    text: string;
}

export const Card = ({ titulo, text }: Props) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6" component="h1">
                    {titulo}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography variant="body1" component="p">
                    {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
