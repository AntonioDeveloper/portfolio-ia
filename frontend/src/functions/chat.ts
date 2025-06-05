'use server'

import Mensagem from '@/model/Mensagem'

export default async function conversarAssistente(
	sessionId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = 'http://localhost:5678/webhook-test/cdb6d095-fd2d-40ef-826b-1eec3f408662'
	// const webhookUrl = process.env.CHAT_WEBHOOK

	if (!webhookUrl) return null

	const resposta = await fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			sessionId,
			message: mensagem.texto,
		}),
	})

	const msg = await resposta.json()

	return msg.resposta
}
