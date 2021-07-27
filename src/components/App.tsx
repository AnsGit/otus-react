import React from "react";

interface AppProps {
  /**
   * Size (number of cols and rows) of the field
   */
  size?: [number, number];
  /**
   * Cell properties
   */
  cell?: {
    /**
     * Size (px) of one cell
     */
    size: 5 | 10 | 20;
  };
  /**
   * To show grid?
   */
  grid?: boolean;
}

/**
 * App with cells
 */
export const App: React.FC<AppProps> = ({
  primary = false,
  size = [100, 100],
  cell = { size: 10 },
  grid = true,
  ...props
}: AppProps) => {
  return (
    <div>
      <div>FIELD</div>
      {grid && <div>GRID</div>}
    </div>
  );
};
