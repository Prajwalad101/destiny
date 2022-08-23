/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

function useEffectAfterMount(cb: () => void, dependencies: any[]) {
  const justMounted = useRef(true);

  useEffect(() => {
    if (!justMounted.current) {
      cb();
    }
    justMounted.current = false;
  }, dependencies);
}

export default useEffectAfterMount;
