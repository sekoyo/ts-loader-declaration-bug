import React from "react";

import "./component.scss";

interface Props {
  message: string;
}

export function MyComponent({ message }: Props) {
  return <div>{message}</div>;
}
