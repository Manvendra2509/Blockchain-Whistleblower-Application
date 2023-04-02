
import {ethers} from "ethers";
import { useState, useEffect } from "react";

const Login = () => {
    const [haveMetamask, setHaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');


    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    /******When the application mounts it will detect for Metamask********/

    useEffect(()=>{
     const {ethereum} = window;

     /* Checking for Metamask availability */
     const checkMetamaskAvailability = async () => {
        if(!ethereum){
            // console.log("METAMASK NOT DETECTED!");
            setHaveMetamask(false);
        }else{
            // console.log("METAMASK DETECTED!");
            setHaveMetamask(true);
        }
     };
     checkMetamaskAvailability();
    }, [])



  /********** Conneccting the Wallet **********/

  const  connectWallet = async () =>{
      try {
        if(!ethereum){
            setHaveMetamask(false);
        }
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        
        let balance = await provider.getBalance(accounts[0]);
        let bal = ethers.utils.formatEther(balance);

        setAccountAddress(accounts[0]);
        setAccountBalance(bal);     
        setIsConnected(true);
      } catch (error) {

        setIsConnected(false);
        
      }
  };



  return(
    <div>
        <header>
            {haveMetamask ? (
                <div>
                    {isConnected ? (
                        <div>
                            <div>
                                <h3>Wallet Address:</h3>
                                <p>
                                    {accountAddress.slice(0,4)}...
                                    {accountAddress.slice(38,42)}
                                </p>  
                            </div>
                         <div>
                            <h3>Wallet Balance:</h3>
                            <p>{accountBalance}</p>
                         </div>
                        </div>
                    ): (
                        <img src="" alt="" />
                    )}
                    {isConnected ? (
                        <p>Connected Successfully 🎉🎉</p>
                    ):
                    (
                        <button onClick={connectWallet}>
                            Connect
                        </button>
                    )}
                </div>
            ):(
                <p>Please Install Metamask</p>
            )}
        </header>
    </div>
  )

}

export default Login;