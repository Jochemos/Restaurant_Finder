import React, {useState} from 'react';

export const RestaurantContext = React.createContext();

export const RestaurantsContextProvider = (props) =>
{
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
      {props.children}
    </RestaurantContext.Provider>
  )
}
