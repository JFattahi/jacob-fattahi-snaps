import "./FilterPanel.scss";
import { useState } from "react";
import tagList from "../../data/tags.json";

function FilterPanel({ clickedTag, setClickedTag }) {
  const [isClicked, setisCliked] = useState(false);
  const tagOnClick = () => {};
  return (
    <aside className="panel">
      <h3 className="panel__title"></h3>
      <ul className={"pane__tag-list"}>
        {tagList.map((tag) => (
          <li
            onClick={() => {
              if (clickedTag === tag) {
                setClickedTag(null);
              } else {
                setClickedTag(tag);
              }
            }}
            className={`panel__tag ${
              clickedTag === tag ? "panel__tag--selected" : ""
            }`}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FilterPanel;
