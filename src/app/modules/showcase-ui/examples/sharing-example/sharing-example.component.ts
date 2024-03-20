import { Component } from '@angular/core';
import { Lab900SharingComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-sharing-example',
  template: ` <lab900-sharing
    [users]="users"
    [userLabelFn]="userLabelFn"
    [userImageFn]="userImageFn"
  />`,
  standalone: true,
  imports: [Lab900SharingComponent],
})
export class SharingExampleComponent {
  public users = [
    {
      username: 'testUser',
      profileImage:
        'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fyou%2Fyou-mockup.svg?alt=media&token=2b8b398c-ea85-470e-b037-6bca7e20619c',
    },
    {
      username: 'testUser2',
      profileImage: 'broken',
    },
    { username: 'testUser' },
    { username: 'testUser' },
  ];

  public userLabelFn = (user: any): string => user.username;
  public userImageFn = (user: any): string => user.profileImage || '';
}
