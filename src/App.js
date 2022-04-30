import './App.css';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
function App() {

  //const buttonText  ='Click Here';
  const buttonText  ={ text:'Click Here!!'};

  const getNameButton = () => 'Click on Here';

  const getTime = () =>{
    return (new Date()).toLocaleTimeString()
  }
  return (
    <div className="ui container comments">
       <ApprovalCard>
        <CommentDetail 
       author="amine" 
       data="today" 
       blogtext="Nice Blog Post!!!"/>
       </ApprovalCard>

       <ApprovalCard>
      <CommentDetail
       author="karima" 
       data="yesterday" 
       blogtext="Nice Blog Post1!!!"/>
       </ApprovalCard>

       <ApprovalCard>
        <CommentDetail 
      author="ayoub" 
      data="futur"  
      blogtext="Nice Blog Post2!!!"/>
      </ApprovalCard>

    </div>
  );
}

export default App;
