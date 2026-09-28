
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-amber-500 mb-3">MangoLib</h3>
          <p className="text-sm leading-relaxed">
            Digitizing the traditional library experience with modern web development tools. Simple, accessible, and fast.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">GitHub Repository</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">LinkedIn Page</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">Twitter / X</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@mangolib.com</p>
          <p className="text-sm">Location: New York, USA</p>
        </div>

      </div>
      <div className="text-center text-xs text-slate-500 mt-10 border-t border-slate-900 pt-6">
        © {new Date().getFullYear()} MangoLib Platform. All rights reserved.
      </div>
    </footer>
  );
}
