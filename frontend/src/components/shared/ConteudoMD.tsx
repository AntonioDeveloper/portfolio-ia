import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

export interface ConteduoMDProps {
  markdown: string
}

export default function ConteudoMD(props: ConteduoMDProps) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false} >
      {props.markdown}
    </Markdown>
  )
}