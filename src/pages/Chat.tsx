import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Send, Bot, User } from 'lucide-react';
import styles from './Chat.module.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hello! I am your research assistant. I can answer questions based on the documents you have uploaded. What would you like to know?', sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages(prev => [...prev, newMsg]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: "That's a great question. Based on 'Introduction to Psychology.pdf', structuralism is the early school of psychology that used introspection to explore the structural elements of the human mind.",
                sender: 'ai'
            }]);
        }, 1500);
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messageList}>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#e0f2fe', borderRadius: '4px', alignSelf: 'center' }}>
                    Answers are generated based only on your uploaded content.
                </div>

                {messages.map((msg) => (
                    <div key={msg.id} className={`${styles.message} ${msg.sender === 'user' ? styles.messageUser : styles.messageAi}`}>
                        <span className={styles.sender}>{msg.sender === 'user' ? 'You' : 'Assistant'}</span>
                        <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.bubbleUser : styles.bubbleAi}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
                <input
                    className="input"
                    style={{
                        flex: 1,
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                        fontFamily: 'inherit'
                    }}
                    placeholder="Ask a question about your documents..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend} leftIcon={<Send size={18} />}>Send</Button>
            </div>
        </div>
    );
};
