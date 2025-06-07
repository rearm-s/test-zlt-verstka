import React from "react";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const crumbs = [
    { label: "Акції", href: "#" },
    { label: "Активуй -55% на прикраси з діамантами", href: "#" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",

        height: 32,
        background: "transparent",
        fontSize: 14,
        color: "#222",
        boxSizing: "border-box",
      }}
    >
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={crumb.label}>
          <a
            href={crumb.href}
            style={{
              color: idx === crumbs.length - 1 ? "#222" : "#007AFF",
              textDecoration: "none",
              fontWeight: idx === crumbs.length - 1 ? 600 : 400,
              cursor: idx === crumbs.length - 1 ? "default" : "pointer",
            }}
          >
            {crumb.label}
          </a>
          {idx < crumbs.length - 1 && (
            <ChevronRight size={16} style={{ margin: "0 4px", color: "#BDBDBD" }} />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
} 