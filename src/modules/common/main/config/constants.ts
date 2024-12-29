type OpenIdProps = {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  tokenIntrospectionEndpoint: string;
  userinfoEndpoint: string;
  endSessionEndpoint: string;
  jwksUri: string;
};

type VaultProps = {
  publicUrl: string;
  adminUrl: string;
  authUrl: string;
};

type ConstantProps = {
  openId: OpenIdProps;
  vault: VaultProps;
};

export type ConstantEnvProps = {
  development: ConstantProps;
  staging: ConstantProps;
  production: ConstantProps;
};

export const constants: ConstantEnvProps = {
  development: {
    openId: {
      issuer: "https://id.qa.globoi.com/auth/realms/globoi",
      authorizationEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/auth",
      tokenEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token",
      tokenIntrospectionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token/introspect",
      userinfoEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/userinfo",
      endSessionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/logout",
      jwksUri:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/certs",
    },
    vault: {
      publicUrl:
        "https://i.s3.glbimg.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      adminUrl:
        "https://api.s3.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      authUrl: "https://auth.s3.qa.globoi.com:5000/v3",
    },
  },
  production: {
    openId: {
      issuer: "https://id.qa.globoi.com/auth/realms/globoi",
      authorizationEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/auth",
      tokenEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token",
      tokenIntrospectionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token/introspect",
      userinfoEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/userinfo",
      endSessionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/logout",
      jwksUri:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/certs",
    },
    vault: {
      publicUrl:
        "https://i.s3.glbimg.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      adminUrl:
        "https://api.s3.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      authUrl: "https://auth.s3.qa.globoi.com:5000/v3",
    },
  },
  staging: {
    openId: {
      issuer: "https://id.qa.globoi.com/auth/realms/globoi",
      authorizationEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/auth",
      tokenEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token",
      tokenIntrospectionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/token/introspect",
      userinfoEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/userinfo",
      endSessionEndpoint:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/logout",
      jwksUri:
        "https://id.qa.globoi.com/auth/realms/globoi/protocol/openid-connect/certs",
    },
    vault: {
      publicUrl:
        "https://i.s3.glbimg.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      adminUrl:
        "https://api.s3.qa.globoi.com/v1/AUTH_ac3bc439fc6549cbaf873a89c6b5224a",
      authUrl: "https://auth.s3.qa.globoi.com:5000/v3",
    },
  },
};
