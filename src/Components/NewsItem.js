import React, { Component } from 'react';

export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("This is the console log value");
    }

    render() {
        let {title,description, imageUrl, url, author, date} = this.props;
        
        const dateString = date;
        const dateActual = new Date(dateString);
        const formattedDate = `${dateActual.getDate()} ${dateActual.toLocaleString('default', { month: 'long' })} ${dateActual.getFullYear()}`

        return (
        <div className="container mt-5">
            <div className="card" style={{ minWidth: '200px', height: "450px", overflow: "visible"}}>
                <img src={imageUrl} className="card-img-top" alt="Card image cap" style={{height: "200px", objectFit: "fit"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                            <small className="text-muted">By {author}</small>
                            <small className="text-muted">{formattedDate}</small>
                    </div>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary btn-sm">See Full Story</a>

                </div>
            </div>
        </div>
        );
    }
}   
