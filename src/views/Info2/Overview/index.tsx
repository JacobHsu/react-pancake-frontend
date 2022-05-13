import { Heading } from '@pancakeswap/uikit'

import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'

import { useProtocolTransactions } from 'state/info/hooks'
import TransactionTable from 'views/Info2/components/InfoTables/TransactionsTable'

const Overview: React.FC = () => {
  const { t } = useTranslation()
  const [transactions] = useProtocolTransactions()

  return (
    <Page>
      <Heading scale="lg" mt="40px" mb="16px">
        {t('Transactions')}
      </Heading>
      <TransactionTable transactions={transactions} />
    </Page>
  )
}

export default Overview
