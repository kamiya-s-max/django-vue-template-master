import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import camelcaseKeys from 'camelcase-keys';


const _handleSuccess = response => {
  console.log(response.data);
  // すべてのJSONのキーをスネークケースからキャメルケースに変換する
  response.data = camelcaseKeys(response.data, { deep: true });
  return response;
};

class Client {
  constructor() {
    this.service = axios.create();
    this.service.interceptors.response.use(_handleSuccess);
    loadProgressBar({ showSpinner: false }, this.service);
  }

  _get(path, payload) {
    return this.service.get(path, payload);
  }

  _patch(path, payload) {
    return this.service.patch(path, payload);
  }

  _post(path, payload, config = {}) {
    return this.service.post(path, payload, config);
  }

  _put(path, payload) {
    return this.service.put(path, payload);
  }

  _delete(path) {
    return this.service.delete(path);
  }
}

import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import camelcaseKeys from 'camelcase-keys';


const _handleSuccess = response => {
  console.log(response.data);
  // すべてのJSONのキーをスネークケースからキャメルケースに変換する
  response.data = camelcaseKeys(response.data, { deep: true });
  return response;
};

class Client {
  constructor() {
    this.service = axios.create();
    this.service.interceptors.response.use(_handleSuccess);
    loadProgressBar({ showSpinner: false }, this.service);
  }

  _get(path, payload) {
    return this.service.get(path, payload);
  }

  _patch(path, payload) {
    return this.service.patch(path, payload);
  }

  _post(path, payload, config = {}) {
    return this.service.post(path, payload, config);
  }

  _put(path, payload) {
    return this.service.put(path, payload);
  }

  _delete(path) {
    return this.service.delete(path);
  }
}