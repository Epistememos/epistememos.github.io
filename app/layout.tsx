import '../styles/style.css';
import Theme from './theme';

export const metadata = {
  title: 'Youdas Yessad',
  description: 'Free will is crazzyyyy',
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
