// import React, { Component } from "react";
import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
const News =(props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  // static defaultProps = {
  //   country: "in",
  //   pageSize: 12,
  //   category: "General",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);
    // console.log("Hello I am a constructor from news component");
    // this.state = {
    //   articles: [],
    //   loading: true,
    //   page: 1,
    //   totalResults:0
    // };
  // }

  // async updateNews() {
  const updateNews = async() =>{
    // this.props.setProgress(10);  Change all this.props to props
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalize(props.category)} - NewsLive`;
    updateNews();
  },[])
  
  // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=020daf3901ef4ae68c63375780cc0313&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,
    // totalResults:parsedData.totalResults,
    // loading:false
    // })
  //   this.updateNews();
  // }

  // const handlePrevClick = async () => {
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
    // this.setState({ page: this.state.page - 1 });
    // this.updateNews();
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
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
    // this.setState({ page: this.state.page + 1 });
    // this.updateNews();
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });  1st page was repeating twice because of this
    const nextPage = page + 1; //Added it to avoid above issue
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setPage(nextPage)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    //   page: nextPage, // Updated the page state after the API call is completed to avoid 1st page repeating.
    // });
  };
  

  // render() {
    return (
      <>
        <h1 className="text-center" style={{margin:"35px 0px", marginTop:"90px"}}>
          {/* NewsLive - Top {this.capitalize(props.category)} Headlines */}
          NewsLive - Top {capitalize(props.category)} Headlines
        </h1>
        {/* {this.state.loading && <Spinner/>} */}
        {loading && <Spinner/>}
        <InfiniteScroll
          // dataLength={this.state.articles.length}
          // next={this.fetchMoreData}
          // hasMore={this.state.articles.length < this.state.totalResults}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
        <div className="row">
          {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
          {/* {this.state.articles.map((element) => { */}
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
                {/* <NewsItem title={element.title?element.title.slice(0,46):""} description={element.description?element.description.slice(0,62):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> */}
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
        /* <div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div> */
    );
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "General",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
