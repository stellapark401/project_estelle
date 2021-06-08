class CommonService(object):

    @staticmethod
    def print_df(df):
        print('*' * 50)
        print(f'Data type: {type(df)}이다.')
        print(f'Data column\n|->{df.columns}이다.')
        print(f"Data 상위 5개\n {df.head()}")
        print(f'Data null 갯수\n{df.isnull().sum()}개')
        print('*' * 50)