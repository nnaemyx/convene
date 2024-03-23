import { AiOutlineUser } from "react-icons/ai";
import AvatarEditor from 'react-avatar-editor';
import { useState } from "react";

const Avatar = () =>{
    const [image, setImage] = useState(null);
    const [editor, setEditor] = useState(null);
    const [editedImage, setEditedImage] = useState(null);

    const handleImageChange = (e) =>{
        const file = e?.target?.files[0];
        setImage(URL.createObjectURL(file));

    }

    const handleUpload = () => {
        if (editor) {
          const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
          setEditedImage(canvasScaled);
        }
      };
      return (
        <div className="navbar">
          <div className="avatar">
            {editedImage ? (
              <img src={editedImage} alt="User Avatar" />
            ) : (
              <label htmlFor="upload-input">
                <AiOutlineUser size={40} />
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
          <div className="upload-button">
            {image && (
              <button onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
          {image && (
            <div className="avatar-editor">
              <AvatarEditor
                ref={setEditor}
                image={image}
                width={50}
                height={50}
                border={50}
                color={[255, 255, 255, 0.6]} 
                scale={1}
                borderRadius={75}
                rotate={0}
              />
            </div>
          )}
        </div>
      );


      
}


export default Avatar