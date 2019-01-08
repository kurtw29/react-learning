import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Sam" 
                    timeAgo= "Today at 4:45pm" 
                    post= "Hello" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Alex" 
                    timeAgo= "Today at 10:05pm" 
                    post= "Good night!" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Taylor" 
                    timeAgo= "Yesterday at 1:00am" 
                    post= "Good morning!" 
                    avatar= {faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);