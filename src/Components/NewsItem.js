import React, { Component } from 'react';

export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("This is the console log value");
    }

    render() {
        let {title,description, imageUrl, url} = this.props;

        return (
        <div className="container mt-5">
            <div className="card" style={{ width: '18rem', height: "400px", overflow: 'hidden'}}>
                <img src={imageUrl} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary btn-sm">See Full Story</a>
                </div>
            </div>
        </div>
        );
    }
}   
