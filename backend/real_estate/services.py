from real_estate.models import HousingDTO
from common.services import CommonService
import pandas as pd
import xlwings as xw


class HousingService(CommonService):
    dto = HousingDTO()

    def new_model(self, payload):
        this = self.dto
        this.context = './data/'
        this.f_name = 'time_series_' + payload
        if payload == 'cost':
            return pd.read_excel(this.context + this.f_name + '.xlsx', sheet_name='평균전세')
        elif payload == 'index':
            return pd.read_excel(this.context + this.f_name + '.xlsx', sheet_name='Sheet1')
        else:
            print('파일명을 잘못입력하셨습니다.')
            return
