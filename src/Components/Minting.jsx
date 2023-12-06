import React, { useState } from 'react'
import Nft from "../Data/Nft.gif";

const Minting = () => {
  const [mintValue, setMintValue] = useState(0)

  const increaseMintValue = () => {
    setMintValue((prev) => prev + 1)
  }

  const decreaseMintValue = () => {
    if(mintValue !== 0){
      setMintValue((prev) => prev - 1)
    }
  }
  return (
    <div className='pt-32'>
        <div className="flex flex-col items-center justify-center gap-12">
        {/* nft */}
        <div className="">
          <img src={Nft} alt="" className="w-72 md:w-96 shadow-xl rounded-xl " />
        </div>
        {/* Details */}
        <div className="text-center pb-6 space-y-4">
          <div className="text-3xl">
            <span className="font-bold text-secondary">Total Supply: </span>
            <span>10000</span>
          </div>
          <div className="text-3xl">
            <span className="font-bold text-secondary">Current Price: </span>
            <span>200 SOL</span>
          </div>
          <div className='flex flex-row items-center justify-center gap-6 pt-4 pb-4'>
            <button onClick={decreaseMintValue} className='p-1 text-3xl font-bold text-black rounded-xl px-6 bg-gray-400 hover:bg-secondary transition-all ease-in-out active:text-2xl '>-</button>
            <div className={mintValue !== 0 ? 'text-4xl font-bold text-primary' : 'text-3xl font-bold'}>{mintValue}</div>
            <button onClick={increaseMintValue} className='p-1 text-3xl font-bold text-black rounded-xl px-6 bg-gray-400 hover:bg-secondary transition-all ease-in-out active:text-2xl '>+</button>
          </div>
          <div>
            <button className="px-12 py-3 bg-primary hover:text-2xl transition-all ease-in-out font-bold uppercase rounded-lg text-xl">
              Mint Unites
            </button>
          </div>
        </div>
      </div>

      {/* Minting Info */}
      <div className="flex flex-col items-center md:flex-row w-full gap-12 px-12 pb-24">
        {/* MINT INFO */}
        <div className="w-full md:w-1/2 mx-auto bg-slate-300 bg-opacity-10 text-white rounded-xl p-6">
          <div className="">
            <h5 className="mb-4 text-2xl text-primary">
              {" "}
              <b>MINTING INFO:</b>
            </h5>
          </div>
          <div className="">
            <table className="w-full text-lg">
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Mint Price</p>
                </td>
                <td>
                  <p className="font-semibold ">200 SOL</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Sale Time</p>
                </td>
                <td>
                  <p className="font-semibold ">TBA</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Whitelist</p>
                </td>
                <td>
                  <p className="font-semibold ">Gurranted</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Public Sale</p>
                </td>
                <td>
                  <p className="font-semibold ">FCFS</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Accepted Currency</p>
                </td>
                <td>
                  <p className="font-semibold ">SOLANA</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* PROJECT iNFO */}
        {/* <div className="w-full md:w-1/2 bg-slate-300 bg-opacity-10 text-white rounded-xl p-6">
          <div className="">
            <h5 className="text-2xl font-bold text-primary">PROJECT INFO:</h5>
            <br />
          </div>
          <div className="">
            <h3 className="text-2xl">About :</h3>
            <p className="mt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              magni recusandae placeat, in fuga libero voluptate maiores tempora
              nobis hic asperiores quos ex sint ipsam.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Minting