import { createContext, useContext } from "react";

export const TestContext  = createContext();


export const useTestContext = () => {
  const context = useContext(TestContext);

  if(!context){
    throw new Error("useTestContext must be used within a TestContext.Provider");
  }
  
  return context;
}