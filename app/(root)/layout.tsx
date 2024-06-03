import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="">
        <LeftSidebar />
        {children}
        <div className="text-white-1">right</div>
      </main>
    </div>
  );
}
