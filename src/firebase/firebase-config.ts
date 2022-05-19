import admin, {ServiceAccount} from "firebase-admin";

import serviceAccount from "../firebase/service-account-key.json";

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

module.exports= admin