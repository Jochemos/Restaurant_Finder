import React, {useEffect, useContext} from 'react';
import "./RestaurantList.css";
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      }catch(err){}
    }

    fetchData();
  }, []);

  return (
    <div className="whole_Container">
      <table className="whole_Table">
        <thead>
          <tr className = "table_Headline">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return(
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td>
                  <button className="btn_update">UPDATE</button>
                </td>
                <td>
                  <button className="btn_delete">DELETE</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
