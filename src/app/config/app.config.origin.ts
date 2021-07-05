import {
  OriginConfigMap,
  PlatformSpecificVariables
} from './app.config.interface';
import { originSpecificMap } from './origin-specific-matrix.config';

export class OriginSpecificConfig {
  public static getConfig(): PlatformSpecificVariables {
    const host = OriginSpecificConfig.getHost();
    const found = originSpecificMap.find((conf: OriginConfigMap) => {
      return !!conf.origins.find((origin: any) => origin.includes(host));
    });
    return OriginSpecificConfig.getResponse(found);
  }

  private static getResponse(
    hostConfig: OriginConfigMap | undefined
  ): PlatformSpecificVariables {
    if (hostConfig) {
      OriginSpecificConfig.log(
        `Applying config for host ${OriginSpecificConfig.getHost()}`
      );
      return hostConfig.config;
    } else {
      OriginSpecificConfig.log('Applying default configuration.');
      return OriginSpecificConfig.getDefault();
    }
  }

  private static getDefault(): PlatformSpecificVariables {
    return {
      BETS_API: 'https://betsys-fe-assessment.herokuapp.com',
      BETS_WSS_API: 'wss://betsys-fe-assessment.herokuapp.com',
    };
  }

  private static log(msg: string): void {
    // tslint:disable-next-line:no-console
    console.info(msg);
  }

  private static getHost(): string {
    return window.location.host;
  }
}
