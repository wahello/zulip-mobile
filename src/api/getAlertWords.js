/* @flow */
import type { Auth } from '../types';
import { apiGet } from './apiFetch';

export default async (auth: Auth) => apiGet(auth, 'users/me/alert_words', res => res.alert_words);
