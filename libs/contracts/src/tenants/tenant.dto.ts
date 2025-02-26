export class TenantDto {
  id: number;
  companyName: string;
  schemaKey: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
