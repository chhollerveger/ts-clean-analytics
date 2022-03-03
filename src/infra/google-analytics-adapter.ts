import Analytics from "../analytics/analytics";

export default class GoogleAnalyticsAdapter implements Analytics {
  save(type: string, data: string | undefined): void { }
}