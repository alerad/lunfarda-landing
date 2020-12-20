import crypto from 'crypto'

const accessToken = '45d22b4402b74d65b5868880b1859bf5'
const secret = '763b9a4766994940b553be7cb4d82ec8'

const CreateSignature = (endpoint: string, requestType: string) => {
    const signatureString = formattedDate()+accessToken+requestType+endpoint
    return crypto.createHmac('sha1', secret)
        .update(signatureString)
        .digest('base64')
}

export const BokunRequest = (path: string) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Bokun-Date' : formattedDate(),
            'X-Bokun-AccessKey': accessToken,
            'X-Bokun-Signature': CreateSignature(path, "POST")

        },
        body: JSON.stringify({
                "page": 1,
                "pageSize": 40,
                "participants": 1
        }
        )
    };

    return fetch('https://api.bokun.is/activity.json/search', requestOptions)
        .then(response => response.json())
        .catch(x => {

            console.log("Bokun error ")
            console.log(x)
        });
}

export const AddBokunScript = () => {
    const script = document.createElement("script");

    script.src = "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=f950a4c9-7805-4ef9-ac32-a3f40fc83793";
    script.async = true;
    script.type = 'text/javascript'

    document.body.appendChild(script);
}

const formattedDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        hh = ' ' + d.getHours() + 3,
        mm = '' + d.getMinutes(),
        ss = '' + d.getSeconds(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-') + [hh,mm,ss].join(':');
}
