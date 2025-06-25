

const LoadingScreen = () => {
    
    return (
        <div style={styles.container}>
          <div style={styles.spinner}></div>
          <p style={styles.text}>Loading wallet...</p>
        </div>
      );
    };
    
    const styles: { [key: string]: React.CSSProperties } = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f5f5f5',
      },
      spinner: {
        width: 48,
        height: 48,
        border: '5px solid rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #1976d2', // Blue accent
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: 16,
      },
      text: {
        fontSize: '14px',
        color: '#666',
      },
    };
    
    // Keyframes for the spinner animation
    const styleSheet = document.styleSheets[0];
    const keyframes =
      `@keyframes spin {
         0% { transform: rotate(0deg); }
         100% { transform: rotate(360deg); }
       }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    export default LoadingScreen;