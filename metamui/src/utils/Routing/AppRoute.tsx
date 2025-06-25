import { Routes , Route} from "react-router-dom"
import { appRoutes } from "./route"



const AppRoutes = () => {
    return (
        <Routes >
             {appRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
        </Routes>
    )
}

export default AppRoutes;