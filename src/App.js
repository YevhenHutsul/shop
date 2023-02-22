import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Route,
    RouterProvider
} from "react-router-dom";
import { HomePage } from "./Pages/Home-Page/home-page";
import { Header } from "./components/header/header";



function App() {
    const router = createBrowserRouter(
            [
            {
                path: '/',
                element: <HomePage />
            },
            ]
    )
    return (
        <div className="App">
            <Header/>  
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
