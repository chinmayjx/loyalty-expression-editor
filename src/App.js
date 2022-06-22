import { useState } from "react";
import "./App.css";
import { Plus } from "./Svg";

const images = {
  cross: require("./images/cross.svg").default,
  plus: require("./images/plus.svg").default,
  ten_plus: require("./images/10-plus.svg").default,
  thunderbolt: require("./images/thunderbolt.svg").default,
  downChevron: require("./images/down-chevron.svg").default,

  trash: require("./images/trash.png"),
};

export default function App() {
  return (
    <div className="main">
      <div className="main-flex">
        <GroupBlock />
        <ConditionsBlock />
        <ConditionEditBlock />
        <AddConditionList />
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
              <div style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                {x[1]}
              </div>
            </li>
          );
        })}
      </ul>
      <PlusButton
        txt="Condition"
        border={true}
        style={{
          marginTop: "0.5rem",
          position: "absolute",
          bottom: "1rem",
          left: "1.25rem",
        }}
      />
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
  const [whenExpressionIs, setWhenExpressionIs] = useState(true);
  return (
    <div className="main-flex-item">
      <div className="block-title-box">Condition 1</div>
      <div
        style={{
          padding: "0.5rem 1.25rem 4rem 1.25rem",
          fontSize: "0.9rem",
          position: "relative",
        }}
      >
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
            borderLeft: "4px solid var(--blue)",
            borderRadius: "3px",
            padding: "1rem",
            minWidth: "40rem",
            position: "relative",
          }}
        >
          <div
            style={{
              fontWeight: "var(--w6)",
              color: "#568",
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
              outline: "0.2rem solid white",
              boxSizing: "content-box",
              borderRadius: "999px",
              padding: "0.25rem",
              height: "0.85rem",
              backgroundColor: "var(--bg-red)",
              transform: "translate(0, calc(-50% - 0.05rem))",
              cursor: "pointer",
            }}
          />
          <PlusButton txt={"Add condition"} />
        </div>
        <div
          style={{
            fontWeight: "var(--w6)",
            backgroundColor: "var(--gray)",
            padding: "0.35rem 1rem",
            fontSize: "0.9rem",
            margin: "1rem 0",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
          }}
        >
          When
          <img
            src={images.cross}
            alt=""
            style={{ width: "0.75rem", marginLeft: "auto", cursor: "pointer" }}
          />
        </div>
        <div style={{ fontSize: "0.85rem", margin: "1rem 0" }}>
          Expression is{" "}
          <span
            className="gray-select-btn"
            data-selected={whenExpressionIs ? "true" : "false"}
            style={{ marginLeft: "0.25rem" }}
            onClick={(e) => setWhenExpressionIs(!whenExpressionIs)}
          >
            True
          </span>
          <span
            className="gray-select-btn"
            data-selected={!whenExpressionIs ? "true" : "false"}
            style={{ marginLeft: "0.35rem" }}
            onClick={(e) => setWhenExpressionIs(!whenExpressionIs)}
          >
            False
          </span>
        </div>
        <div
          style={{
            border: "1.5px solid #000000dd",
            borderRadius: "3px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            fontSize: "0.85rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 1rem",
              backgroundColor: "var(--gray)",
              fontWeight: "var(--w6)",
            }}
          >
            <img
              src={images.ten_plus}
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginRight: "0.5rem",
              }}
              alt=""
            />
            Allocate Points
          </div>
          <span style={{ marginLeft: "0.75rem" }}>100% Points Allocation</span>
          <img
            src={images.cross}
            alt=""
            style={{
              width: "0.75rem",
              height: "0.75rem",
              marginLeft: "auto",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          />
        </div>
        <PlusButton
          txt="Add action"
          border={true}
          style={{ marginTop: "1rem" }}
        />
        <PlusButton
          txt="When"
          border={true}
          style={{
            marginTop: "0.5rem",
            position: "absolute",
            bottom: "1rem",
            left: "1.25rem",
          }}
        />
      </div>
    </div>
  );
}

function PlusButton({ txt, border, style }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "0.9rem",
        fontWeight: "var(--w6)",
        color: "var(--blue)",
        padding: "0.3rem 0.5rem",
        borderRadius: "5px",
        border: border ? "1.5px solid var(--blue)" : "",
        backgroundColor: !border ? "#eeeeffaa" : "white",
        ...style,
      }}
    >
      <Plus
        fill="var(--blue)"
        style={{
          width: "0.7rem",
          height: "0.7rem",
          marginRight: "0.4rem",
          // transform: "translate(0,-0.01rem)",
        }}
      />
      {txt}
    </button>
  );
}

const Profiles = {
  Customer: ["numberOfTxns", "SlabName", "firstname"],
  Transaction: ["value", "totalQty", "date", "basketIncludes"],
};

function AddConditionList() {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%,-50%)",
        boxShadow: "0 2px 5px #22223344",
        minWidth: "15rem",
      }}
    >
      {Object.entries(Profiles).map(([k, v]) => {
        return (
          <div
            key={k}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            <svg
              width="50"
              height="50"
              version="1.1"
              viewBox="0 0 13.229 13.229"
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.5rem",
                backgroundColor: "var(--gray)",
                padding: "0.3rem",
                boxSizing: "content-box",
                maskImage: "url(./squicircle.svg)",
                maskPosition: "center",
                maskSize: "contain",

                webkitMaskImage: "url(./squicircle.svg)",
                webkitMaskPosition: "center",
                webkitMaskSize: "contain",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(.13464 0 0 .13464 -8.4474 -11.423)">
                <path
                  d="m83.85 134.38 36.711-46.884c0.60326-0.77044 4.0596-1.0332 3.6481 1.2114l-6.1077 33.321 19.105-0.1748c2.1154-0.0194 4.7246 0.73647 2.9656 3.3727l-36.012 53.972c-1.3432 2.0131-4.8985 2.9921-4.2699-0.62952l7.0362-40.538-21.616-0.30317c-1.2172-0.0171-3.621-0.58789-1.4603-3.3473z"
                  fill="none"
                  stroke="#21252b"
                  stroke-width="8"
                />
              </g>
            </svg>
            <span>{k}</span>
            <img
              src={images.downChevron}
              alt=""
              style={{ height: "0.4rem", marginLeft: "auto" }}
            />
          </div>
        );
      })}
    </div>
  );
}
