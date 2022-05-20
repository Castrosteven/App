import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Context {
  results: string[];
  fetchNewEvents: ({
    location,
    keyword,
  }: {
    location: string;
    keyword: string;
  }) => void;
}
const Context = createContext<Context>({
  results: [],
  fetchNewEvents: () => {},
});

export const EventContext = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<string[]>([]);
  const fetchNewEvents = ({
    location,
    keyword,
  }: {
    location: string;
    keyword: string;
  }) => {
    setResults([location, keyword]);
  };

  return (
    <Context.Provider value={{ results, fetchNewEvents }}>
      {children}
    </Context.Provider>
  );
};

export const UseEvents = () => {
  return useContext(Context);
};
