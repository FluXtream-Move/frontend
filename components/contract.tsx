"use client"
import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useWallet,InputTransactionData } from '@aptos-labs/wallet-adapter-react';
import { AptosClient } from 'aptos';
export const moduleAddress ="0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100";
import { Aptos } from "@aptos-labs/ts-sdk";
import { MoveFunctionId } from "@aptos-labs/ts-sdk";


const ContractExecutor = ({ functionName, functionArguments }: { functionName: string, functionArguments: any[] }) => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [transactionInProgress, setTransactionInProgress] = useState(false);

  const executeFunction = async () => {
    if (!account) return;

    setTransactionInProgress(true);

    const transaction:InputTransactionData = {
      data:{
        function: functionName as MoveFunctionId,
        functionArguments: functionArguments,
      }
    };

    try {
      const response = await signAndSubmitTransaction(transaction);
      const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
      await client.waitForTransaction(response.hash);
      console.log('Transaction successful!');
    } catch (error) {
      console.log('Error executing function:', error);
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <Spin spinning={transactionInProgress}>
      <Button
        onClick={executeFunction}
        type="primary"
        className='bg-blue-500 text-white font-bold mt-1 rounded h-10'
      >
        Send
      </Button>
    </Spin>
  );
};

export default ContractExecutor;