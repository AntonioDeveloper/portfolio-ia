'use server'

import Mensagem from '@/model/Mensagem'

export default async function conversarAssistente(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = 'http://3.138.235.98:5678/webhook/assistente-pessoal'

	if (!webhookUrl) return null

	const resposta = await fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			chatId,
			mensagem: mensagem.texto,
		}),
	})

	const msg = await resposta.json()

	return msg
}
