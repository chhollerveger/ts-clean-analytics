export interface Log {
  event(type: Log.Type, data: Log.Data): void;
}

export namespace Log {
  export type Type = 'error' | 'action' | 'screen';
  export type Data = {
    messageError?: string,
    name?: string
  };
}