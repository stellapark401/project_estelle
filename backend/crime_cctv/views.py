from crime_cctv.models import CctvDTO
from crime_cctv.services import CctvService


class CctvApi(object):

    @staticmethod
    def main():
        dto = CctvDTO()
        util = CctvService()

        while True:
            mn = int(input('Form a DataFrame\t1\nShow the Data\t\t2\nExit\t\t\t\t0'))
            if mn == 1:
                df = util.new_model(input("Enter file's name: "))
            elif mn == 2:
                util.print_df(df)
            elif mn == 0:
                break
            else:
                print('Wrong Number')


CctvApi.main()
