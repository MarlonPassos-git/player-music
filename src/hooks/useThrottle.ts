export function useThrottle(func: Function, timeFrame: number) {
  let lastTime:number|Date = 0;
  return function (...args: any[]) {
      let now = new Date();

      // @ts-ignore
      if (now - lastTime >= timeFrame) {
          func(...args);
          lastTime = now;
      }
  };
}