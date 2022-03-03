import ErrorAnalytics from "../analytics/error-analytics";

export default class LogglyAdapter implements ErrorAnalytics {
  saveError(error: string | undefined): void { }
}