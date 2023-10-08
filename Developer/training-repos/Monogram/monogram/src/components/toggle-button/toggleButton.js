import React from 'react';
//Prop types
import { bool, func } from "prop-types";

const ToggleButton = ({ open, setOpen }) => {
  return(
    <div open={open} onClick={() => setOpen(!open)} className='toggle-button z-20 overflow-hidden hidden cursor-pointer max-lg:flex w-8 h-8 justify-around flex-nowrap flex-col absolute top-11 right-10 border-none p-0'>
      <div className={`toggle-button__span ${open ? 'rotate-45' : 'rotate-0'}`}></div>
      <div className={`toggle-button__span ${open ? 'translate-x-[50px]' : 'translate-x-0'}`}></div>
      <div className={`toggle-button__span ${open ? '-rotate-45' : 'rotate-0)'}`}></div>
    </div>
  );
};

ToggleButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ToggleButton;