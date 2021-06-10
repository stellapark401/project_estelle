import json
import pandas as pd
from models import DataTransferObject
from common.abstracts import PrinterBase, ReaderBase


class Printer(PrinterBase):

    def dframe(self, df):
        print('*' * 50)
        print(f'Data type: {type(df)}이다.')
        print(f'Data column\n|->{df.columns}이다.')
        print(f"Data 상위 5개\n {df.head()}")
        print(f'Data null 갯수\n{df.isnull().sum()}개')
        print('*' * 50)


class Reader(ReaderBase):
    def csv(self) -> object:
        return pd.read_csv(self.new_file(), encoding='UTF-8', thousands=',')

    def xls(self) -> object:
        return pd.read_excel(self.new_file(), encoding='UTF-8')

    def json(self, file) -> object:
        return json.load(open(self.new_file(), encoding='UTF-8'))

    def setting_context(self):
        self._context = (input('파일 경로를 입력해주세요'))
        self._f_name = (input('파일명을 확장자와 함께 입력해주세요'))

    def new_file(self) -> str:
        return self._context + self._f_name


class CommonService(object):
    pass
