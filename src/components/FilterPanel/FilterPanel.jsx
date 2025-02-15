import './FilterPanel.scss';
// import { useState } from "react";
import tagList from "../../data/tags.json";




function FilterPanel(){
    return (
        <aside className="panel">
            <h3 className="panel__title">

            </h3>
            <ul className="pane__tag-list">
                { tagList.map( (tag)=>(
                    <li>
                        {tag}
                    </li>

                ) ) }
            </ul>
           
        </aside>
    )

}


export default FilterPanel;