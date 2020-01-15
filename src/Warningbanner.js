import React from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      <h1>Warning!</h1>
    </div>
  );
}

export default WarningBanner