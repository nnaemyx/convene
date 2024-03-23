
import NavBar from "../../NavBar";
import styles from "./admin.module.css"
import { useState, useEffect } from "react"
import { BsImages } from "react-icons/bs";
import { FaLink } from "react-icons/fa";




const Admin = () =>{
   const [posts, setPosts] = useState([]);
   const [draft, setDraft] = useState({title: '', content: '', image: null, link: ''});


    const handleSubmit = (e) =>{
        e?.preventDefault();
        console.log('Draft posted:', draft);
        // clear the draft
        setDraft({title: '', content: '', image: null, link: ''});
    }
    // Function to handle file input change
    const handleFileChange = (e) =>{
        setDraft({...draft, image: e.target.files[0]})
    }
    // Function to handle input change for title and content
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDraft({ ...draft, [name]: value });
    }
    
    useEffect(() => {
    const fetchedPosts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    ];
    setPosts(fetchedPosts);
}, []);
 return (
  <>
    <NavBar/>
    <div className={styles.adminContainer}>
      <h1>Create Events</h1>
      <form onSubmit={handleSubmit} className={styles.adminForm}>
      <div className={styles.tags}>
        <>
          <span className={styles.tag}>
          <BsImages />
          <input type="file" accept="image/*" onChange={handleFileChange} style={{display:"none"}}/>
          <label htmlFor="">Image</label>
          </span>
        </>
        <>
          <span className={styles.tag}>
          <FaLink/>
          <input type="text" name="link" value={draft.link} onChange={handleFileChange} style={{display:"none"}}/>
          <label htmlFor="">Link</label>
          </span>
        </>
      </div>
      <input type="text" name="title" value={draft.title} onChange={handleChange} placeholder="Title" className={styles.adminTitle}/>
      <textarea name="content" value={draft.content} onChange={handleChange} rows="6" cols="65"/>
      <div className={styles.buttons}>
        <button type="submit" className={styles.btn1}>Save Draft</button>
        <button type="submit" className={styles.btn2}>Post</button>
      </div>
    </form>
  </div>
  </>
  // export const Post = () =>{
  //   return (
  //     <ul>
  //     {posts.map(post => (
  //       <li key={post.id}>
  //         <h3>{post.title}</h3>
  //         <p>{post.content}</p>
  //       </li>
  //     ))}
  //   </ul>
  //   )
  // }
)
}

export default Admin;