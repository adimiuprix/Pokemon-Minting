import React, { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import song from "./images/song.mp3";

const Navbar = ({ ConnectedWallet, connect }) => {
  useEffect(() => {
    const audio = new Audio(song);
    audio.play();
  }, [ConnectedWallet]);

  return (
    <div className="navbar">
      <h1 className="title">POKEMONCRYPT</h1>
      <div className="links">
        <h1>Team</h1>
        <h1>Marketplace</h1>
        <FaTelegramPlane className="telegram" />
      </div>
      {ConnectedWallet ? (
        `${ConnectedWallet.slice(0, 6)}...${ConnectedWallet.slice(35, 44)}`
      ) : (
        <button onClick={connect} type="button" className="nes-btn is-primary">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Navbar;
