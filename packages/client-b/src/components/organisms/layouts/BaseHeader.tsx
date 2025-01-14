import Header from "../../templates/Header"
import HeaderMenu from "../../molecules/HeaderMenu"
import Logo from "../../atoms/Logo"

export default function BaseHeader() {
  return (
    <Header logo={<Logo />}>
      <HeaderMenu />
    </Header>
  )
}
