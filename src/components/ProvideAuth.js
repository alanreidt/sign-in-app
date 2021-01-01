import { useProvideAuth } from "../utils/hooks";
import { authContext } from "../utils/constants";

function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export default ProvideAuth;
