"use client"
import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { AptosClient } from 'aptos';
export const moduleAddress ="0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100";


const ContractExecutor = ({ functionName, functionArguments }: { functionName: string, functionArguments: any[] }) => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [transactionInProgress, setTransactionInProgress] = useState(false);

  const executeFunction = async () => {
    if (!account) return;

    setTransactionInProgress(true);

    const payload = {
      type: 'script_function_payload',
      function: functionName,
      type_arguments: [],
      arguments: functionArguments,
    };

    try {
    const response = await signAndSubmitTransaction({ data: payload });
      const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
      await client.waitForTransaction(response.hash);
      
      console.log('Transaction successful!');
      // You can set the response to a state variable if you want to display it on the UI
    } catch (error) {
      console.log('Error executing function:', error);
      // Handle error scenario, display error message or take necessary actions
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <Spin spinning={transactionInProgress}>
      <Button
        onClick={executeFunction}
        type="primary"
        style={{ height: '40px', backgroundColor: '#3f67ff', marginTop: '1rem' }}
      >
        Execute {functionName}
      </Button>
    </Spin>
  );
};

export default ContractExecutor;