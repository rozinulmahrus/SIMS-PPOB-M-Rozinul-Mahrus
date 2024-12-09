import axios from "axios";
import { getToken } from "../utils/Common";

export const getDataProfile = (callback) => {
  const API_URL = 'https://take-home-test-api.nutech-integrasi.com/profile';
  const BEARER_TOKEN = getToken();

  axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json"
      }
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  });
}

export const getDataBanner = (callback) => {
  const API_URL = 'https://take-home-test-api.nutech-integrasi.com/banner';
  const BEARER_TOKEN = getToken();

  axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json"
      }
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  });
}

export const getDataService = (callback) => {
  const API_URL = 'https://take-home-test-api.nutech-integrasi.com/services';
  const BEARER_TOKEN = getToken();

  axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json"
      }
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  });
}

export const getDataBalance = (callback) => {
  const API_URL = 'https://take-home-test-api.nutech-integrasi.com/balance';
  const BEARER_TOKEN = getToken();

  axios.get(API_URL, {
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    // console.error('Error:', error);
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  });
}

export const getDataHistoryTransaction = (param, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/transaction/history?offset=${param}&limit=5`
  const BEARER_TOKEN = getToken();

  axios.get(API_URL, {
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      'Content-Type': "application/json"
    }
  })
  .then(response => {
    callback(response.data.data)
  })
  .catch(error => {
    // console.log(error.response.data.message);
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const LoginAction = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/login`;

  axios.post(API_URL, data)
  .then(response => {
    callback(response.data)
    // console.log(response.data);
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const RegisterAction = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/registration`;

  axios.post(API_URL, data)
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const TransactionAction = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/transaction`
  const BEARER_TOKEN = getToken();

  axios.post(API_URL, data, {
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      'Content-Type': "application/json"
    }
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const TopupAction = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/topup`
  const BEARER_TOKEN = getToken();

  axios.post(API_URL, data, {
    headers: {
      'Authorization' : `Bearer ${BEARER_TOKEN}`,
      'Content-Type': "application/json"
    }
  })
  .then(response => {
    callback(response.data)
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const ProfileUpdate = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/profile/update`
  const BEARER_TOKEN = getToken();
  console.log(data);
  axios.put(API_URL, data, {
    headers: {
      'Authorization' : `Bearer ${BEARER_TOKEN}`,
      'Content-Type': "application/json"
    }
  })
  .then(response => {
    callback(response.data)
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}

export const UpdateImage = (data, callback) => {
  const API_URL = `https://take-home-test-api.nutech-integrasi.com/profile/image`
  const BEARER_TOKEN = getToken()

  axios.put(API_URL, data, {
    headers: {
      'Authorization' : `Bearer ${BEARER_TOKEN}`,
      'Content-Type': "multipart/form-data"
    }
  })
  .then(response => {
    callback(response.data)
  })
  .catch(error => {
    alert("Error : [" + error.response.data.status +"] " + error.response.data.message)
  })
}
