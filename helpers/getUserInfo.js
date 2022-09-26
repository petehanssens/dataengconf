import { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import getUserInfo from '../graphql/users/getUserInfo';

export default function fetchTableData() {
  const [posts, setPosts] = useState([]);
  const [attributes, setAttributes] = useState({});
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const { attributes, username } = await Auth.currentAuthenticatedUser()
    setAttributes(attributes)
    setAttributes({...attributes,username})
    const postData = await API.graphql({
      query: getUserInfo,
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    setPosts(postData.data.getUserInfo)
    console.log('posts',posts)
  }
  return posts;
}