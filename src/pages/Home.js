import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from "../firebase-config";
import './home.css'
function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };
    
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
    }, [deletePost]);

    return (
        isAuth && auth.currentUser.uid && 
            <div className="home-page">
            {postLists.map((post) => {
                return (
                    <div className="post">
                        <div className="post-header">
                            <div className="title">
                                <h1> {post.title}</h1>
                            </div>
                            <div className="delete-post">
                                {isAuth && post.author.id === auth.currentUser.uid && (
                                    <button
                                        onClick={() => {
                                            deletePost(post.id);
                                        }}
                                    >
                                        {" "}
                                        &#128465;
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="post-text-container"> {post.postText} </div>
                        <h3>@{post.author.name}</h3>
                    </div>
                );
            })}
        </div>
        
    );
}

export default Home;