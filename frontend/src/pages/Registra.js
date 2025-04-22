import React from 'react'

const Registra = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            setSuccess('Registration successful! You can now log in.');
            setError('');
            setUsername('');
            setPassword('');
            window.location.href='/Login';
        } catch (err) {
            console.error('register error:', err);
            setError('registration failed');
            setSuccess('');
          }
          
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form> 
    </div>
  )
}

export default Registra