export type Reducer<T> = (state: T, payload: any) => T;

export type Routine<T> = (state: T, payload: any) => void;

export type CreateReducedStateProps<T> = {
  initialState: T;
  reducers: Record<string, Reducer<T>>;
  routines: Record<string, Routine<T>>;
}