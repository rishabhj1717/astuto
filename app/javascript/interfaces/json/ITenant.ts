interface ITenantJSON {
  id: number;
  site_name: string;
  site_logo: string;
  brand_display_setting: string;
  locale: string;
  custom_domain?: string;
}

export default ITenantJSON;