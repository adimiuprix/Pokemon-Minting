import React from "react";
import Container from "react-bootstrap/Container";
import charmander from "./images/0.png";
import pikachu from "./images/1.png";
import bulbasaur from "./images/2.png";
import evee from "./images/3.png";
import machamp from "./images/4.png";
import squirtle from "./images/5.png";
import pokeball from "./images/pokeball.png";

const MintScreen = ({ contract, ConnectedWallet }) => {
  const mint = async (id) => {
    const exists = await contract.balanceOf(ConnectedWallet, id);
    if (exists >= 2) {
      alert("You can only have one of each Pokemon");
      return;
    } else {
      try {
        await contract.mintNFT(id);
      } catch (error) {
        alert(error.message.slice(194, 232));
      }
    }
  };

  return (
    <Container className="mainscreen" fluid="xl">
      <div className="nftbox">
        <h1 className="nfttitle">Charmander</h1>
        <div>
          <img alt="Charmander" className="nftimage" src={charmander} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> Lizard Pokemon
          </p>
          <p>Height: 0.6m</p>
          <p>Weight: 8.5kg</p>
          <br />
          <p>
            Attacks:
            <br /> Scratch
            <br /> Ember
            <br /> Dragon Breath
          </p>
        </div>

        <img
          onClick={() => mint(0)}
          alt="mint!"
          className="pokeball"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
      <div className="nftbox">
        <h1 className="nfttitle">Pikachu</h1>
        <div>
          <img alt="Pikachu" className="nftimage" src={pikachu} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> Mouse Pokemon
          </p>
          <p>Height: 0.4m</p>
          <p>Weight: 6kg</p>
          <br />
          <p>
            Attacks:
            <br /> Quick Attack
            <br /> Thunder Shock
            <br /> Spark
          </p>
        </div>
        <img
          onClick={() => mint(1)}
          alt="mint!"
          className="pokeball"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
      <div className="nftbox">
        <h1 className="nfttitle">Bulbasaur</h1>
        <div>
          <img alt="Bulbasaur" className="nftimage" src={bulbasaur} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> Seed Pokemon
          </p>
          <p>Height: 0.7m</p>
          <p>Weight: 6.9kg</p>
          <br />
          <p>
            Attacks:
            <br /> Vine Whip
            <br /> Razor Leaf
            <br /> Take Down
          </p>
        </div>
        <img
          onClick={() => mint(2)}
          className="pokeball"
          alt="mint!"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
      <div className="nftbox">
        <h1 className="nfttitle">Evee</h1>
        <div>
          <img alt="evee" className="nftimage" src={evee} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> Evolution Pokemon
          </p>
          <p>Height: 0.3m</p>
          <p>Weight: 6.5kg</p>
          <br />
          <p>
            Attacks:
            <br /> Tackle
            <br /> Quick Attack
            <br /> Bite
          </p>
        </div>
        <img
          onClick={() => mint(3)}
          alt="Mint!"
          className="pokeball"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
      <div className="nftbox">
        <h1 className="nfttitle">Machamp</h1>
        <div>
          <img alt="machamp" className="nftimage" src={machamp} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> SuperPower Pokemon
          </p>
          <p>Height: 1.6m</p>
          <p>Weight: 130kg</p>
          <br />
          <p>
            Attacks:
            <br /> Revenge
            <br /> Dynamic Punch
            <br /> Cross Chop
          </p>
        </div>
        <img
          onClick={() => mint(4)}
          alt="Mint!"
          className="pokeball"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
      <div className="nftbox">
        <h1 className="nfttitle">Squirtle</h1>
        <div>
          <img alt="squirtle" className="nftimage" src={squirtle} />
        </div>
        <div className="nftstats">
          <p>
            Type:
            <br /> Tiny Turtle Pokemon
          </p>
          <p>Height: 0.5m</p>
          <p>Weight: 9.0kg</p>
          <br />
          <p>
            Attacks:
            <br /> Water Gun
            <br /> Water Pulse
            <br /> Bite
          </p>
        </div>
        <img
          onClick={() => mint(5)}
          alt="Mint!"
          className="pokeball"
          src={pokeball}
        />
        <p>Mint!</p>
      </div>
    </Container>
  );
};

export default MintScreen;
