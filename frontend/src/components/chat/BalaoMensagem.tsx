import Mensagem from "@/model/Mensagem";
import ConteudoMD from "../shared/ConteudoMD";
import { IconMessageChatbot } from '@tabler/icons-react';

export interface BalaoMensagemProps {
  mensagem: Mensagem
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
  return props.mensagem.lado === "esquerdo" ? (
    <BalaoEsquerdo {...props} />
  ) : (
    <BalaoDireito {...props} />
  )
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
  return (
    <div className="flex gap-4">
      <IconMessageChatbot stroke={2} />
      <div className="flex flex-col">
        <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded">
          <ConteudoMD markdown={props.mensagem.texto} />
        </div>
      </div>
    </div>
  )
}

function BalaoDireito(props: BalaoMensagemProps) {
  return (
    <div className="flex flex-col items-end">
      <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
      <div className="bg-red-700 text-white px-5 py-3 rounded-l-3xl sm:w-auto">{props.mensagem.texto}</div>
    </div>
  )
}