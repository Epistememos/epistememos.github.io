import '../styles/style.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
