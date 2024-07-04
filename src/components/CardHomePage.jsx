import React from "react";

export default function CardHomePage({title, desc, buttonText}) {
  return (
    <div className="card">
      <div className="content">
        <h2 className="titles">{title}</h2>
        <p className="copy">{desc}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}
