from crime_cctv.services import CrimeServiceR, CrimeServiceP


class CrimeApi(object):

    @staticmethod
    def main():
        util_r = CrimeServiceR()
        util_p = CrimeServiceP()

        while True:
            mn = int(input('Form a DataFrame\t1\nShow the Data\t\t2\nExit\t\t\t\t0'))
            if mn == 1:
                util_p.dframe(util_r.new_model_csv())
            elif mn == 2:
                df = util_r.new_model_xls()
                util_p.dframe(df)
            elif mn == 0:
                break
            else:
                print('Wrong Number')


CrimeApi.main()
