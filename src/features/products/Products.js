import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './productsSlice';

import './Products.css';

export function Products() {
  const dispatch = useDispatch();


  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(fetchAsync())}
        >
          -Fetch Products
        </button>
           <div className="card">
                  <img src="img_avatar.png" alt="Avatar" style={{width:"100%"}}/>
              <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
              </div>
          </div>
      </div>
    </div>
  );
}

