import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "CBS News",
        "title": "GOP candidates gear up one month before Iowa caucuses",
        "description": "Former President Donald Trump extended his considerable lead in Iowa this week, according to a new poll. The state is holding the first Republican caucus in just one month. CBS News politics reporter Zak Hudak has the latest analysis.",
        "url": "https://www.cbsnews.com/video/gop-candidates-gear-up-one-month-before-iowa-caucuses/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/12/16/a2e9f192-89cb-4750-b8ff-b5a197ad29d2/thumbnail/1200x630/dd50f0852eae92faa56c8446494461a6/desantis-haley1-2532501-640x360.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
        "publishedAt": "2023-12-16T02:15:13+00:00",
        "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "",
        "title": "Video: Obama returns to White House in ad with Biden | CNN Politics",
        "description": "Former President Barack Obama returned to the White House to appear in a new advertisement for the Affordable Care Act with President Joe Biden.",
        "url": "https://www.cnn.com/videos/politics/2023/12/15/obama-returns-to-white-house-obamacare-ad-vpx.cnn",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231215172801-obama-biden-obamacare-screengrab.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-12-15T22:47:23Z",
        "content": null
        },
        {
        "source": {
        "id": "the-american-conservative",
        "name": "The American Conservative"
        },
        "author": null,
        "title": "Politics Archives - The American Conservative",
        "description": "A meeting wit the American Conservatives, where key discussions were taken. Amid the meeting, main cause put forward was to win the elections",
        "url": "https://www.theamericanconservative.com/category/politics/",
        "urlToImage":"https://tac.imgix.net/wp-content/uploads/2023/12/Screen-Shot-2023-12-14-at-1.07.24-PM-e1702577287375.png?auto=format&crop=faces%2Centropy&fit=crop&ixlib=php-3.3.1&w=1300",
        "publishedAt": "2022-07-07T21:37:27.3936289Z",
        "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza"
        },
        {
        "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
        },
        "author": null,
        "title": "Congresswoman Nita Lowey: I am proud to stand with Palestine",
        "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
        "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
        "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
        "publishedAt": "2019-11-13T04:41:00Z",
        "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
        }
        ]
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsLive - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title.slice(0,46)} description={element.description.slice(0,62)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
          </div>

      </div>
    )
  }
}

export default News
