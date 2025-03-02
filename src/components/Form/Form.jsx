import "./Form.scss";
import { useState } from "react";
import axios from "axios";
import { VITE_BASE_URL } from "../../utils";

function Form({ id, getComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ name: false, comment: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty and update state
    const newErrors = {
      name: name.trim() === "",
      comment: comment.trim() === "",
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.comment) return;

    try {
      await axios.post(
        `${VITE_BASE_URL}/photos/${id}/comments`,
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
    setErrors({ name: false, comment: false });
    // Refresh comments after submitting
    getComments();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__name-label">Name</label>
      <input
        className={`form__name-input ${errors.name ? "border-red" : ""}`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form__comment-label">Comment</label>
      <textarea
        className={`form__comment-input ${errors.comment ? "border-red" : ""}`}
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
