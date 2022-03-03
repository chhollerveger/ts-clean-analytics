export default interface ErrorAnalytics {
  saveError: (error: string | undefined) => void;
}