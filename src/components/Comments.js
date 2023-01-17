import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

function Comments({comments}){
    const [showComments, setShowComments] = useState(true);

    function hideComments(){
        setShowComments(showComments => !showComments)
    }


    return(
        <div>
            <button onClick={hideComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
            <p>__________________________________________________________________________</p>
            <h2 hidden={!showComments}>{comments.length} Comments</h2>
            {comments.map((comment) => {
                return (
                <div hidden={!showComments} key={uuid()}>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Comments;