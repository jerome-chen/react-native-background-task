declare module 'react-native-background-task' {
  export const schedule: (options?: {
    period?: number;
    timeout?: number;
  }) => any;
  export const define: (task) => void;
  export const finish: () => any;
  export const cancel: () => any;
  export const statusAsync: () => Promise<Status>;

  export const UNAVAILABLE_DENIED: string;
  export const UNAVAILABLE_RESTRICTED: string;

}

export interface Status {
  available: boolean;
  unavailableReason?: string
}
