import ErrorAnalytics from "../analytics/error-analytics";

export default class SentryAdapter implements ErrorAnalytics {
  saveError(error: string | undefined): void { }
}