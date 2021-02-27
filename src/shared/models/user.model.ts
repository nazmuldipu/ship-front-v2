import { Sort } from './sort.model';

export class User {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.username = phoneNumber;
  }

  id: number;
  // created: Date;
  // lastUpdated: Date;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  //  address: Address;
  // bookingList:Booking;

  roles: string[];
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  canReserve: boolean;
  canCancelReservation: boolean;
  canCancelBooking: boolean;
  commission: number;
}

export class UserPage {
  constructor(
    public content?: User[],
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public size?: number,
    public sort?: Sort[],
    public totalElements?: number,
    public totalPages?: number
  ) { }
}

export enum ERole {
  ROLE_ADMIN = 'Admin',
  ROLE_AGENT = 'Agent',
  ROLE_SERVICE_ADMIN = 'Service Admin',
  ROLE_SERVICE_AGENT = 'Service Agent',
  ROLE_USER = 'User'
}
