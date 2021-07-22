import Firebase from './Firebase'
import { useEffect, useState } from 'react'
import './App.css'

import AllStoriesPage from './components/AllStoriesPage';
import About from './components/About';
import StoryPage from './components/StoryPage';

import $ from 'jquery';
import './lib/jquery.pagepiling';
import './lib/jquery.pagepiling.css';

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

  // initialize pagepiling
  useEffect(() => {
    $(function() {
      $('#pagepiling').pagepiling();
    });
  })
  
  return stories ? (
<<<<<<< HEAD
      <div className="App">
        <StoryPage stories={stories} />
=======
      <div id="pagepiling" className="App">
        <div className="section">
          <About />
        </div>
        <div className="section pp-scrollable ">
          <AllStoriesPage stories={stories} />
        </div>
        <div className="section pp-scrollable">
          <StoryPage story={stories[Math.floor(Math.random() * stories.length)]} />
        </div>
>>>>>>> 802339cd0becaba155eb308881284ffc57eb3517
      </div>
    ) :
    "loading..."
}

export default App
