import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: 800,
          color: '#f97316',
          marginBottom: '10px',
          textShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '15px' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#a1a1aa', maxWidth: '400px', marginBottom: '30px', lineHeight: '1.7' }}>
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="btn"
        style={{
          padding: '14px 32px',
          fontSize: '1rem',
          textDecoration: 'none',
          borderRadius: '8px',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
