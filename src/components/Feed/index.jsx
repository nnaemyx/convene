import { useState } from "react";
import styles from './feed.module.css'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { MdOutlineTopic } from "react-icons/md";
import { TbArrowBigDownLines } from "react-icons/tb";



const Feed = () => {
  const [topics, setTopics] = useState([]);
  const [topicsCount, setTopicsCount] = useState(0);
  const [count, setCount] = useState(0);
  // Function to add a new topic
  const addTopic = (newTopic) => {
    
    function  getTimeDuration(timestamp) {
  const currentTimestamp = Date.now();
  const timeDifference = currentTimestamp - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hrs ago`;
  } else if (minutes > 0) {
    return `${minutes} mins ago`;
  } else {
    return `${seconds} secs ago`;
  }
}

const timestamp = new Date().getTime;
const duration = getTimeDuration(timestamp);
console.log(duration, 'this is the time');
setTopics([...topics, {text: newTopic, time: duration}]);
setTopicsCount(topicsCount + 1);

  };
  const handleUpvote = () => {
    setCount(count + 1);
      };
  const handleDownvote = () => {
    setCount(count - 1);
      };
  
  
  return (
    <div className={styles.feed}>
        <div className={styles.feedPost}></div>
      {/* <div> FechedPost </div> */}
      <div className={styles.topicCount}>
       <span><MdOutlineTopic /> </span> 
      <span>{topicsCount}</span>
      </div>
      {/* Render the list of Topics */}
      <div>
        {topics.map((topic, index) => (
          <div key={index}>
            {/* username & photo */}
            <p>{topic.text}</p>
            <p>{topic.time}</p>
          <div className={styles.votes}>
        <BiUpvote onClick={handleUpvote}/>
          <span>{count}</span>
        <BiDownvote onClick={handleDownvote} />
        </div>
          </div>
         ))}
      </div>
      
        {/* Component for adding new topics */}
      <AddTopic addTopic={addTopic} />
    </div>
      
      
  );
};

// Component for adding new topics
const AddTopic = ({ addTopic }) => {
  const [newTopic, setNewTopic] = useState('');
  

  

  // Handler for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTopic.trim() !== '') {
      addTopic(newTopic);
      setNewTopic('');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className={styles.feedForm}>
      <input
        type="text"
        value={newTopic}
        onChange={(e) => setNewTopic(e?.target?.value)}
        placeholder="Suggest a topic..."
      />
      <button type="submit"><TbArrowBigDownLines /></button>
    </form>
  
    </div>
  
  )
};

export default Feed;



