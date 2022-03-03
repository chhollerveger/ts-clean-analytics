import ErrorAnalytics from "../analytics/error-analytics";

export default class ErrorAnalyticsComposite implements ErrorAnalytics {
  constructor(private readonly errorAnalytics: ErrorAnalytics[]) { }

  saveError(error: string | undefined): void {
    this.errorAnalytics.forEach(e => e.saveError(error));
  }
}