import Template from "../templates/Template"
import BaseFooter from "../organisms/layouts/BaseFooter"
import BaseHeader from "../organisms/layouts/BaseHeader"
import BaseSidebar from "../organisms/layouts/BaseSidebar"
import DashboardContent from "../organisms/contents/DashboardContent"

export default function Dashboard() {
  return (
    <Template>
      <BaseHeader />
      <BaseSidebar />
      <DashboardContent />
      <BaseFooter />
    </Template>
  )
}
