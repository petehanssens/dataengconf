import { API } from 'aws-amplify';
import getUserInfo from '../../graphql/users/getUserInfo';

export default async (_, res) => {
  try {
    const postData = await API.graphql({ query: getUserInfo });
    res.json({ posts: postData.data.getUserInfo});
    console.log(postData);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  } 
  
}