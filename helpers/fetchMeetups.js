import { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import fetchMeetups from '../graphql/meetup/fetchMeetups';

export default function fetchTableData() {
  const [meetups, setMeetups] = useState([]);
  const [attributes, setAttributes] = useState({});
  useEffect(() => {
    fetchmeetups()
  }, [])
  async function fetchmeetups() {
    const { attributes, username } = await Auth.currentAuthenticatedUser()
    setAttributes(attributes)
    setAttributes({...attributes,username})
    const postData = await API.graphql({
      query: fetchMeetups,
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    setMeetups(postData.data.getCustomers)
  }
  return meetups;
}