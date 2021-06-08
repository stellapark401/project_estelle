class Country(object):
    name = 'Country Name'
    population = 'Population'
    capital = 'Capital'

    def show(self):
        return 'This method belongs to Country_class.'


class Korea(Country):
    def __init__(self, name):
        self.name = name

    def show_name(self):
        return f'The name of Country is {self.name}.'


a = Korea('대한민국')

print(f'a.show: {a.show()}')
print(f'a.show_name: {a.show_name()}')
print(f'a has inherited population attr from Country: a.population: {a.population}')
