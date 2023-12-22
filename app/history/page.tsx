import React from 'react'
import ContractExecutor from '../../components/contract'
import GetDataFromContract from '../../components/GetDataFromContract'
function page() {
  return (
    <div>
        <ContractExecutor functionName={"0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100::test19::IsRecieveStreamPresent"} functionArguments={["0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100",11,11]} />
        <GetDataFromContract functionName={"0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100::test19::IsRecieveStreamPresent"} functionArguments={["0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100"]} />
        <GetDataFromContract functionName={"0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100::test19::getListOfStreams"} functionArguments={["0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100"]} />
        <GetDataFromContract functionName={"0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100::test19::getListOfRecieveStreams"} functionArguments={["0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100"]} />
        
    </div>
  )
}

export default page