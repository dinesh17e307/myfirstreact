import React from "react";
const withclass = (Wrapclass, Classname) => {
  return (props) => (
    <div className={Classname}>
      <Wrapclass {...props} />
    </div>
  );
};
export default withclass;
