//webpack is managing the imports.
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Let's test this.
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Fred"
          timeAgo="Yesterday at 2.31pm"
          commentText="Great work"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        author="Sonia"
        timeAgo="Yesterday at 1.14pm"
        commentText="Ricky is the best"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};


ReactDOM.render(<App/>, document.querySelector('#root'));
