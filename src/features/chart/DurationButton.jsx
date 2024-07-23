function DurationButton({ children, index, selected, setSelected }) {
  return (
    <button
      className={`px-2 py-1 rounded-full ${
        selected === index ? "text-white bg-[#2d2d2d]" : ""
      }`}
      onClick={() => setSelected(index)}
    >
      {children}
    </button>
  );
}

export default DurationButton;
