import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,  // Start from page 1
            totalResults: 0,
            progress: 0
        };
    }

    static defaultProps = {
      country: "us",
      pageSize: 12,
      category: "technology"
    };

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    };

    setProgress = (progress) => {
      this.setState({ progress });
    };  

    fetchData = async () => {
        this.setState({ loading: true });
        document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " Headlines";
        try {
            this.setProgress(30);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=ceb31121f2bb48179582393dcf445475`);
            const jsonData = await response.json();
            this.setProgress(50);
            // Append new articles to the existing ones
            if (jsonData.articles) {
                this.setState({ 
                    articles: this.state.articles.concat(jsonData.articles), 
                    totalResults: jsonData.totalResults,
                    loading: false 
                });
                this.setProgress(100);
            } else {
                this.setState({ 
                    articles: [], 
                    totalResults: 0,
                    loading: false 
                });
                this.setProgress(100);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
            this.setProgress(100);
        }
    };

    fetchNextUsers = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }), this.fetchData);
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const defaultImageUrl = "https://via.placeholder.com/150";

        return (
          <div className="container mt-5">
          <LoadingBar color="#f11946" progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)}/>          
          <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchNextUsers}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<div style={{ textAlign: 'center' }}>{this.state.loading && <Spinner />}</div>}
          >
              <div className="row">
                {this.state.articles.map((article, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <NewsItem 
                      title={article.title.slice(0, 40) + "...."} 
                      description={article.description ? article.description.slice(0, 80) : "No description available."} 
                      imageUrl={article.urlToImage || defaultImageUrl}
                      url={article.url}
                      author={article.author}
                      date={article.publishedAt}
                    />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        );
    }
}
