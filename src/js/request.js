import { HOST } from './constants/constants.js';

export const signupRequest = async (data) => {
  const url = `${HOST}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res;
  });

  return response;
};

export const loginRequest = async (data) => {
  const url = `${HOST}/login/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res;
  });

  return response.json();
};

export const userInfoRequest = async (token) => {
  const url = `${HOST}/members/me`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res;
  });

  return response.json();
};
