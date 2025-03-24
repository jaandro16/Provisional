import { fetchApi } from './api';

export const authService = {
  // Autenticación
  login: (credentials) => fetchApi('/auth/login/', {
    method: 'POST',
    body: JSON.stringify(credentials)
  }),

  logout: () => fetchApi('/auth/logout/', {
    method: 'POST'
  }),

  register: (userData) => fetchApi('/auth/register/', {
    method: 'POST',
    body: JSON.stringify(userData)
  }),

  // Perfil de usuario
  getProfile: () => fetchApi('/auth/profile/'),
  
  updateProfile: (profileData) => fetchApi('/auth/profile/', {
    method: 'PUT',
    body: JSON.stringify(profileData)
  })
};