"use client"

import { IconMessage, IconReload, IconSend } from "@tabler/icons-react";
import useChat from "../hooks/useChat";
import { useEffect, useRef, useState } from "react";
import BalaoMensagem from "./BalaoMensagem";

export default function JanelaChat() {

  const {mensagens, pensando, adicionarMensagem, limparMensagens} = useChat();
  const [texto, setTexto] = useState("");
  const fimChatRef = useRef<HTMLDivElement>(null);

  function enviarMensagem() {
    adicionarMensagem(texto);
    setTexto("");
  }

  useEffect(()=> {
    fimChatRef.current?.scrollIntoView({behavior: "smooth"})
  }, [mensagens]);

  return (
    <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
      <div className="flex justify-between items-center bg-white p-4">
        <h2 className="text-xl font-bold">Olá Visitante!</h2>
        <IconReload 
          size={24}
          className="text-black cursor-pointer"
          onClick={limparMensagens}
        />
      </div>

      {mensagens.length === 0 
      ? 
      (
        <div className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px]">
          <IconMessage size={230} stroke={0.2} className="text-black/30" />
          <span>Vamos conversar ?</span>
        </div>
      )
      :
      (
        <div className="flex flex-col py-2 gap-2 min-h-[300px] sm:min-h-[400px] max-h-[300px] overflow-y-scroll">
          {mensagens.map((mensagem) => {
            return <BalaoMensagem key={mensagem.id} mensagem={mensagem} />
          })}
          {pensando && (
            <div className="spinner-border"></div>
          )}
          <div ref={fimChatRef}></div>
        </div>
      )
      }
      <div className="flex items-center gap-2 p-1 rounded-full h-10 bg-white">
      <input
        type="text"
        value={texto}
        className="flex-1 bg-transparent h-8"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTexto(e.target.value)
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if(e.key === "Enter") enviarMensagem();
        }}
      />
      <button className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500" onClick={enviarMensagem}>
        <IconSend className="text-white" size={18} />
      </button>
      </div>
    </div>
  )
}