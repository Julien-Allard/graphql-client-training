import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const options = {
   addTypename: true,
   resultCaching: false,
   typePolicies: {
      Info: {
         keyFields: ['next'],
      },
   },
};

const client = new ApolloClient({
   uri: 'https://graphql-server-training.herokuapp.com/',
   cache: new InMemoryCache(options),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <App />
      </ApolloProvider>
   </React.StrictMode>,
);
