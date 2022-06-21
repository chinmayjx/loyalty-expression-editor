import { useState } from "react";
import "./App.css";

const images = {
  cross: require("./images/cross.svg").default,
};

export default function App() {
  return (
    <div className="main">
      <div className="main-flex">
        <GroupBlock />
        <ConditionsBlock />
        <ConditionEditBlock />
      </div>
    </div>
  );
}

function GroupBlock({ list = ["Set 1", "Set 2", "Set 3", "Set 4", "Set 5"] }) {
  const [selectedLI, setSelectedLI] = useState(0);
  return (
    <div className="main-flex-item">
      <div className="block-title-box">Groups</div>
      <ul>
        {list.map((x, i) => {
          let style =
            i === selectedLI
              ? { backgroundColor: "var(--bg-blue)", color: "var(--blue)" }
              : {};
          return (
            <li
              key={i}
              style={{
                padding: "0.4rem 1.25rem",
                fontWeight: "var(--w6)",
                fontSize: "0.95rem",
                ...style,
              }}
              onClick={(e) => setSelectedLI(i)}
            >
              {x}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ConditionsBlock({
  list = [
    ["Condition 1", "Current Customer"],
    ["Condition 2", "true"],
  ],
}) {
  const [selectedLI, setSelectedLI] = useState(0);
  return (
    <div className="main-flex-item">
      <div className="block-title-box">All Conditions</div>
      <ul>
        {list.map((x, i) => {
          return (
            <li
              key={i}
              style={{
                padding: "0.5rem 1.25rem",
                backgroundColor:
                  selectedLI === i ? "var(--bg-blue)" : "inherit",
              }}
              onClick={(e) => setSelectedLI(i)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontWeight: "var(--w6)",
                    color: selectedLI === i ? "var(--blue)" : "inherit",
                  }}
                >
                  {x[0]}
                </div>
                <img
                  src={images.cross}
                  alt=""
                  style={{
                    marginLeft: "auto",
                    width: "0.55rem",
                  }}
                />
              </div>
              <div style={{ fontSize: "0.9rem" }}>{x[1]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ConditionEditBlock() {
  return (
    <div className="main-flex-item">
      <div className="block-title-box">Condition 1</div>
    </div>
  );
}
