import { google } from "googleapis";
import fs from "fs";

const file = '../../../../control-357801-3bdb0fd93159.json';

const auth = new google.auth.JWT({
  email: "christiancesar@control-357801.iam.gserviceaccount.com",
  key: "48fb1581468f2bd76bbbe334369b141f26f0ca81",
  scopes: [
    'https://www.googleapis.com/auth/drive'
  ]
})

const drive = google.drive({
  version: "v3",
  auth
})

export async function getFilesDrive() {
  const response = await drive.files.list({},);

  console.log(JSON.stringify(response, null, 2))
}
