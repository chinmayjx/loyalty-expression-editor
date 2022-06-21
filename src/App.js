import { useState } from "react";
import "./App.css";

const images = {
  cross: require("./images/cross.svg").default,
  trash: require("./images/trash.png"),
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

const anchoredStyle = {
  fontSize: "0.9rem",
  position: "absolute",
  top: "0",
  transform: "translate(0, calc(-50% - 0.1rem))",
  backgroundColor: "white",
  padding: "0 0.4rem",
};

function ConditionEditBlock() {
  return (
    <div className="main-flex-item">
      <div className="block-title-box">Condition 1</div>
      <div style={{ padding: "0.5rem 1rem" }}>
        <div
          style={{
            fontWeight: "var(--w6)",
            marginBottom: "1rem",
            fontSize: "0.93rem",
          }}
        >
          Expression
        </div>
        <div
          style={{
            borderTop: "var(--border-1)",
            borderRight: "var(--border-1)",
            borderBottom: "var(--border-1)",
            borderLeft: "3px solid var(--blue)",
            borderRadius: "3px",
            padding: "1rem",
            width: "40rem",
            position: "relative",
          }}
        >
          <div
            style={{
              fontWeight: "var(--w6)",
              color: "#666",
              left: "1rem",
              ...anchoredStyle,
            }}
          >
            Customer who satisfies{" "}
            <span
              style={{
                backgroundColor: "var(--blue)",
                color: "white",
                padding: "0.05rem 0.4rem",
                borderRadius: "999px",
                fontSize: "0.78rem",
                margin: "0 0.1rem",
              }}
            >
              ALL
            </span>{" "}
            conditions
          </div>
          <div
            style={{
              fontWeight: "var(--w6)",
              color: "var(--blue)",
              right: "3rem",
              ...anchoredStyle,
            }}
          >
            Switch to advanced editor
          </div>
          <img
            src={images.trash}
            alt=""
            style={{
              right: "1rem",
              ...anchoredStyle,
              outline: '0.2rem solid white',
              boxSizing: "content-box",
              borderRadius: '999px',
              padding: "0.25rem",
              height: "0.85rem",
              backgroundColor: "var(--bg-red)",
              transform: 'translate(0, calc(-50% - 0.05rem))',
            }}
          />
        </div>
      </div>
    </div>
  );
}
