import React from 'react';



const HotelComponent = (props) => {

  // const hotel = useSelector(state => state./** */hotel);
  // const dispatch = useDispatch();

  return (
    <div id="tripAspect">
      <div>
        <label>
          <input placeholder="Where will we stay?" />
          <button></button>
        </label>
      </div>
      <div>
        <label>
          <p>$</p>
          <input placeholder="Current Cost" />
          <button></button>
        </label>
      </div>
    </div>
  )
}

export default HotelComponent;