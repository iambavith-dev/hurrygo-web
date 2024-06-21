import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'

const serviceAccount = require('../../../../credentials/hurrygo-2750e-firebase-adminsdk-bl0vy-373608a275.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    await admin.messaging().send({
        notification: {
            title: req?.query?.title as string,
            body: req?.query?.body as string
        },
        token: req?.query?.token as string
    })

    res.status(200).json({ name: "John Doe" });
}
