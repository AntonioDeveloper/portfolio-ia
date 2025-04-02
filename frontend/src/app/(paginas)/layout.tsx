import BotaoChat from "@/components/chat/BotaoChat";
import Container from "@/components/shared/Container";

export default function Layout(props: {children: React.ReactNode}) {
  return (
    <Container className="bg-black">
      <div>
          {props.children}
          <BotaoChat />
        </div>
    </Container>
  )
}