export default interface Analytics {
  save: (type: string, data: string | undefined) => void;
}