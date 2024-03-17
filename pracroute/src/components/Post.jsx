import { useParams } from "react-router-dom"





const Post = () => {
  const id = useParams()
    console.log(id);
  return (
    <div>
      <p>{id.id}</p>
      
    </div>
    
  )
}

export default Post
