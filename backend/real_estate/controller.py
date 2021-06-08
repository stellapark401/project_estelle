from real_estate.housing import Housing
from real_estate.dataset import Dataset


class Controller(object):

    @staticmethod
    def main():
        while True:
            mn = int(input('Generate the Model\t1\nShow the Model\t\t2\nExit\t\t\t\t0'))
            if mn == 1:
                housing = Housing()
                dataset = Dataset()
                dataset.cost = housing.new_model('cost')
                dataset.index = housing.new_model('index')
            elif mn == 2:
                print('*' * 50)
                print(f'가격통계 type: {type(dataset.cost)}이다.')
                print(f'가격통계 column\n|->{dataset.cost.columns}이다.')
                print(f"가격통계 상위 5개\n {dataset.cost.head()}")
                print(f'가격통계 null 갯수\n{dataset.cost.isnull().sum()}개')
                print('*' * 50)
                print(f'지수통계 type: {type(dataset.index)}이다.')
                print(f'지수통계 column\n|->{dataset.index.columns}이다.')
                print(f"지수통계 상위 5개\n {dataset.index.head()}")
                print(f'지수통계 null 갯수\n{dataset.index.isnull().sum()}개')
            elif mn == 0:
                break
            else:
                print('Wrong Number')


Controller.main()
