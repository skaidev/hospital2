import React from "react";

const MIN = ({ setMinmenu: toggle }) => {
  return (
    <>
      <div className="minscreen-cover">
        <div className="minview">
          <div className="min-logo">
            <img src="./images/logo-2.png" alt="min logo" />
            <div className="_x" onClick={() => toggle(false)}>
              x
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MIN;
