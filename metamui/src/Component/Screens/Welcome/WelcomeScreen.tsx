
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../utils/Routing/route";

const WelcomeScreen = () => {
    const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logo}>
        <h1 style={styles.logoText}>M</h1>
      </div>

      {/* Title */}
      <h2 style={styles.title}>Welcome to MetaMUI</h2>
      <p style={styles.subtitle}>Your secure Avalanche C-Chain wallet</p>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.primary }} onClick={() => navigate(RoutePaths.CREATE_WALLET)}>
           Create New Wallet
        </button>
        <button style={{ ...styles.button, ...styles.outlined }} onClick={() => navigate(RoutePaths.IMPORTWALLET)} >
           Import Wallet
        </button>
      </div>

      {/* Footer */}
      <p style={styles.footerText}>
        By continuing, you agree to our Terms of Service
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100dvh', 
        textAlign: 'center',
        padding: '24px',
        boxSizing: 'border-box', 
        overflow: 'hidden',      
      },
      
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#1976d2', 
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 74,
  },
  logoText: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: 0,
  },
  title: {
    margin: 0,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 0,
    marginBottom: 32,
    color: '#666',
    fontSize: '14px',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 280,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: 8,
    
  },
  primary: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
  },
  outlined: {
    backgroundColor: 'white',
    color: '#1976d2',
    border: '2px solid #1976d2',
  },
  footerText: {
    marginTop: 49,
    paddingTop: 12,
    fontSize: '12px',
    color: '#999',
  },
};

export default WelcomeScreen;