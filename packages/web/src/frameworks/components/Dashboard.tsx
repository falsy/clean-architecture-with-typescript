import { Fragment, useEffect, useState } from "react"
import { css } from "@emotion/react"
import { ICarrierDTO, ITrackerDTO } from "domains"
import useDependencies from "../hooks/useDependencies"
import DataMigration from "../services/DataMigration"
import ErrorMessageBox from "./ErrorMessageBox"
import AddTrackerBtn from "./AddTrackerBtn"
import TipMessage from "./TipMessage"
import Footer from "./Footer"
import TrackerBox from "./TrackerBox"

export default function Dashboard() {
  const { controllers } = useDependencies()

  const [selectBoxOpenIdx, setSelectBoxOpenIdx] = useState(0)
  const [isErrorMessage, setIsErrorMessage] = useState("")
  const [trackerList, setTrackerList] = useState<ITrackerDTO[]>([])
  const [carrierList, setCarrierList] = useState<ICarrierDTO[]>([])

  const handleClickBody = () => {
    if (selectBoxOpenIdx === 0) return
    setSelectBoxOpenIdx(0)
  }

  const handleClickClearErrorMessage = () => {
    setIsErrorMessage("")
  }

  const showErrorMessage = (message = "error") => {
    setIsErrorMessage(message)
  }

  useEffect(() => {
    getCarrierList()
  }, [])

  const getCarrierList = async () => {
    try {
      const carrier = await controllers.carrier.getCarriers()
      setCarrierList(carrier)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : error
      showErrorMessage(errorMessage)
    }
  }

  useEffect(() => {
    if (carrierList.length === 0) return
    checkDataMigration()
  }, [carrierList])

  const checkDataMigration = async () => {
    const dataMigration = new DataMigration(carrierList)
    await dataMigration.migration()
    getTrackerList()
  }

  const getTrackerList = async () => {
    try {
      const trackers = await controllers.tracker.getTrackers()
      setTrackerList(trackers)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : error
      showErrorMessage(errorMessage)
    }
  }

  return (
    <div
      onClick={handleClickBody}
      css={css`
        position: absolute;
        width: 100%;
        height: 100%;
      `}
    >
      <h1
        css={css`
          font-size: 16px;
          font-weight: normal;
          background: #fff;
          margin: 0;
          padding: 0 20px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
          color: #000;
          line-height: 49px;
          @media (prefers-color-scheme: dark) {
            background: rgb(55, 55, 55);
            color: #fff;
          }
        `}
      >
        택배 배송 조회
      </h1>
      <div
        css={css`
          padding-bottom: 40px;
        `}
      >
        {isErrorMessage && (
          <div>
            <ErrorMessageBox
              message={isErrorMessage}
              onClickClear={handleClickClearErrorMessage}
            />
          </div>
        )}
        <section
          css={css`
            padding: 20px 20px 0;
          `}
        >
          {trackerList.map((tracker, i) => {
            const findCarrier = carrierList.find(
              ({ id }) => id == tracker.carrierId
            )
            const carrier = findCarrier ? findCarrier : carrierList[0]
            return (
              <Fragment key={tracker.id}>
                <TrackerBox
                  carrierList={carrierList}
                  carrier={carrier}
                  tracker={tracker}
                  index={i}
                  selectBoxOpenIdx={selectBoxOpenIdx}
                  setSelectBoxOpenIdx={setSelectBoxOpenIdx}
                  getTrackerList={getTrackerList}
                  showErrorMessage={showErrorMessage}
                />
              </Fragment>
            )
          })}
        </section>
        <AddTrackerBtn
          getTrackerList={getTrackerList}
          showErrorMessage={showErrorMessage}
        />
        <TipMessage getTrackerList={getTrackerList} />
      </div>
      <Footer />
    </div>
  )
}
