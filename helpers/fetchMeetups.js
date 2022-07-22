import { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import fetchMeetups from '../graphql/meetup/fetchMeetups';

export default function MeetupData(city) {
  const [meetups, setMeetups] = useState([]);
  const [attributes, setAttributes] = useState({});
  useEffect(() => {
    fetchmeetups()
  }, [])
  async function fetchmeetups() {
    const { attributes, username } = await Auth.currentAuthenticatedUser()
    setAttributes(attributes)
    setAttributes({...attributes,username})
    const meetupData = await API.graphql({
      query: fetchMeetups,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { city: city }
    })
    setMeetups(meetupData.data.fetchMeetupInfo)
  }
  return meetups;
}