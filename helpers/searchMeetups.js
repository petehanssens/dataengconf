import { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import searchMeetups from '../graphql/meetup/searchMeetups';

export default function MeetupData(queryString) {
  const [meetups, setMeetups] = useState([]);
  const [attributes, setAttributes] = useState({});
  useEffect(() => {
    searchmeetups()
  }, [])
  async function searchmeetups() {
    const { attributes, username } = await Auth.currentAuthenticatedUser()
    setAttributes(attributes)
    setAttributes({...attributes,username})
    const meetupData = await API.graphql({
      query: searchMeetups,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { queryString: queryString }
    })
    setMeetups(meetupData.data.fetchMeetupInfo)
  }
  return meetups;
}