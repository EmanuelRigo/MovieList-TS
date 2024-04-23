import { createContext, ReactNode } from "react";

type ContextValueType = {
  // Define la estructura del valor del contexto aquí
};

// Pasar el tipo definido como un argumento a createContext
export const context = createContext<ContextValueType | undefined>(undefined);
const Provider = context.Provider;

/* export const useContexto = () => {
  const contextValue = useContext(context);
  return contextValue;
}; */

const CustomProvider = ({ children }: { children: ReactNode }) => {
  // Aquí va la lógica de tu proveedor personalizado

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export { Provider, CustomProvider };
