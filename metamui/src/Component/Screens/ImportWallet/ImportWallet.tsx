import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { RoutePaths } from '../../../utils/Routing/route';

const formatSeedPhrase = (input: string) => {
    const words = input.trim().split(/\s+/);
    return words.reduce((acc, word, idx) => {
        return acc + word + ((idx + 1) % 3 === 0 ? '\n' : ' ');
    }, '').trim();
};

const ImportWallet = () => {
    const navigate = useNavigate();
    const [seedPhrase, setSeedPhrase] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const rawInput = e.target.value.replace(/\n/g, ' ');
        const formatted = formatSeedPhrase(rawInput);
        setSeedPhrase(formatted);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [seedPhrase]);

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

            <h1 style={styles.title}>Import Wallet</h1>
            <p style={styles.subtitle}>Enter your seed phrase to import your existing wallet</p>

            <div style={styles.content}>
                <textarea
                    ref={textareaRef}
                    style={styles.textarea}
                    placeholder="Enter your 12 or 24 word seed phrase..."
                    value={seedPhrase}
                    onChange={handleInput}
                />

                <button style={styles.importButton}>
                    Import Wallet
                </button>

                <button style={styles.importButton}>
                    Use Passkey
                </button>
            </div>

            <p style={styles.footerText}>
                Make sure you're in a secure environment
            </p>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        padding: '24px',
        boxSizing: 'border-box',
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '16px', // reduced from 40px
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
    subtitle: {
        marginTop: 0,
        marginBottom: 24,
        color: '#666',
        fontSize: '14px',
    },
    content: {
        width: '100%',
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    textarea: {
        padding: '12px',
        fontSize: '14px',
        border: '2px solid #ddd',
        borderRadius: 8,
        resize: 'none',
        fontFamily: 'monospace',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        minHeight: 60,
    },
    importButton: {
        padding: '12px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: 8,
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
    },
    footerText: {
        marginTop: 32,
        paddingTop: 12,
        fontSize: '12px',
        color: '#999',
    },
};

export default ImportWallet;
