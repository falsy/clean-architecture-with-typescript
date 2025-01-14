export default function Button({
  onClick,
  text
}: {
  onClick?: () => void
  text: string
}) {
  return (
    <button
      name={text}
      className={
        "cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
      }
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  )
}
