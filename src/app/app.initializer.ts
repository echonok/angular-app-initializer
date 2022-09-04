import { catchError, from, Observable } from 'rxjs';
import { IUserData, UserService } from './services/user.service';
import { Router } from '@angular/router';

export function initializeAppFactory(userService: UserService, router: Router): () => Observable<IUserData | boolean> {
  return () => userService.loadData().pipe(
    catchError(() => from(router.navigate(['/error'])))
  );
}
