import { PersonaContract } from "../web3Utils"

export const mint = async () => {
  const tx = await PersonaContract().mint()
  return await tx.wait()
}
