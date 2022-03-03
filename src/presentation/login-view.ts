import { Log } from "./log";

export default class LoginView {
  constructor(private readonly log: Log) { }

  render() { this.log.event('screen', { name: 'Login' }); }
}
