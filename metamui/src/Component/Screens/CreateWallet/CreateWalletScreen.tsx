import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../utils/Routing/route";

const CreateWalletScreen = () => {

    const navigate = useNavigate();
    return(
    <div style={styles.container}>
               
               <div style={styles.header}>
                   <button 
                       style={styles.backButton} 
                       onClick={() => navigate(RoutePaths.WELCOME)}
                   >
                       ← Back
                   </button>
               </div>
   
               
               <h1 style={styles.title}>Create Your Wallet</h1>
              
           </div>
       );
   };
   
   const styles: { [key: string]: React.CSSProperties } = {
       container: {
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'flex-start',
           height: '100dvh',
           textAlign: 'center',
           padding: '24px',
           boxSizing: 'border-box',
           overflow: 'hidden',
       },
       header: {
           width: '100%',
           display: 'flex',
           justifyContent: 'flex-start',
           marginBottom: '40px',
       },
       backButton: {
           background: 'none',
           border: 'none',
           fontSize: '16px',
           color: '#1976d2',
           cursor: 'pointer',
           padding: '8px',
       },
       title: {
           margin: 0,
           marginBottom: 8,
           fontWeight: 'bold',
           fontSize: '24px',
       },
     
   };
   
   export default CreateWalletScreen;