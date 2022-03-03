import Analytics from "../analytics/analytics";

export default class AnalyticsComposite implements Analytics {
  constructor(private readonly analytics: Analytics[]) { }

  save(type: string, data: string | undefined): void {
    this.analytics.forEach(e => e.save(type, data));
  }
}