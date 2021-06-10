from crime_cctv.models import CrimeDTO
from common.services import CommonService, Reader, Printer
import pandas as pd


class CrimeServiceR(Reader):
    @staticmethod
    def new_model_csv():
        rd = Reader()
        rd.setting_context()
        return rd.csv()

    def new_model_xls(self):
        rd = Reader()
        rd.setting_context()
        return rd.xls()


class CrimeServiceP(Printer):
    pass

