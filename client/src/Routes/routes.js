import React from "react";

//Home
const HomePage = React.lazy(() => import('../Pages/HomePage'))

const routes = [
    //Home
    {path:'/', element: <HomePage /> }
]

export default routes