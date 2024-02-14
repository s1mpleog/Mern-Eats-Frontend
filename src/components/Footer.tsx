export default function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          MernEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </footer>
  );
}
