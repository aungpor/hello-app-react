import axios from "axios";
// import https from 'https';

// const instance = axios.create({
//     httpsAgent: new https.Agent({  
//       rejectUnauthorized: false
//     })
//   });

const url = "https://uatapi-patois.pt.co.th/api/shop/content/getAllTag?active=1&pageNumber=1&rowsOfPage=100"

const GetAllData = async () => {
    return await axios.get(url).then(res => {
        // console.log("getData res", res);
        console.log(res?.data?.data);
        return res?.data?.data;
    }).catch((err) => {
        console.log(err);
        catchError(err, null, "getData");
        return [];
    });
}

function catchError(error, path, func) {
    try {

        return;
    } catch (err) {
        console.error("Response catchError : ", error);
        console.log(err);
        return;
    }
}

export default GetAllData