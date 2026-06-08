export default function BrowserFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#b9925d] bg-[#fbf6ed] shadow-[0_20px_60px_rgba(93,65,32,0.12)]">
      <div className="flex items-center gap-2 border-b border-[#e3d1b7] bg-[#f7ead8] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e96d5b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e7b85d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6fbf73]" />

        <div className="ml-3 flex-1 rounded-md border border-[#e2c9a5] bg-[#fffaf2] px-3 py-1 text-[10px] text-[#9a7b57]">
          radiityy.vercel.app
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}