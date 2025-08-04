interface NumberedLabelProps {
  number: number;
  className?: string;
}

export default function NumberedLabel({ number, className = "" }: NumberedLabelProps) {
  return (
    <div className={`absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md ${className}`}>
      {number}
    </div>
  );
} 