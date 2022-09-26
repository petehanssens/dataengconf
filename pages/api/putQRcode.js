import { API } from 'aws-amplify';
import scanQRcode from '../../graphql/users/scanQRcode';

export default async (_, res) => {
  try {
    const postData = await API.graphql({ query: scanQRcode });
    res.json({ posts: postData.data.scanQRcode});
    console.log(postData);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  } 
}