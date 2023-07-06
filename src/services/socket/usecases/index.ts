import { getConnectionSocket } from "../connection";

type HandleEvSocket<Request, Response> = [
  emit: (req: Request) => void, 
  on:(callback: (data: Response) => void) => void
];

/**
 * Creates socket event handlers for a specific event.
 * @param evEmit The event to emit.
 * @param evOn The event to listen to (optional, defaults to the emit event).
 * @returns An array containing the emit and on event handlers.
 */
export const handleEvSocket = <Request, Response = Request>(evEmit: string, evOn = evEmit): HandleEvSocket<Request, Response> => {
  const socket = getConnectionSocket();

  function emit(req: Request): void {
    socket.emit(evEmit, JSON.stringify(req));
  }

  function on(callback: (data: Response) => void): void {
    socket.on(evOn, async (data) => callback(data));
  }

  return [emit, on];
};
