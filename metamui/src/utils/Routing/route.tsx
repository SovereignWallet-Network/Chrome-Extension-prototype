import ImportWallet from "../../Component/Screens/ImportWallet";
import WelcomeScreen from "../../Component/Screens/WelcomeScreen";
import { Navigate } from "react-router-dom";

export const RoutePaths = {
    WELCOME: '/',
    IMPORTWALLET: '/import-wallet'
};

export const appRoutes = [

    // Catch-all route for extension environment
    {
        path: '/index.html',
        element: <Navigate to="/" replace />
    },
    {
        path: '*',
        element: <Navigate to="/" replace />
    },

    //  Routes
    {
        path: RoutePaths.WELCOME,
        element: <WelcomeScreen />
    },
    {
        path: RoutePaths.IMPORTWALLET,
        element: <ImportWallet />
    }
]

