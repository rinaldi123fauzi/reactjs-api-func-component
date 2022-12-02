// https://www.youtube.com/watch?v=QV4qKaeEf9c&ab_channel=DeaAfrizal
import './App.css';

import {getListData} from "./api"
import { useEffect, useState } from 'react';

function App() {
  const [postData, setPostData] = useState([]) //postData => isinya, setPostData => variablenya
  useEffect(() => {
    getListData().then((result) => {
      setPostData(result)
    })
  }, [])

  const PostList = () => {
    return postData.map((post, i) => {
      return (
        <div key={i}>
          <p>{post.title}</p>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rinaldi Film</h1>
        <PostList />
      </header>
    </div>
  );
}

export default App;
