"use client"

import useChat from "@/components/hooks/useChat"
import { useState } from "react";

export default function Chat() {

  const {chatId, mensagens, adicionarMensagem, limparMensagens} = useChat();
  const [texto, setTexto] = useState("");

  return (
    <div className="text-white h-screen">
      <h1>Chat</h1>
      <h2>Chat ID: {chatId}</h2>
      
      <button onClick={limparMensagens}>Limpar</button>

      <ul>
        {mensagens.map((mensagem) => (
          <li key={mensagem.id} className="flex gap-2">
            <div>{mensagem.autor}: </div>
            <div>{mensagem.texto}</div>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={texto}
        className="border border-gray-700 rounded p-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTexto(e.target.value)
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if(e.key === "Enter") {
            adicionarMensagem(texto);
            setTexto("");
          }
        }}
      />
    </div>
  )
}