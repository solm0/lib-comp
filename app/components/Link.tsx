export default function Link({url, text, blank=true}:{url: string; text:string; blank?:boolean}){
  return <a href={url} target={blank ? '_blank' : '_self'} className="underline underline-offset-4 decoration-[1px] hover:opacity-30">{text}</a>
}