import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Errore 404</p>
      <h1 className="font-display mt-6 text-6xl sm:text-8xl">Questa pagina non esiste.</h1>
      <p className="mt-6 max-w-md leading-7 text-[#73736b]">Il contenuto potrebbe essere stato spostato oppure il collegamento non è corretto.</p>
      <Button href="/" className="mt-9">Torna alla home</Button>
    </section>
  );
}
