import {useState, useEffect, useRef, useCallback} from 'react';
import { Subject } from 'rxjs';

const useObservable = (observable) => {
    
    const action$ = useRef(new Subject()).current;

    const dispatch = useCallback(data => action$.next(data), [action$]);

    const fn = useRef(observable).current;

    const [state, setState] = useState();

    useEffect(() => {
        const state$ = fn(action$.asObservable());
        const subs = state$.subscribe(setState);

        return () => subs.unsubscribe();
    }, [action$, fn])

    return [state, dispatch];
}

export default useObservable;