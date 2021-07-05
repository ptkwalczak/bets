export interface PlatformSpecificVariables {
  BETS_API: string;
  BETS_WSS_API: string;
}

export interface OriginConfigMap {
  origins: string[];
  config: PlatformSpecificVariables;
}
