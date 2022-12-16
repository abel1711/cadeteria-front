import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';
import { HomeScreen, LoginScreen, RegistroScreen } from '../screens';
import { RutasPublicas, RutasPrivadas, RutasCliente, RutasCadete, RutasAdministrador } from './';


export const Rutas = () => {

    const { usuario } = useAppSelector(state => state.auth );

    const handleUser = () => {
        switch (usuario?.rol) {
            case 'USER_ROL':
                return <RutasCliente />
                break;
            case 'MOTO_ROL':
                return <RutasCadete />
                break;
            case 'ADMIN_ROL':
                return <RutasAdministrador />
                break;
            default:
                break;
        }
    }

    return (
        <Routes>

            <Route path="out/*" element={
                <RutasPublicas>
                    <Routes>
                        <Route path="/login" element={< LoginScreen />} />
                        <Route path="/registro" element={< RegistroScreen />} />
                        <Route path="/*" element={< HomeScreen />} />
                    </Routes>
                </RutasPublicas>
            }
            />


            <Route path="in/*" element={
                <RutasPrivadas>
                    <Routes>
                        <Route
                            path="/usuario"
                            element={handleUser()}
                        />
                    </Routes>
                </RutasPrivadas>
            } />

        </Routes>
    )
}
