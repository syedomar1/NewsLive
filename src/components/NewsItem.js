// import React, { Component } from 'react'
import React from 'react'

const NewsItem = (props)=> {
// export class NewsItem extends Component {

  // render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{diplay:"flex",justifyContent:"flex-end",position:"absolute",right:'0',top:'0'}}>
            <span className='badge rounded-pill bg-danger'>{source}</span>
          </div>
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/12/16/600x338/istock_1702738626551_1702738626754.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className="text-danger">By {author?author:"Anonymous"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )

  // }
}

export default NewsItem
