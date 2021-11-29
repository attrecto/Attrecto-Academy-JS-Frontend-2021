export interface BadgeModel {
  id: number;
  name: string;
  image: string;
  description: string;
  createAt: Date;
}

export interface BadgeFormValues extends Omit<BadgeModel, "id" | "createAt"> {}
