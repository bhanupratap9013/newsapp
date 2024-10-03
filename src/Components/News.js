import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from "prop-types";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 2,
            totalResults: 0 // New state to track total articles
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

    fetchData = async () => {
        this.setState({ loading: true });
        document.title = this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1) + " HeadLines";
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=ceb31121f2bb48179582393dcf445475`);
            const jsonData = await response.json();
            
            // Check if articles exist in the response
            if (jsonData.articles) {
                this.setState({ 
                    articles: jsonData.articles, 
                    totalResults: jsonData.totalResults,
                    loading: false 
                });
            } else {
                this.setState({ 
                    articles: [], 
                    totalResults: 0,
                    loading: false 
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    };

    previousPage = () => {
        if (this.state.page > 1) {
            this.setState((prevState) => ({
                page: prevState.page - 1,
                loading: false
                
            }), this.fetchData);
        }
    };

    nextPage = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
            loading: false
        }), this.fetchData);
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const defaultImageUrl = "https://via.placeholder.com/150"; // Default image URL
        const totalPages = Math.ceil(this.state.totalResults / 12); // Calculate total pages

        return (
          <>

          
            <div style={{ textAlign: 'center' }}>
                {this.state.loading && <Spinner/>}
            </div>
            <div className="container mt-5">
              <div className="row">
                {!this.state.loading && this.state.articles.map((article, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <NewsItem 
                      title={article.title.slice(0, 40) + "...."} 
                      description={article.description ? article.description.slice(0, 80) : "No description available."} 
                      imageUrl={article.urlToImage || defaultImageUrl} // Use default image if not available
                      url={article.url}
                      author={article.author}
                      date={article.publishedAt}
                    />
                  </div>
                ))}
              </div>
        
              {/* Pagination buttons */}
              <div className="d-flex justify-content-between w-100 mt-4">
                <button 
                  className="btn btn-secondary" 
                  onClick={this.previousPage} 
                  disabled={this.state.page === 1}
                >
                  Previous Page
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={this.nextPage}
                  disabled={this.state.page >= totalPages} // Disable if on last page
                >
                  Next Page
                </button>
              </div>
            </div>        
          </>
        );        
    }
}
