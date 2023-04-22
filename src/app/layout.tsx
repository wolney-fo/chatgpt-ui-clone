import './globals.css'

export const metadata = {
  title: 'New Chat',
  description: 'Welcome to ChatGPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#343541] text-[#ECECF1]">{children}</body>
    </html>
  );
}
