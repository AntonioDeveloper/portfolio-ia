import { Id } from '@core'
import useLocalStorage from './useLocalStorage'
import Mensagem from '@/model/Mensagem'
import conversarAssistente from '@/functions/chat'

export default function useChat() {
	const [chatId] = useLocalStorage<string>('chatId', Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>('mensagens', [])

	async function adicionarMensagem(texto: string) {
		const novaMensagem: Mensagem = {
			id: Id.gerar(),
			texto,
			autor: 'Visitante',
			lado: 'direito',
			icone: null,
		}

		setMensagens((msg) => [...msg, novaMensagem])

		const resposta = await conversarAssistente(chatId, novaMensagem)

		if (!resposta) return

		const mensagemResposta: Mensagem = {
			id: Id.gerar(),
			texto: resposta,
			autor: 'Assistente',
			lado: 'esquerdo',
			icone: null,
		}

		setMensagens((msg) => [...msg, mensagemResposta])
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		adicionarMensagem,
		limparMensagens,
	}
}
