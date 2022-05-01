import "./App.css";
import Navbar from "./Navbar";
import MintScreen from "./MintScreen";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";

function App() {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [contract, setContract] = useState(null);

  async function connect() {
    // Connects Metamask to Ethereum and grabs wallet
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setConnectedWallet(await signer.getAddress());
  }

  useEffect(() => {
    // Creates a contract object
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0x6006bd444008F5000f0bdA795F52e6823c3c8517";
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    setContract(Contract);
  }, [connectedWallet]);

  return (
    <div className="app">
      <Navbar ConnectedWallet={connectedWallet} connect={connect} />
      <MintScreen contract={contract} ConnectedWallet={connectedWallet} />
    </div>
  );
}

export default App;
