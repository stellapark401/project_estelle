from real_estate.dataset import Dataset
import pandas as pd


class Housing(object):

    dataset = Dataset()

    # Dataset's structure + DataFrame 의 model 을 생성한다.
    def new_model(self, payload):
        this = self.dataset
        this.context = './data/'
        this.f_name = 'time_series_' + payload
        if payload == 'cost':
            return pd.read_excel(this.context + this.f_name + '.xlsx', sheet_name='평균전세')
        elif payload == 'index':
            return pd.read_excel(this.context + this.f_name + '.xlsx', sheet_name='Sheet1')
        else:
            print('파일명을 잘못입력하셨습니다.')
            return
