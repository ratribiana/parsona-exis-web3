import { ethers } from "ethers"

import * as PersonaNFT from "../blockchain/PersonaExisNft.blockchain"

export const PersonaContract = () => {
  const signer = provider.signer()
  return new ethers.Contract(PersonaNFT.ADDRESS, PersonaNFT.ABI, signer)
}
    