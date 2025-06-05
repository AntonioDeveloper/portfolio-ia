import Mensagem from "@/model/Mensagem";

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
    <div className="flex flex-col">
      <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
      <div className="">{props.mensagem.texto}</div>
    </div>
  )
}

function BalaoDireito(props: BalaoMensagemProps) {
  return (
    <div className="flex flex-col items-end">
      <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
      <div className="">{props.mensagem.texto}</div>
    </div>
  )
}