import React, { useState } from "react";
import { CircleChevronDown } from "lucide-react";

export const Accordion = ({ items, type = "single" }) => {
  const [openIndex, setOpenIndex] = useState(type === "single" ? null : []);

  const toggle = (index) => {
    if (type === "single") {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenIndex((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const isOpen = (index) =>
    type === "single" ? openIndex === index : openIndex.includes(index);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = isOpen(i);
        return (
          <div key={i} className="accordion-item">
            <button
              className={`accordion-header ${open ? "active" : ""}`}
              onClick={() => toggle(i)}
              aria-expanded={open}
            >
              <span className="text-size-small" style={{ color: "inherit" }}>
                {item.title}
              </span>
              <CircleChevronDown
                className={`chevron-icon ${open ? "rotate" : ""}`}
                color={open ? "white" : "#2E134D"} // purple if open, gray if closed
                strokeWidth={2}
                // size={30}
              />
            </button>
            <div className={`accordion-content ${open ? "open active" : ""}`}>
              <div className="text-size-small" style={{ padding: "2%" }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
