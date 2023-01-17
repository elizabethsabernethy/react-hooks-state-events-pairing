import React, {useState} from "react";

function Votes({upvotes, downvotes}){

    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleLikes(){
        setLikes(likes => likes+1)
    }

    function handleDislikes(){
        setDislikes(dislikes => dislikes-1)
    }

    return(
        <div>
            <button onClick={handleLikes}>{likes} 👍</button> <button onClick={handleDislikes}>{dislikes} 👎</button>
            <p></p>
        </div>
    )
}

export default Votes;