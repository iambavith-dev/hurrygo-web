import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import { getMessaging } from "firebase-admin/messaging";

const serviceAccount:any = {
  "type": "service_account",
      "project_id": "hurrygo-2750e",
      "private_key_id": "bd63b5dc2970b1261318e20deb805f94dcd3e2ed",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMGRMzo8WMMBD4\ng8nxsCZ4rRjN2mJqKvZrU4SR9UflItUtNunjjdtw0nZPazYpWFuxUvQg8BGPil4l\ntlCxwhSc0kbcjd+QJUJ/FPo2HdBPZL7jd+dxHptlU7IT809Lr0utT68I4RDtgHSA\n+JuVbna8t4fpvVV0WiKA2ut68kH1xdlu6Z+I7MJMpW0e556NMXq921xgJXQE+Jv1\nfspWUaN7Mxc7BRcAy6vBNW9xk4BLovqdbzPDTE+cuoUY2WzXsoShYj/qGsAJsEec\nQaO3+dyc1CwFnELhZMKbOLL9cECr+mp4119HPCGhbhdRv4OjV66oYdAawIOcXrU4\nk2LRPwMzAgMBAAECggEAB70FpjDAmzhGqcguvnasJr7YEL9bJDpdHc73WPoLT/aa\nTZIQ8SXzmttSorU7wvqM03QujxclxfhRlILNRsgciaD2uy235cUROInzk1yzBWea\nTeaXGbS24J3OmS9ho3V8huWIC0FOp9VLKt6s4NAPjsfd+TCgDlQijcR/JtS2R9q3\nV3XqyqrSsShAXQubSf0/GNc3cJjeF8elHVrU29iqItA7eSrNkzekeJdXr0fbjZ6a\nUvyPcn+w1+JgHOeYLz7KJhSMhVRNXpWrRGfy3+wRfSlKVEFr4C0lyCaOpoKe5H51\n6Z2QaJiEWuvoHz0gJ/9Tkv5LALzKgf70YBpSoNuPoQKBgQD0Qfniyfx6fiwKRkuD\nmvWgJr7555sCXmmllT0XTxZtkbRiHGZVjM1crcp8LLOi/OMv77d7hjPhi1hbF9vw\nRItQQ7mpLkkJGjpPPNcVgOk1QC/WGxgaGkXgZyZSPQX10HwLA2bCsjK4cNySJWjK\nH+vd9PY6x9fFjABLCwLaSg9dYQKBgQDV6NyeCSOeXeQMmc1Msosj0J44Amh6RbmK\nLr3SjYE8LoSi4JreBfUaY4n3evm032W8iau5Xad/F/jAqpCu2bGPlzqq+TS8SYSU\np2iRsmi3CEmFIZMRNZhsT+NQ5V+NsQ/9v7THAxM82AI1OlvnZfmWY91BLwJNPTkQ\ndFbrI4Y1EwKBgQCRQrdYb2Uud+C7D4kTMFHJN6G1v05JP1q29aUKOqeM6+0Jt/gI\nAp+S8WwNIwyF7r0xoe9Nj8dE5/jY27yaDDmJt20vtu4KcsWgn/8Ns8d9Orn4K87O\nnzdVOCLrH41u3dkXN6OiQBW36K7UX1kNc6RzMJ5K4NRqkFMQTfEZXpf6oQKBgQDH\nyIHslAqRSY3Jewg0nvi3DYwIMa+Uq3Rbq8YcVY8jPysf2Hir7pJ6AAeGfXOky5UA\nXvBk4ySh3ii1AVi6BZYBzzO7JZ9sT5mlISnYEfIdKH9J+Q6bXxwp5P8guenhs0KF\nMzxLNwMLq498WTImz6YpIMIvtBEJRKn8RTw8xuP8wwKBgHqINQ6zruA6BhLtQ8La\npdWbfxb/9QlRXYcmxkqmbuu+8vG2fDo0eTIL0ynKMsU3NrB3tRZ+y5RJlCzJFkG6\nKk6xjonycM885jO0W1WfUDec1KsZN6r2xSK2d07+RW3fmiAmr3vagnrcXgqKG34v\niS0WDQRfh6qS3D3ghTrjkPYo\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-bl0vy@hurrygo-2750e.iam.gserviceaccount.com",
      "client_id": "102876256620387981603",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bl0vy%40hurrygo-2750e.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
}

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
}

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    getMessaging().send({
      notification: {
        title: req?.query?.title as string,
        body: req?.query?.body as string
      },
      token: req?.query?.token as any
    })
      .catch((error) => {
        console.log(error)
      })

    res.status(200).json({ name: "John Doe" });
}
