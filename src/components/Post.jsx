function Post({user}) { 
 
  return (
    <div>
      <p>Email : {user.email}</p>
      <p>Name : {user.first_name}</p>
    </div>
  );
}

export default Post;
