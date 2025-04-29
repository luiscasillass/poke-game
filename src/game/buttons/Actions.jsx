import React from 'react';
import '../styles.css';

const Actions = ({ handleAttack }) => {
  return (
    <div className="container-action">
      <div style={{ paddingTop: '40%' }}>
        <button className="action-btn">B</button>
      </div>
      <div>
        <button className="action-btn" onClick={handleAttack}>A</button>
      </div>
    </div>
  );
};

export default Actions;
