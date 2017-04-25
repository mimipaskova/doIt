import React, { Component } from 'react';

class Story extends Component {

    render() {
        return (
        <div className="story-container">
            <img className="story-thumbnail img-thumbnail" src={'https://pbs.twimg.com/media/CdlFCYmXIAAGkiH.jpg'} alt="pandaaa" />
            
            <div className="story-information">
                <div className="story-title">
                    {this.props.title}
                </div>

                <div className="story-description">
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>

            <div className="story-below">
                <div>Споделена от: Иван Иванов</div>
                <div>Дата:{this.props.createdDate}</div>
            </div>
        </div>
        );
    }
}

export default Story;