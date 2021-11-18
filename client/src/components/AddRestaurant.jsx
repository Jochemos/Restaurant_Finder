import React from 'react';
import './AddRestaurant.css';

const AddRestaurant = () => {
  return (
    <form action="">
      <div className="wholeObject">
      <div className="subject_Border">
        <input type="text" className="form_Regulator" placeholder="name" />
      </div>
      <div className="subject_Border">
        <input type="text" className="form_Regulator" placeholder="location" />
      </div>
      <div className="subject_Border">
        <select className="form_Regulator">
          <option selected>All Price Range</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
      </div>
      <div className="button_Regulator">
        <button className="btn_Form">Add</button>
      </div>
      </div>
    </form>

  );
};

export default AddRestaurant;
