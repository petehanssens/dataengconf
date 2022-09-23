import { API } from 'aws-amplify';
import getUserInfo from '../../graphql/users/getUserInfo';


export default async (req, res) => {
  try {
    const postData = await API.graphql({ query: getUserInfo });
    res.json({ posts: postData.data.getUserInfo});
  } catch (err) {
    res.json({ error: true });
  } 
}