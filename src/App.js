import Firebase from './Firebase'
import { useEffect, useState } from 'react'
import StoryPage from './components/StoryPage'
import './App.css'
import AllStoriesPage from './components/AllStoriesPage';

function App() {
  const [stories, setStories] = useState()

  useEffect(() => {
    Firebase
        .firestore()
        .collection('stories')
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.docs){
              setStories(querySnapshot.docs.map(d => d.data()))
            }
          }
        )
  }, [])
  
  console.log(stories)
  
  return stories ? (
      <div className="App">
        <AllStoriesPage stories={stories} />
      </div>
    ) :
    "loading..."
}

export default App
