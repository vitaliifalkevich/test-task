import React from 'react'
import SignUpStyled from './styledContainers/SignUpStyled'
import SignUpWindow from './components/SignUpWindow'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { QUERY_URI } from './constants'

const client = new ApolloClient({ uri: QUERY_URI })

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SignUpStyled>
        <SignUpWindow/>
      </SignUpStyled>
    </ApolloProvider>)
}

export default App
