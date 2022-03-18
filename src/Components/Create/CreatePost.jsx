import React, { useEffect, useState } from 'react'
import './createpost.css'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
  let navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')

  const postCollectionRef = collection(db, 'posts')

  const submitPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate])

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title</label>
          <input
            placeholder="Title..."
            type="text"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className="inputGp">
          <label>Write Post</label>
          <textarea
            placeholder="What's on your mind..."
            type="text"
            onChange={(e) => {
              setPostText(e.target.value)
            }}
          />
        </div>
        <button onClick={submitPost}>Post</button>
      </div>
    </div>
  )
}

export default CreatePost
