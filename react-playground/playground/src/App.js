import React, { useState, useEffect } from "react";
import { Stomp } from "@stomp/stompjs";

const WebSocketExample = () => {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // WebSocket 연결 설정
        const socketUrl = "ws://localhost:8099/ws/alarm"; // STOMP를 사용하는 WebSocket 서버 URL
        const stompClient = Stomp.client(socketUrl);

        stompClient.connect({}, (frame) => {
            console.log("Connected: " + frame);

            // 특정 채널(예: /topic/messages) 구독
            stompClient.subscribe("/ch/1", (message) => {
                if (message.body) {
                    setMessages((prevMessages) => [...prevMessages, message.body]);
                }
            });
        });

        // 컴포넌트 언마운트 시 WebSocket 연결 해제
        return () => {
            if (stompClient) {
                stompClient.disconnect(() => {
                    console.log("Disconnected");
                });
            }
        };
    }, []);

    const sendMessage = (msg) => {
        if (stompClient && stompClient.connected) {
            // 서버로 메시지 전송
            stompClient.send("/app/chat", {}, msg); // "/app/chat"은 메시지를 처리할 엔드포인트
        }
    };

    return (
        <div>
            <h1>STOMP WebSocket Example</h1>
            <input
                type="text"
                placeholder="Enter a message"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendMessage(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
            <h2>Received Messages:</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketExample;