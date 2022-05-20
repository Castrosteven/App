import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Auth, Hub } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useRouter } from "next/router";
interface AuthCreds {
  username: string;
  password: string;
}
interface Context {
  user: CognitoUser | null;
  login: ({ username, password }: AuthCreds) => Promise<void>;
  register: ({ username, password }: AuthCreds) => Promise<void>;
  verify: ({
    username,
    code,
  }: {
    username: string;
    code: string;
  }) => Promise<void>;
}

const Context = createContext<Context>({
  user: null,
  login: async () => {},
  register: async () => {},
  verify: async () => {},
});

export const UserContext = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<Context["user"]>(null);
  const login = async ({ username, password }: AuthCreds) => {
    try {
      const user = await Auth.signIn(username, password);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  const register = async ({ username, password }: AuthCreds) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  const verify = async ({
    username,
    code,
  }: {
    username: string;
    code: string;
  }) => {
    try {
      await Auth.confirmSignUp(username, code);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const listener = ({ event }: { event: string }) => {
      console.log(event);
      switch (event) {
        case "signOut":
          router.reload();
          break;
        case "signIn":
          router.push("/");
          break;

        default:
          break;
      }
    };
    fetchUser();
    Hub.listen("auth", ({ channel, payload, source }) => {
      listener({ event: payload.event });
    });
  }, [router]);

  return (
    <Context.Provider value={{ user, login, register, verify }}>
      {children}
    </Context.Provider>
  );
};

export const UseAuth = () => {
  return useContext(Context);
};
