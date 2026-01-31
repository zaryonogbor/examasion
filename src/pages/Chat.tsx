import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Send, Sparkles } from 'lucide-react';
import styles from './Chat.module.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hello Zaryon! I've analyzed your recent documents. I can help clarify anything from your Psychology or Calculus notes. What's on your mind?", sender: 'ai' }
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
                text: "Based on 'Advanced Calculus Notes', the fundamental theorem of line integrals relates a line integral through a vector field to the values of its scalar potential at the endpoints of the curve. Would you like an example?",
                sender: 'ai'
            }]);
        }, 1500);
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messageList}>
                <div className={styles.notice}>
                    <Sparkles size={14} style={{ marginRight: '6px' }} />
                    AI Assistant is leveraging your specific study context
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
                    className={styles.premiumInput}
                    placeholder="Ask anything about your study materials..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                    className={styles.sendBtn}
                    onClick={handleSend}
                    leftIcon={<Send size={18} />}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};
