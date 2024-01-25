const login = async (credentials) => {
    try {
        const response = await fetch("http://localhost:3001/api/auth/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
    
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
    
        const { token } = await response.json();
        localStorage.setItem('token', token);
      } catch (error) {
        throw new Error('Login failed');
      }
    };
  
  const logout = () => {
    localStorage.removeItem('token');
  };
  
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  
  export default {
    login,
    logout,
    isAuthenticated,
  };