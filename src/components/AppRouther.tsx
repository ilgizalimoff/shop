import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/routs';

export default function AppRouther() {
    return (
        <Routes>
            {
                routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                )
            }
        </Routes>
    )
}