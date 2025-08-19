import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useMemo } from "react";

function WalletBar() {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div>
      {address ? (
        <div className="flex items-center gap-4">
          <p>{shortenedAddress}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {connectors.map((connector) => (
            <button key={connector.id} onClick={() => connect({ connector })} className="text-green-500">
              Connect This {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WalletBar;
