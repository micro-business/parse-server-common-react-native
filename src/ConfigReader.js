// @flow

import { ConfigReader as ConfigReaderBase } from '@microbusiness/common-react-native'; // eslint-disable-line import/no-extraneous-dependencies

export default class ConfigReader extends ConfigReaderBase {
  constructor(environment) {
    super(environment);
  }

  getParseServerUrl = () => this.getPrefixedValue('PARSE_SERVER_URL');

  getParseServerApplicationId = () => this.getPrefixedValue('PARSE_SERVER_APPLICATION_ID');

  getParseServerJavascriptKey = () => this.getPrefixedValue('PARSE_SERVER_JAVASCRIPT_KEY');

  getParseServerClientKey = () => this.getPrefixedValue('PARSE_SERVER_CLIENT_KEY');
}
