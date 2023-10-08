function ProgressBar({ title, percent }: { title: string; percent: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <p>{title}</p>
        <p>{percent}%</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-900">
        <div className="h-2.5 bg-highlight" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
