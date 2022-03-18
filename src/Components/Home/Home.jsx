import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db, auth } from '../../firebase'
import './home.css'
import Hero from './Hero/Hero'

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([])

  const postCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  }, [postCollectionRef])

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }
  return (
    <>
      <Hero />
      <div className="homePage">
        {postList.map((post) => {
          return (
            <div className="post" key={doc.id}>
              <div className="postHeader">
                <div className="title">
                  <h2> {post.title}</h2>
                </div>
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id)
                      }}
                    >
                      {' '}
                      delete
                    </button>
                  )}
                </div>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
              <h3>@{post.author.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
