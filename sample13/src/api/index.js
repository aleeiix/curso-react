import {map, scan, startWith, switchMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

const api = `https://randomuser.me/api/?results=10&seed=rx-react&nat=us&inc=name&noinfo`;

const getData = (action$) => {
    const actionMap = {
        forward: +1,
        back: -1
    }

    const page$ = action$.pipe(
        scan((page, action) => page + actionMap[action], 1),
        startWith(1)
    )

    const names$ = page$.pipe(
        switchMap((page) => ajax.getJSON(`${api}&page=${page}`)),
        map(({results}) => results.map(user => `${user.name.first} ${user.name.last}`)),
    )

    return names$;
}

export default getData;