import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import DetailPage from "./routes/DetailPage";
import { RestaurantsContextProvider } from './context/RestaurantContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="route_elements">
        <Router>
          <Routes>
            <Route exact path ="/" element={<Home/>} />
            <Route exact path ="/restaurants/:id/update" element={<UpdatePage/>} />
            <Route exact path ="/restaurants/:id" element={<DetailPage/>} />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
