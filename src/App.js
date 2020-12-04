import React from 'react';
import OnramperWidget from '@onramper/widget'

const apiKey = 'pk_test_trQ0nGBcmU_JY41N8Tl50Q00'

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div className={'widget-container'}>
          <OnramperWidget
            API_KEY={apiKey}
            onlyGateways={['Moonpay']}
          />
        </div>
      </div>
    </>
  );
}

export default App;