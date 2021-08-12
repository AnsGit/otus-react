import React from "react";
import _ from "lodash";

import style from "./Status.scss";

interface StatusProps {
  currentCell?: (null | number)[];
}

interface StatusState {}

class Status extends React.Component<StatusProps, StatusState> {
  static defaultProps = {
    currentCell: [null, null],
  };

  props: StatusProps;
  state: StatusState;

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
