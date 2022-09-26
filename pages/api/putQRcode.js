import { API } from 'aws-amplify';
import scanQRCode from '../../graphql/users/scanQRCode';

export default async (scanData, res) => {
    console.log("putQRcode:", scanData.text)
    try {
        const postData = await API.graphql({
            query: scanQRCode,
            variables: {
                qr_code: scanData.text
            }
        });
        console.log(postData)
    } catch (err) {
        console.log(err);
    }
}