import { API } from 'aws-amplify';
import scanQRcode from '../../graphql/users/scanQRcode';

export default async (scanData, res) => {
    console.log("putQRcode:", scanData.text)
    try {
        const postData = await API.graphql({
            query: scanQRcode,
            variables: {
                qr_code: scanData.text
            }
        });
        console.log(postData);
    } catch (err) {
        console.log(err);
    }
}