import video from "../data/video.js";
import Header from "./Header.js";
import Details from "./Details.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title}/>
      <Details views={video.views} date={video.createdAt}/>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
