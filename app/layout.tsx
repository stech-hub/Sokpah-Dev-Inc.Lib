
import "./globals.css";
export const metadata = { title: "Sokpah Dev Browser", description: "Build. Learn. Solve." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
