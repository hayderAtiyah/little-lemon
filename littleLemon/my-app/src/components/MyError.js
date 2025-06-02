import React from "react";

export default function MyError({ children }) {
  return (
    <div
      style={{
        color: "red",
        fontSize: "20px",
        mb: 0,
        padding: "0",
        whiteSpace: "nowrap",
        margin: 0,
      }}
    >
      {children}
    </div>
  );
}
