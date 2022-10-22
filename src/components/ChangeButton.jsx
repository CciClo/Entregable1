import React from 'react';

const ChangeButton = ({change}) => {
  return (
    <div>
      <i onClick={change} class="fa-solid fa-circle-chevron-right"></i>
    </div>
  );
};

export default ChangeButton;