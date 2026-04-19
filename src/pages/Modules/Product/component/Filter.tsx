const Filter = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-full">
          <p>Your filter content here...</p>
        </div>
      </div>
    </>
  );
};

export default Filter;