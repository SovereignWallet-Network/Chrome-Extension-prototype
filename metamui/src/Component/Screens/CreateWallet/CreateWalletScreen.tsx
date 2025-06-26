import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../utils/Routing/route";
import { useState } from "react";
import { GenerateMnemonic } from "../../bip39-mnemonic/mnemonic";

const CreateWalletScreen = () => {
    const navigate = useNavigate();

    const [wordCount, setWordCount] = useState<12 | 15 | 24>(12);
    const [mnemonic, setMnemonic] = useState<string>("");

    const handleGenerate = () => {
        const result = GenerateMnemonic(wordCount);
        setMnemonic(result);
    };

    return (
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

            <div style={styles.mnemonicBox}>
                <p style={styles.mnemonicLabel}>Your Mnemonic Phrase:</p>
                <div style={styles.mnemonicGrid}>
                    {mnemonic
                        ? mnemonic.split(" ").map((word, index) => (
                            <div key={index} style={styles.mnemonicWord}>
                                {word}
                            </div>
                        ))
                        : (
                            <div style={styles.placeholder}>
                                ...
                            </div>
                        )}
                </div>

            </div>

            <label style={styles.label}>Select the Passphrase Length:</label>
            <select
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value) as 12 | 15 | 24)}
                style={styles.dropdown}
            >
                <option value={12}>12 words</option>
                <option value={15}>15 words</option>
                <option value={24}>24 words</option>
            </select>

            <button onClick={handleGenerate} style={styles.generateButton}>
                Generate Mnemonic
            </button>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        overflow: 'hidden',
    },

    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '20px',
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
        margin: '8px 0 16px',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    mnemonicBox: {
        minHeight: '180px',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#454545',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '24px',
    },
    mnemonicLabel: {
        fontWeight: 'bold',
        fontSize: '18px',
        marginBottom: '8px',
        color: '#fff',
        marginTop:'0px'
    },
    mnemonicText: {
        fontSize: '20px',
        wordBreak: 'break-word',
        lineHeight: '1.6',
        color: '#fff',
    },
    label: {
        fontSize: '16px',
        marginBottom: '8px',
        color: 'black'
    },
    dropdown: {
        padding: '8px',
        fontSize: '16px',
        marginBottom: '16px',
        
    },
    generateButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '24px',
    },
    mnemonicGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        justifyContent: 'center',
        marginTop: '8px',
        fontSize: '16px'
    },
    placeholder: {
        color: '#ccc',
        fontSize: '18px',
        gridColumn: '1 / -1', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
    }
};

export default CreateWalletScreen;
