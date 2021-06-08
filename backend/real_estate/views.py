from real_estate.services import HousingService
from real_estate.models import HousingDTO


class HousingAPI(object):

    @staticmethod
    def print_df(df):
        print('*' * 50)
        print(f'Data type: {type(df)}이다.')
        print(f'Data column\n|->{df.columns}이다.')
        print(f"Data 상위 5개\n {df.head()}")
        print(f'Data null 갯수\n{df.isnull().sum()}개')
        print('*' * 50)

    @staticmethod
    def main():
        dto = HousingDTO()
        util = HousingService()

        while True:
            mn = int(input('Form a DataFrame\t1\nShow the Data\t\t2\nExit\t\t\t\t0'))
            if mn == 1:
                df = util.new_model(input('cost or index'))
            elif mn == 2:
                HousingAPI.print_df(df)
            elif mn == 0:
                break
            else:
                print('Wrong Number')


HousingAPI.main()
