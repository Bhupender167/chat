import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chat-opal-five-97.vercel.app/');
}
