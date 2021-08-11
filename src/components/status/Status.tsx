import React from "react";

import style from "./Status.scss";

interface StatusProps {
  currentCell?: (null | number)[];
}

const Status: React.FC<StatusProps> = ({
  currentCell = [null, null],
  ...props
}) => {
  return (
    <div className={style.status} role="status">
      Current cell: {JSON.stringify(currentCell)}
    </div>
  );
};

export default Status;
