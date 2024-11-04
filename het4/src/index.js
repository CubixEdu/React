import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import {DogProvider, useDogs} from "./contexts/dogContext";
import {DogList} from "./pages/DogList";
import {AddNew} from "./pages/AddNew";
import {EditDog} from "./pages/EditDog";



const RootRoutes = () => {
    const dogs = useDogs();

    const router = createBrowserRouter([
            {
                path: "/",
                element: <App/>,
                children: [
                    {
                        path: "/",
                        element: <DogList />
                    },
                    {
                        path: "/new",
                        element: <AddNew />
                    },
                    {
                        path: "/edit/:dogId",
                        element: <EditDog />,
                        loader: ({params}) => {
                            const dog = dogs.list.find(dog => dog.id === params.dogId);

                            if (!dog) {
                                return redirect('/');
                            }

                            return dog;
                        }
                    }
                ],
            },
        ]
    )

     return   <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DogProvider>
            <RootRoutes />
        </DogProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
