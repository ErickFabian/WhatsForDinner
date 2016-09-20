import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaClock from 'react-icons/lib/fa/clock-o';
import FaPhone from 'react-icons/lib/fa/phone';
import FaGlobe from 'react-icons/lib/fa/globe';

const FoodStandInfo = props => (
  <div className='row'>
    <div className='col-md-3'>
      <h5>
        <FaMapMarker
          size={20}
        />
        <span className="pl-5">
          Address
        </span>
      </h5>
      <h5>
        <FaClock
          size={20}
        />
        <span className="pl-5">
          Schedule
        </span>
      </h5>
      <h5>
        <FaPhone
          size={20}
        />
        <span className="pl-5">
          Phone
        </span>
      </h5>
      <h5>
        <FaGlobe
          size={20}
        />
        <span className="pl-5">
          Website
        </span>
      </h5>
    </div>
    <div className='col-md-9'>
      <h4>
        <small>
          {props.address}
        </small>
      </h4>
      <h4>
        <small>
          {props.schedule}
        </small>
      </h4>
      <h4>
        <small>
          {props.phone}
        </small>
      </h4>
      <h4>
        <small>
          {props.website}
        </small>
      </h4>
    </div>
  </div>
);

export default FoodStandInfo;