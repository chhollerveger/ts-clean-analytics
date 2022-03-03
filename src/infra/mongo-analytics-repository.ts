import Analytics from "../analytics/analytics";
import ErrorAnalytics from "../analytics/error-analytics";

export default class MongoAnalyticsRepository implements Analytics, ErrorAnalytics {
  save(type: string, data: string | undefined): void { }
  saveError(error: string | undefined): void { }
}