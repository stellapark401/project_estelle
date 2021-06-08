from crime_cctv.models import CctvDTO
from common.services import CommonService
import pandas as pd


class CctvService(CommonService):
    dto = CctvDTO()

    def new_model(self, payload):
        file_type = payload.split('.')[1]
        if file_type == 'csv':
            return self.new_model_for_csv(payload)
        elif file_type == 'xls':
            return self.new_model_for_xls(payload)
        elif file_type == 'json':
            print('json 파일은 지원하지 않습니다.')

    def new_model_for_csv(self, payload):
        this = self.dto
        this.context = './data/'
        this.f_name = payload
        return pd.read_csv(this.context + this.f_name)

    def new_model_for_xls(self, payload):
        this = self.dto
        this.context = './data/'
        this.f_name = payload
        return pd.read_excel(this.context + this.f_name, sheet_name='YainSoft_Excel1')
