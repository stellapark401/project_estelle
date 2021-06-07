from real_estate.housing import Housing
from real_estate.dataset import Dataset


class Controller(object):

    @staticmethod
    def main():
        housing = Housing()
        dataset = Dataset()

        dataset.cost = housing.new_model('cost')
        dataset.index = housing.new_model('index')
        # dataset = housing.drop_feature(dataset)

        print(dataset.cost)
        print(dataset.index)


Controller.main()
