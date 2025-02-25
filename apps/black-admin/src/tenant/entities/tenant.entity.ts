import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ schema: 'public' })
export class Tenant {
  @PrimaryKey()
  id!: number;

  @Property()
  companyName!: string;

  @Property()
  schemaKey!: string;

  @Property()
  contactName?: string;

  @Property()
  contactEmail?: string;

  @Property()
  contactPhone?: string;

  @Property()
  isActive: boolean = true;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
