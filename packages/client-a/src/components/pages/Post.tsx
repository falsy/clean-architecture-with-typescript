import Template from "../templates/Template"
import BaseFooter from "../organisms/layouts/BaseFooter"
import BaseHeader from "../organisms/layouts/BaseHeader"
import BaseSidebar from "../organisms/layouts/BaseSidebar"
import PostContent from "../organisms/contents/PostContent"

export default function Post() {
  return (
    <Template>
      <BaseHeader />
      <BaseSidebar />
      <PostContent />
      <BaseFooter />
    </Template>
  )
}
