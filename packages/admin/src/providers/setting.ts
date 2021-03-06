import { httpProvider } from './http';

export class SettingProvider {
  /**
   * 获取设置
   */
  static async getSetting(): Promise<any> {
    return httpProvider.post('/setting/get');
  }

  /**
   * 更新设置
   */
  static async updateSetting(data): Promise<any> {
    return httpProvider.post(`/setting`, data);
  }
}
