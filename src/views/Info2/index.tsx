import { ProtocolUpdater } from 'state/info/updaters'

export const InfoPageLayout = ({ children }) => {
  return (
    <>
      <ProtocolUpdater />
      {children}
    </>
  )
}
