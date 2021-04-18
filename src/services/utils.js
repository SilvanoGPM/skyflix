export const API_KEY = '7d390f68b5f787ba27f351f77238ee89';
export const API_BASE = 'https://api.themoviedb.org/3';
export const DEFAULT_PARAMETERS = `api_key=${API_KEY}&language=pt-BR`;

export const normalizeEndpoint = endpoint => (
  endpoint.startsWith('/')
    ? endpoint.replace('/', '')
    : endpoint
);

export const normalizeParameters = endpoint => {
  const startOfParameters = endpoint.indexOf('?');
  const symbol = startOfParameters > 0 ? '&' : '?';
  return symbol + DEFAULT_PARAMETERS;
}

export const getURL = endpoint => {
  const endpointNormalized = normalizeEndpoint(endpoint);
  const parameters = normalizeParameters(endpoint);

  return `${API_BASE}/${endpointNormalized}${parameters}`;
}
