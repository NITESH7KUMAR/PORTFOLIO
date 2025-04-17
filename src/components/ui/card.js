// ✅ src/components/ui/card.js
import React from "react";

export function Card({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="custom-card-content">{children}</div>;
}
