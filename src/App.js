import { useState } from "react";
import "./App.css";

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
            i === selectedLI ? { backgroundColor: "var(--bg-blue)", color: 'var(--blue)' } : {};
          return (
            <li
              key={i}
              style={{ padding: "0.4rem 1.25rem", fontWeight: 'var(--w6)', ...style }}
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

function ConditionsBlock() {
  return (
    <div className="main-flex-item">
      <div className="block-title-box">All Conditions</div>
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
