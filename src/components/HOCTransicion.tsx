
import { Key } from 'react';
import {
    CSSTransition,
    SwitchTransition,
} from 'react-transition-group';

interface Props {
    children: JSX.Element | JSX.Element[];
    llave: Key | null | undefined;
    nodeRef: any;
}

export const HOCTransicion = ({ children, llave, nodeRef }: Props) => {
    return (
        <SwitchTransition>
            <CSSTransition
                nodeRef={nodeRef}
                key={llave}
                timeout={100}
                classNames='fade'
            >
                {children}
            </CSSTransition>
        </SwitchTransition>
    )
}
