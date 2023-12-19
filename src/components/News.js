import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize: 12,
    category: "General",

  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
  }

  capitalize = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
      super(props);
      // console.log("Hello I am a constructor from news component");
      this.state = {
          articles: [],
          loading: false,
          page:1
      }
      document.title = `${this.capitalize(this.props.category)} - NewsLive`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=020daf3901ef4ae68c63375780cc0313&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      // console.log(parsedData);
      this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
      })
  }

    async componentDidMount(){
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=020daf3901ef4ae68c63375780cc0313&page=1&pagesize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      // this.setState({articles: parsedData.articles, 
      // totalResults:parsedData.totalResults,
      // loading:false
      // })
      this.updateNews();
    }

    handlePrevClick =async() =>{
      // console.log("Previous")
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=020daf3901ef4ae68c63375780cc0313&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      // this.setState({
      //   page: this.state.page -1,
      //   articles : parsedData.articles,
      //   loading:false
      // })
      this.setState({page:this.state.page-1});
      this.updateNews();
    }

    handleNextClick =async () =>{
      // if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))){
      //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=020daf3901ef4ae68c63375780cc0313&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      //   this.setState({loading:true});
      //   let data = await fetch(url);
      //   let parsedData = await data.json()
      //   console.log(parsedData);
      //   this.setState({
      //     page: this.state.page +1,
      //     articles : parsedData.articles,
      //     loading:false
      //   })
      // }
      this.setState({page: this.state.page+1});
      this.updateNews();
    }

  render() {
    // console.log("Render")
    return (
      <div className='container my-3'>
        <h1 className='text-center my-4'>NewsLive - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  {/* <NewsItem title={element.title?element.title.slice(0,46):""} description={element.description?element.description.slice(0,62):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> */}
              </div>
        })}
          </div>
          <div>
            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
          </div>
      </div>
    )
  }
}

export default News
