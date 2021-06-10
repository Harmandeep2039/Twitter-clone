import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName:'Cristiano Ronaldo',
            username:'Cristiano',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
            "https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg" />
                <input
                onChange={(e) => setTweetMessage(e.target.value)} 
                value={tweetMessage}
                placeholder="Whats happening"
                type="text"
                />
                </div>
                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox_imageInput"
                placeholder="Enter image url"
                type="text"
                />
                <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox_tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;