import Footer from "../../templates/Footer"

export default function BaseFooter() {
  return (
    <Footer className="sticky top-full">
      <p className="p-4 px-6 text-xs text-gray-400">
        © 2025{" "}
        <a
          href="https://github.com/falsy"
          target="_blank"
          rel="noopener noreferrer"
        >
          falsy
        </a>
      </p>
    </Footer>
  )
}
