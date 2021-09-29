export interface UserBadgeModel {
  id: number;
}

export interface UserModel {
  name: string;
  id: number;
  createAt: Date;
  image: string;
  badges: UserBadgeModel[];
}
