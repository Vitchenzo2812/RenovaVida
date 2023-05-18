import type { AppProps } from 'next/app'
import { GoogleFonts } from 'next-google-fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
      <Component {...pageProps} />
    </>
  )
}
