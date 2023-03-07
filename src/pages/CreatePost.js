import { useState } from 'react';
import './create-post.css'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postCollectionRef = collection(db, "posts");

    const navigave = useNavigate();

    const createPost = async () => {
        await addDoc(postCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
        navigave('/')
    }


    return (
        <div className="create-post-page">
            <div className="create-post-container">
                <h1>Create A Post</h1>
                <div className="input-group">
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="input-group"></div>
                <label>Post:</label>
                <textarea placeholder="Post..." onChange={(event) => { setPostText(event.target.value) }} />
            </div>
            <button onClick={createPost}>Submit Post</button>
        </div>
    )
}
export default CreatePost;