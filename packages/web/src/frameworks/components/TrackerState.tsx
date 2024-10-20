import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import useDependencies from "../hooks/useDependencies"

interface IProps {
  carrierId: string
  trackerTrackingNumber: string
  closeFnc(): void
}

const TrackerState = ({
  carrierId,
  trackerTrackingNumber,
  closeFnc
}: IProps) => {
  const { controllers } = useDependencies()

  const [isLoading, setLoading] = useState(true)
  const [errMessage, setErrMessage] = useState("")
  const [deliveryState, setDeliverState] = useState(null)
  const [progresses, setProgresses] = useState([])

  const getDelivery = async () => {
    try {
      const data = await controllers.tracker.getDelivery(
        carrierId,
        trackerTrackingNumber
      )
      const { from, to, progresses, state } = data
      setDeliverState({
        from: from.name,
        to: to.name,
        state: state.name
      })
      setProgresses(progresses)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrMessage(error)
    }
  }

  useEffect(() => {
    getDelivery()
  }, [])

  return (
    <$stateArea>
      <$stateBox>
        {isLoading && <$loading />}
        {!isLoading && !!errMessage && (
          <$errorMessage>{errMessage}</$errorMessage>
        )}
        {!isLoading && !errMessage && (
          <div>
            <$stateSummary>
              <table>
                <thead>
                  <tr>
                    <th>발송지</th>
                    <th>도착지</th>
                    <th>배달결과</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{deliveryState.from}</td>
                    <td>{deliveryState.to}</td>
                    <td>{deliveryState.state}</td>
                  </tr>
                </tbody>
              </table>
            </$stateSummary>
            <$stateList>
              <table>
                <thead>
                  <tr>
                    <th>단계/시간</th>
                    <th>위치/현황</th>
                  </tr>
                </thead>
                <tbody>
                  {progresses.map((progress, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <p>[{progress.state.name}]</p>
                          <p>{progress.time}</p>
                        </td>
                        <td>
                          <p>[{progress.location}]</p>
                          <p>{progress.description}</p>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </$stateList>
          </div>
        )}
      </$stateBox>
      <$closeBtn onClick={closeFnc}>닫기</$closeBtn>
    </$stateArea>
  )
}

export default TrackerState

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const $stateArea = styled.div`
  border-top: 1px solid #eee;
  padding: 20px 0;
  @media (prefers-color-scheme: dark) {
    border-color: rgb(85, 85, 85);
  }
`

const $stateBox = styled.div`
  height: 200px;
  overflow: auto;
  padding: 0 15px 0 0;
`

const $stateSummary = styled.div`
  margin-bottom: 20px;
`

const $stateList = styled.div`
  table {
    th:first-of-type {
      width: 35%;
    }
    td {
      p {
        margin: 5px 0;
      }
    }
  }
`

const $loading = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
    border-top-color: #00dc9b;
    border-left-color: #00dc9b;
    animation: ${spin} 0.85s ease-in-out infinite;
  }
`

const $closeBtn = styled.button`
  margin-top: 20px;
  border: 0;
  text-align: center;
  width: 100%;
  font-size: 12px;
  line-height: 36px;
  padding: 0;
  background: #f5f5f5;
  border: 1px solid #ddd;

  @media (prefers-color-scheme: dark) {
    background: rgb(44, 44, 44);
    color: #ddd;
    border-color: rgb(85, 85, 85);
  }
`

const $errorMessage = styled.p`
  padding: 0 2px;
  color: #bbb;
  font-size: 13px;

  @media (prefers-color-scheme: dark) {
    color: #ddd;
  }
`
