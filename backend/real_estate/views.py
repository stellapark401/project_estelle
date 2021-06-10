from real_estate.services import HousingService
from real_estate.models import HousingDTO


class HousingAPI(object):

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
