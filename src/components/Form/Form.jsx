import "./Form.scss";
import {  useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../utils";

function Form({ id, getComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent empty submissions
    if (!name.trim() || !comment.trim()) return;


    try {

        await axios.post(
        `${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`,
        {
          name,
          comment,
        }
      );
    } catch (error) {
        console.log(error);
    }

    setName("");
    setComment("");
    // Refresh comments after submitting
    getComments();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__name-label">Name</label>
      <input
        className="form__name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form__comment-label">Comment</label>
      <textarea
        className="form__comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit" className="form__submit-btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
