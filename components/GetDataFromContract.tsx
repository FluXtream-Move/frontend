"use client"
import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useWallet,InputTransactionData } from '@aptos-labs/wallet-adapter-react';
import { AptosClient } from 'aptos';
export const moduleAddress ="0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100";
import {
    Account,
    AccountAddress,
    Aptos,
    MoveFunctionId,
    AptosConfig,
    Ed25519PrivateKey,
    Network,
    NetworkToNetworkName,
    InputViewRequestData,
  } from "@aptos-labs/ts-sdk";
import { get } from 'http';
import { list } from 'postcss';
const APTOS_NETWORK: Network = Network.DEVNET;
const getOptimalLpAmount = async (
    aptos: Aptos,
    functionName: string,
    functionArguments: any[],
  ): Promise<void> => {
    const payload: InputViewRequestData = {
      function: functionName as MoveFunctionId,
      functionArguments: functionArguments,
    };
    const result = await aptos.view({ payload });
    console.log("Result of fetch is  ", result);
  };
const GetDataFromContract = ({ functionName, functionArguments }: { functionName: string, functionArguments: any[] }) => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  
  const aptosConfig = new AptosConfig({ network: APTOS_NETWORK });
  const aptos = new Aptos(aptosConfig);
  const executeFunction = async () => {
    if (!account) return;

    setTransactionInProgress(true);
    await getOptimalLpAmount(aptos,functionName,functionArguments);
    
      setTransactionInProgress(true);

        
    };

    return (
            <Spin spinning={transactionInProgress}>
            <Button
                onClick={executeFunction}
                type="primary"
                style={{ height: '40px', backgroundColor: '#3f67ff', marginTop: '1rem' }}
            >
                test view
            </Button>
            </Spin>
        );
}
export default GetDataFromContract;