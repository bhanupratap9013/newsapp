import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

const News = (props) =>  {
   
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0); 
    const [progress, setProgress] = useState(0);
    
    const fetchData = async () => {
        setLoading(true);
        document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1) + " Headlines";
        try {
            setProgress(30);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=ceb31121f2bb48179582393dcf445475`);
            const jsonData = await response.json();
            setProgress(50);

            if (jsonData.articles) {
                setArticles(articles.concat(jsonData.articles)); 
                setTotalResults(jsonData.totalResults);
                setLoading(false); 
                setProgress(100);
            } else {
                setArticles([]); 
                setTotalResults(0);
                setLoading(false);
                setProgress(100);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            setProgress(100);
        }
    };

    // Define the function correctly
    const fetchNextUsers = () => {
        setPage(page + 1);  // This will trigger a re-fetch in useEffect
    };

    useEffect(() => {
        fetchData();
        // Re-fetch data whenever the page changes
    }, [page]);

    const defaultImageUrl = "https://via.placeholder.com/150";

    return (
        <div className="container mt-5">
            <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />          
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchNextUsers}  // Correctly passing fetchNextUsers
                hasMore={articles.length !== totalResults}
                loader={<div style={{ textAlign: 'center' }}>{loading && <Spinner />}</div>}
            >
                <div className="row">
                    {articles.map((article, index) => (
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

News.defaultProps = {
    country: "us",
    pageSize: 12,
    category: "technology"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};

export default News;