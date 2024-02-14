import { FC } from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate: FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialize auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
  };

  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
