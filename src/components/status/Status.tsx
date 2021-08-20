import React from "react";
import _ from "lodash";

import style from "./Status.scss";

interface StatusProps {
  currentCell?: [number, number];
}

class Status extends React.Component<StatusProps> {
  static defaultProps = {
    currentCell: [0, 0],
  };

  props: StatusProps;

  shouldComponentUpdate(newProps: StatusProps) {
    return !_.isEqual(this.props, newProps);
  }

  render() {
    return (
      <div className={style.status} role="status">
        Current cell: {JSON.stringify(this.props.currentCell)}
      </div>
    );
  }
}

export default Status;
