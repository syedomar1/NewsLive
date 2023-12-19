import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"90%", zIndex:'1'}}>{source}</span>
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/12/16/600x338/istock_1702738626551_1702738626754.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small class="text-danger">By {author?author:"Anonymous"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )

  }
}

export default NewsItem
