import { getURL } from './utils';

const makeRequest = async endpoint => {
  const request = await fetch(getURL(endpoint));
  return request.json();
}

export default makeRequest;
