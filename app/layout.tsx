import '../styles/style.css';
import Theme from './theme';

export const metadata = {
  title: 'Youdas Yessad',
  description: '"Is life not a thousand times too short for us to bore ourselves?" \n -Friedrich Nietzsche',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className='dark:bg-sand-900'>
      <Theme>
      {children}
      </Theme>
      </body>
      
    </html>
  )
}
