import { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { ICarrierDTO, ITrackerDTO } from "domains"
import useDependencies from "../hooks/useDependencies"
import PlusIcon from "./icons/PlusIcon"
import ArrowDownIcon from "./icons/ArrowDownIcon"
import TrackerState from "./TrackerState"
import DeleteBtn from "./DeleteBtn"
import MemoBox from "./MemoBox"
import SelectBox from "./SelectBox"
import SubmitBtn from "./SubmitBtn"

interface IProps {
  carrierList: ICarrierDTO[]
  carrier: ICarrierDTO
  tracker: ITrackerDTO
  index: number
  selectBoxOpenIdx: number
  setSelectBoxOpenIdx(selectBoxOpenIdx: number): void
  getTrackerList(): void
  showErrorMessage(): void
}

const TrackerBox = ({
  carrierList,
  carrier,
  tracker,
  index,
  selectBoxOpenIdx,
  setSelectBoxOpenIdx,
  getTrackerList,
  showErrorMessage
}: IProps) => {
  const { controllers } = useDependencies()

  const [isTrackerState, setTrackerState] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState(tracker.trackingNumber)
  const [label, setLabel] = useState(tracker.label)
  const [memos, setMemos] = useState(tracker.memos)

  useEffect(() => {
    if (memos.length !== tracker.memos.length) {
      setMemos(tracker.memos)
    }
  }, [tracker.memos])

  const handleChangeLabel = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cacheLabel = label
    const newLabel = e.target.value
    setLabel(newLabel)
    try {
      await controllers.tracker.updateLabel(tracker, newLabel)
    } catch (error) {
      showErrorMessage()
      setLabel(cacheLabel)
    }
  }

  const handleChangeTrackingNumber = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cacheNumber = trackingNumber
    const newNumber = e.target.value
    setTrackingNumber(newNumber)

    try {
      await controllers.tracker.updateTrackingNumber(tracker, newNumber)
    } catch (error) {
      showErrorMessage()
      setTrackingNumber(cacheNumber)
    }
  }

  const handleClickDeleteTracker = async (id: string) => {
    try {
      await controllers.tracker.deleteTracker(id)
      getTrackerList()
    } catch (error) {
      showErrorMessage()
    }
  }

  const handleClickOpenSelectBox = (idx: number) => {
    setSelectBoxOpenIdx(selectBoxOpenIdx === idx + 1 ? 0 : idx + 1)
  }

  const handleClickSelect = async (carrierId: string) => {
    try {
      await controllers.tracker.updateCarrierId(tracker, carrierId)
      getTrackerList()
    } catch (error) {
      showErrorMessage()
    }
  }

  const handleClickNewWindowTracker = (carrier: ICarrierDTO) => {
    const { popupURL } = carrier

    window.open(
      popupURL + trackingNumber,
      "",
      "resizable=yes,scrollbars=yes,width=720,height=600"
    )
  }

  const handleClickInlineTracker = () => {
    if (trackingNumber === "") {
      return
    }
    setTrackerState(false)
    setTimeout(() => setTrackerState(true), 0)
  }

  const handleClickCloseTracker = () => {
    setTrackerState(false)
  }

  const handleClickAddMemo = async (tracker: ITrackerDTO) => {
    try {
      await controllers.tracker.addMemo(tracker)
      getTrackerList()
    } catch (error) {
      showErrorMessage()
      return
    }
  }

  const handleDeleteMemo = async (idx: number) => {
    try {
      await controllers.tracker.deleteMemo(tracker, idx)
      getTrackerList()
    } catch (error) {
      showErrorMessage()
    }
  }

  const handleChangeMemo = async (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const cacheMemos = memos.map((memo) => memo)
    const newMemos = memos.map((memo) => memo)
    const newMemo = e.target.value
    newMemos[idx] = newMemo
    setMemos(newMemos)

    try {
      await controllers.tracker.updateMemo(tracker, idx, newMemo)
    } catch (error) {
      showErrorMessage()
      setMemos(cacheMemos)
    }
  }

  return (
    <div
      key={tracker.id}
      css={css`
        position: relative;
        padding: 20px 20px 0;
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
        &:hover {
          & > span {
            opacity: 1;
          }
        }

        @media (prefers-color-scheme: dark) {
          background: rgb(55, 55, 55);
        }
      `}
    >
      <DeleteBtn onClickDelete={() => handleClickDeleteTracker(tracker.id)} />
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 28px;
            svg {
              margin-top: 2px;
              width: 16px;
              height: auto;
              cursor: pointer;
              stroke: #05c38b;
            }
          `}
          onClick={() => handleClickAddMemo(tracker)}
        >
          <PlusIcon />
        </div>
        <input
          type="text"
          value={label}
          css={css`
            flex-grow: 1;
            line-height: 20px;
            margin: 0 0 10px;
            width: 100%;
            font-size: 13px;
            padding: 0 2px;
            border: 0;
            outline: none;
            background: transparent;

            @media (prefers-color-scheme: dark) {
              color: #bbb;
            }
          `}
          onChange={(e) => handleChangeLabel(e)}
          placeholder="이곳에 배송에 대한 간단한 메모를 적을 수 있어요."
        />
      </div>
      {memos.length > 0 && (
        <MemoBox
          memos={memos}
          index={index}
          handleChangeMemo={handleChangeMemo}
          handleDeleteMemo={handleDeleteMemo}
        />
      )}
      <div
        css={css`
          position: relative;
          padding-bottom: 10px;
        `}
      >
        <p
          css={css`
            margin: 0;
            line-height: 40px;
            padding: 0 15px;
            border: 1px solid #ddd;
            cursor: pointer;

            @media (prefers-color-scheme: dark) {
              border-color: rgb(85, 85, 85);
              color: #fff;
            }
          `}
          onClick={() => handleClickOpenSelectBox(index)}
        >
          {carrier.displayName}
          <span
            css={css`
              position: absolute;
              right: 15px;
              top: 13px;
              line-height: 0;
              svg {
                width: 16px;
                height: auto;
              }
            `}
          >
            <ArrowDownIcon />
          </span>
        </p>
        <SelectBox
          selectBoxOpenIdx={selectBoxOpenIdx}
          index={index}
          carrierList={carrierList}
          handleClickSelect={handleClickSelect}
        />
      </div>
      <div
        css={css`
          padding-bottom: 20px;
          display: flex;
        `}
      >
        <input
          type="text"
          value={trackingNumber}
          css={css`
            flex-grow: 1;
            width: 100%;
            line-height: 24px;
            margin: 0;
            padding: 0 15px;
            border: 1px solid #ddd;
            border-right: 0;
            font-size: 15px;
            outline: none;
            letter-spacing: 0.3px;

            &::placeholder {
              font-size: 13px;
            }

            @media (prefers-color-scheme: dark) {
              background: rgb(55, 55, 55);
              border-color: rgb(85, 85, 85);
              color: #fff;
            }
          `}
          onChange={(e) => handleChangeTrackingNumber(e)}
          placeholder="운송장 번호를 입력해주세요."
        />
        {carrier.isPopupEnabled && (
          <SubmitBtn
            onClick={() => handleClickNewWindowTracker(carrier)}
            text="새창"
            isWindow={true}
          />
        )}
        {carrier.isCrawlable && (
          <SubmitBtn onClick={handleClickInlineTracker} text="조회" />
        )}
      </div>
      {isTrackerState && (
        <TrackerState
          carrierId={carrier.id}
          trackerTrackingNumber={trackingNumber}
          closeFnc={handleClickCloseTracker}
        />
      )}
    </div>
  )
}

export default TrackerBox
