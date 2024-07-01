export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 h-full flex bg-neutral-900">
      <>{children}</>
    </div>
  );
}
