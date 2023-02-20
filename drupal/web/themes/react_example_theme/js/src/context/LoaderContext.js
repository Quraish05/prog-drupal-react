import React, { useContext, createContext, useState } from "react";
import Loader from "../components/Loader";

export const LoaderContext = createContext({
  isLoading: false,
  setIsLoading: null,
});
export const LoaderUpdateContext = createContext();

//custom Hooks:
export function useLoader() {
  return useContext(LoaderContext);
}

export function useLoaderUpdate() {
  return useContext(LoaderUpdateContext);
}

export default function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  /* const toggleLoader = (status) => {
    setIsLoading(status);
  }; */

  function toggleLoader(status) {
    setIsLoading(status);
  }

  return (
    <LoaderContext.Provider value={isLoading}>
      <LoaderUpdateContext.Provider value={toggleLoader}>
        {children}
      </LoaderUpdateContext.Provider>
    </LoaderContext.Provider>
  );
}
