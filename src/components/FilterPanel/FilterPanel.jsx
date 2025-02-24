import "./FilterPanel.scss";
import { useState, useEffect } from "react";
// import tagList from "../../data/tags.json";
import { BASE_URL, API_KEY } from "../../utils";
import axios from "axios";

function FilterPanel({ clickedTag, setClickedTag }) {
  const [tagList, setTagList] = useState([]);

  // get tag list from API
  async function getTagList() {
    try {
      const { data } = await axios.get(`${BASE_URL}/tags?api_key=${API_KEY}`);
      setTagList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(  () => {getTagList()}, []);


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
