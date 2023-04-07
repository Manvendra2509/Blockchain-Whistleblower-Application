
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Button from '../components/Button';

const Login = ({ isShowLogin }) => {
    const [haveMetamask, setHaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');



    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    /******When the application mounts it will detect for Metamask********/

    useEffect(() => {
        const { ethereum } = window;

        /* Checking for Metamask availability */
        const checkMetamaskAvailability = async () => {
            if (!ethereum) {
                // console.log("METAMASK NOT DETECTED!");
                setHaveMetamask(false);
            } else {
                // console.log("METAMASK DETECTED!");
                setHaveMetamask(true);
            }
        };
        checkMetamaskAvailability();
    }, [])



    /********** Conneccting the Wallet **********/

    const connectWallet = async () => {
        try {
            if (!ethereum) {
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



    return (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <header>

                <div className=" bg-orange-300 shadow-2xl absolute left-[40%]">
                    <div className=" p-16 ">
                        {/* <button className="bg-white px-2 py-4">Login with Metamask</button> */}
                        {haveMetamask ? (
                            <div>
                                {isConnected ? (
                                    <p>Connected Successfully !</p>
                                ) : (
                                    <button onClick={connectWallet}>
                                        LOGIN
                                    </button>
                                )}

                            </div>
                        ) : (
                            <p>Please Install Metamask</p>
                        )}
                    </div>
                </div>
            </header >
        </div >
    )

}

export default Login;