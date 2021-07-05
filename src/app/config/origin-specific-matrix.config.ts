import { OriginConfigMap } from './app.config.interface';

export const originSpecificMap: OriginConfigMap[] = [
  {
    origins: ['localhost:4200'],
    config: {
      BETS_API: 'http://localhost:3000',
      BETS_WSS_API: 'ws://localhost:3000',
    },
  },
];
