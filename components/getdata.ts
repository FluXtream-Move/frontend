import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Aptos, MoveFunctionId, AptosConfig, Network, InputViewRequestData } from "@aptos-labs/ts-sdk";

const APTOS_NETWORK: Network = Network.DEVNET;

const getOptimalLpAmount = async (
  aptos: Aptos,
  functionName: string,
  functionArguments: any[],
): Promise<any> => {
  const payload: InputViewRequestData = {
    function: functionName as MoveFunctionId,
    functionArguments: functionArguments,
  };
  return aptos.view({ payload });
};

const GetData = ({ functionName, functionArguments }: { functionName: string, functionArguments: any[] }) => {
  const { account } = useWallet();
  const aptosConfig = new AptosConfig({ network: APTOS_NETWORK });
  const aptos = new Aptos(aptosConfig);

  const executeFunction = async () => {
    if (!account) return null;

    // Your logic here
    const result = await getOptimalLpAmount(aptos, functionName, functionArguments);
    return result;
  };

  return executeFunction;
};

export default GetData;