import { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import fetchMeetups from '../graphql/meetup/fetchMeetups';

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
      query: getCustomers,
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    setPosts(postData.data.getCustomers)
  }
  return posts;
}