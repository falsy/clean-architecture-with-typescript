export default function Input({
  label,
  value,
  onChange,
  className = "",
  type = "text"
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  type?: string
}) {
  return (
    <div {...{ className }}>
      <label>
        <p className="mb-2 text-sm">{label}</p>
        <input
          name={label}
          className={"border border-gray/50 p-2 w-full"}
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}
