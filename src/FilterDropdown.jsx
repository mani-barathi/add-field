import React, { useRef, useState } from "react";

function FilterDropdown(props) {
  const {} = props;
  const dropdownRef = useRef();
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [fieldType, setFieldType] = useState("");
  const [field, setField] = useState("");
  let currentComponent = null;

  const selectFieldType = (type) => {
    setFieldType(type);
    setTabIndex(1);
  };

  const selectField = (field) => {
    setField(field);
    setTabIndex(2);
  };

  if (tabIndex === 0) {
    currentComponent = (
      <>
        <button onClick={() => selectFieldType("Data Fields")}>
          Data Fields
        </button>
        <br />
        <button onClick={() => selectFieldType("System Fields")}>
          System Fields
        </button>
      </>
    );
  } else if (tabIndex === 1) {
    currentComponent = (
      <div>
        <button onClick={() => setTabIndex(0)}>
          {"<"} {fieldType}
        </button>{" "}
        <br />
        <input />
        <div>
          <button
            className="field-option"
            onClick={() => selectField("Field 1")}
          >
            Field 1
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 2")}
          >
            Field 2
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 3")}
          >
            Field 3
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 4")}
          >
            Field 4
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 5")}
          >
            Field 5
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 6")}
          >
            Field 6
          </button>
          <button
            className="field-option"
            onClick={() => selectField("Field 7")}
          >
            Field 7
          </button>
        </div>
      </div>
    );
  } else if (tabIndex === 2) {
    currentComponent = (
      <div>
        <button onClick={() => setTabIndex(1)}>
          {"<"} {field}
        </button>
        <h4>Field Configuration</h4>
        <div>
          <select></select>
        </div>
        <div>
          <input />
        </div>
        <div>
          <select></select>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="filter-button"
        ref={dropdownRef}
        onClick={() => {
          if (open) return;
          setOpen(true);
          setTabIndex(0);
        }}
        onBlur={(e) => {
          if (
            dropdownRef.current?.contains(e.relatedTarget) ||
            e.target === dropdownRef.current
          ) {
            e.preventDefault();
            e.stopPropagation();
          } else {
            setOpen(false);
          }
        }}
      >
        + Add Field
        {open && <div className="filter-dropdown">{currentComponent}</div>}
      </div>
    </div>
  );
}

export default FilterDropdown;
