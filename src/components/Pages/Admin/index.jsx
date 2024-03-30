import NavBar from "../../NavBar";
import styles from "./admin.module.css"
import { useState } from "react";
import { BsImages } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

const Admin = () => {
  const [draft, setDraft] = useState({ title: '', description: '', images: null});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', draft.title);
    formData.append('description', draft.description);
    formData.append('images', draft.images);

    try {
      const response = await fetch('https://tracking-convene.onrender.com/api/v1/meetups', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to create meetup');
      }

      console.log('Meetup created:', response.data);
      // Clear the draft
      setDraft({ title: '', description: '', images: null});
    } catch (error) {
      console.error('Error creating meetup:', error);
    }
  }

  // Function to handle file input change
  const handleFileChange = (e) => {
    setDraft({ ...draft, images: e.target.files[0] });
  }

  // Function to handle input change for title and content
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraft({ ...draft, [name]: value });
  }

  return (
    <>
      <NavBar />
      <div className={styles.adminContainer}>
        <h1>Create Events</h1>
        <form onSubmit={handleSubmit} className={styles.adminForm}>
          <div className={styles.tags}>
            <span className={styles.tag}>
              <BsImages />
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <label>Image</label>
            </span>
            {/* <span className={styles.tag}>
              <FaLink />
              <input type="text" name="link" value={draft.link} onChange={handleChange} />
              <label>Link</label>
            </span> */}
          </div>
          <input type="text" name="title" value={draft.title} onChange={handleChange} placeholder="Title" className={styles.adminTitle} />
          <textarea name="description" value={draft.description} onChange={handleChange} rows="6" cols="65" />
          <div className={styles.buttons}>
            <button type="submit" className={styles.btn1}>Send</button>
            <button type="reset" className={styles.btn2}>Clear</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
